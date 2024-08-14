import { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@mui/material";
import { CustomDivider } from "../../pages/Home/components-styles";
import { ItemsEvents } from "../ItemsEvents";
import { useTheme } from "@mui/material/styles";
import { TEventsItem } from "../../Types/itemMockup";
import { ContainerComponent } from "../container";
import { getEvents } from "../../api/eventos";
import { useAlertMessage } from "../../hooks/useAlertMessage";

type OptionAutoComplete = {
  id: number;
  label: string;
};

export default function Eventos() {
  const theme = useTheme();
  const [selectId, setSelectId] = useState<number>(0);
  const [items, setItems] = useState<Array<TEventsItem> | null>(null);
  const { showAlertError } = useAlertMessage();

  useEffect(() => {
    buscandoEventos();
  }, []);

  const buscandoEventos = async () => {
    try {
      const eventos = await getEvents();

      if (!eventos)
        throw new Error(
          "Ops, algo deu errado: Não foi possivel buscar os dados - R33455"
        );

      setItems(() => eventos);
    } catch (error: any) {
      showAlertError(error.message);
    }
  };

  const handleChange = (newValue: OptionAutoComplete) => {
    if (!newValue) {
      setSelectId(() => 0);
      return;
    }

    setSelectId(() => newValue.id);
  };

  return (
    <>
      <ContainerComponent fullHeight={false} spacing={2}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <Typography variant="h5">Próximos Eventos</Typography>
            <Typography variant="body2">
              Encontre eventos interressantes em sua àrea
            </Typography>
          </Box>
          {!!items?.length && (
            <Autocomplete
              freeSolo
              options={items.map((option) => ({
                id: option.id,
                label: option.title,
              }))}
              sx={{ width: 300 }}
              onChange={(event, newValue) => handleChange(newValue)}
              renderInput={(params) => {
                return <TextField {...params} label="Eventos" />;
              }}
            />
          )}
        </Grid>

        {!!items?.length && (
          <Grid item xs={12}>
            <ItemsEvents items={items} selectId={selectId} />
          </Grid>
        )}
      </ContainerComponent>
    </>
  );
}
