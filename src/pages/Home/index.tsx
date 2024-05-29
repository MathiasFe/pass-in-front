import { Grid, Typography } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <>
      <Grid container bgcolor={"bg"}>
        <Grid item lg={12}>
          <Typography style={{ color: "#fff" }}>Hello world !!</Typography>
          <Typography>Hello world !!</Typography>
        </Grid>
      </Grid>
    </>
  );
};
