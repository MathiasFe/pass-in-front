import { Button, Grid, TextField, Typography } from "@mui/material";
import { TEventsItem } from "../../Types/itemMockup";
import { useState } from "react";
import { ICadastroBase, IRegisterBase } from "./types";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { verify } from "crypto";

export function RegisterBase({ handlerClose, item = null }: ICadastroBase) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [form, setForm] = useState<IRegisterBase>({
    name: "",
    mail: "",
    confirmMail: "",
  });

  const verifyMail = (text: string) => {
    if (text === form.confirmMail || text === form.mail) {
      setDisabled(() => false);
      return;
    }
    setDisabled(true);
  };

  const handlerChangeValue = (text: string, name: string) => {
    setForm((prevState) => ({ ...prevState, [name]: text }));
    if (name === "mail" || name === "confirmMail") {
      verifyMail(text);
    }
  };

  const handlerSave = () => {
    handlerClose();
  };

  return (
    <Grid container gap={2}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <GroupAddIcon fontSize="inherit" />
          Inscrever-se em:
        </Typography>
        <Typography mt={1} sx={{ fontWeight: "bold" }}>
          {item?.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          value={form.name}
          onChange={(e) => handlerChangeValue(e.target.value, "name")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={form.mail}
          onChange={(e) => handlerChangeValue(e.target.value, "mail")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Confirme seu e-mail"
          variant="outlined"
          fullWidth
          value={form.confirmMail}
          onChange={(e) => handlerChangeValue(e.target.value, "confirmMail")}
        />
      </Grid>
      <Grid item xs={12}>
        <Button disabled={disabled} variant="contained" onClick={handlerSave}>
          Cadastre-se
        </Button>
      </Grid>
    </Grid>
  );
}
