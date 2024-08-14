import { Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import BannerPath from "../../image/eventBanner.jpg";
import {
  GridTextTitle,
  BannerEvent,
  GridBannerHome,
} from "./components-styles";
import { ContainerComponent } from "../../components/container";
import Eventos from "../../components/eventos";

export const Home = () => {
  return (
    <>
      <ContainerComponent
        fullHeight
        fullwidth
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <GridTextTitle item lg={6} md={6} sm={12}>
          <Typography variant="h2">Eventos Disponíveis</Typography>
          <Typography variant="body1">
            Descubra novas possibilidades, amplie seus conhecimentos e crie
            conexões valiosas: selecione sua próxima experiência de aprendizado
            em nossos eventos!
          </Typography>
        </GridTextTitle>
        <Hidden mdDown>
          <GridBannerHome
            item
            xs={6}
            sx={{
              height: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <BannerEvent src={BannerPath} />
          </GridBannerHome>
        </Hidden>
      </ContainerComponent>

      <Eventos />
    </>
  );
};
