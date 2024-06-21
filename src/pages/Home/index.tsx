import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import LogoPath from "../../image/logo.png";
import BannerPath from "../../image/eventBanner.jpg";
import {
  GridTextTitle,
  BannerEvent,
  GridBannerHome,
  CustomDivider,
} from "./components-styles";
import { useTheme } from "@mui/material/styles";
import { ContainerComponent } from "../../components/container";

export const Home = () => {
  const theme = useTheme();
  return (
    <>
      <ContainerComponent
        fullHeight
        fullwidth
        backgroundColor="linear-gradient(180deg, rgba(94,37,155,1) 39%, rgba(0,0,0,1) 100%)"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <GridTextTitle item lg={6} md={6} sm={12}>
          <Typography variant="h2" color={theme.palette.text_white}>
            Eventos Disponíveis
          </Typography>
          <Typography variant="body1" color={theme.palette.text_white}>
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
      <ContainerComponent
        fullHeight
        fullwidth
        backgroundColor="#D8D8D8"
        sx={{ paddingTop: "2rem" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">Programação</Typography>
          <CustomDivider width="80%" theme={theme} />
        </Grid>
      </ContainerComponent>
    </>
  );
};
