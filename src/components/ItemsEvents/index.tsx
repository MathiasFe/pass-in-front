import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { TEventsItem } from "../../Types/itemMockup";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState, ChangeEvent } from "react";
import { RegisterBase } from "../register";
import { ModalCustom } from "../modal";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const ItemsEvents = ({
  items,
  selectId,
}: {
  items: Array<TEventsItem>;
  selectId: number;
}) => {
  const [list, setList] = useState<Array<TEventsItem>>(items);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isShowCardCadastro, setIsShowCardCadastro] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<TEventsItem | null>(null);
  const qtdForPage = 5;

  const configInit = () => {
    if (selectId > 0) {
      let item: TEventsItem | any = items.find((i) => i.id === selectId);
      setList(() => {
        let newArray = [item];
        return newArray;
      });

      setTotalPage(() => 1);
      setPage(() => 1);

      return;
    }

    setList(() => items);

    configurePages();
  };

  const configurePages = () => {
    setPage(() => 1);
    let num = items.length;
    console.log({ a: num / qtdForPage });
    if (num % qtdForPage > 0) {
      setTotalPage(() => Math.trunc(num / qtdForPage) + 1);
      return;
    }

    if (num / qtdForPage === 0) {
      setTotalPage(() => 1);
      return;
    }

    setTotalPage(() => num / qtdForPage);
  };

  useEffect(() => {
    configInit();
  }, [selectId]);

  useEffect(() => {
    reconfigItems();
  }, [page]);

  const reconfigItems = () => {
    let qtd = (page - 1) * qtdForPage;
    let newList: Array<TEventsItem> = items.slice(qtd, page * qtdForPage);

    setList(() => newList);
  };

  const handlerSetPage = (e: ChangeEvent<unknown>, value: number) => {
    setPage(() => value);
  };

  const handlerClose = () => {
    setIsShowCardCadastro(() => false);
  };

  const handlerSetIndex = (item: TEventsItem) => {
    console.log({ a: "entrei aqui" });
    setSelectItem(() => item);
    setIsShowCardCadastro(() => true);
  };

  return (
    <Grid container gap={3}>
      {list.map((item, index) => (
        <Grid
          item
          xs={12}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "flex-start",
          }}
        >
          <Card variant="outlined" sx={{ width: "80%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <LocationOnIcon sx={{ fontSize: ".8rem" }} /> Online
              </Typography>
              <div style={{ marginTop: "3rem" }}>
                <Typography variant="subtitle1">{item.details}</Typography>
              </div>
              <div style={{ marginTop: "3rem" }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<PersonAddIcon />}
                  onClick={() => handlerSetIndex(item)}
                >
                  {"Inscrever-se".toLowerCase()}
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack spacing={2} mb={4}>
          <Pagination count={totalPage} page={page} onChange={handlerSetPage} />
        </Stack>
      </Grid>

      <ModalCustom show={isShowCardCadastro} handlerClose={handlerClose}>
        <RegisterBase handlerClose={handlerClose} item={selectItem} />
      </ModalCustom>
    </Grid>
  );
};
