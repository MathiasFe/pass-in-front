import React from "react";
import { styled } from "@mui/system";
import { Grid, Theme } from "@mui/material";
import { Tcontainer } from "./types";

type TstyleContainer = Tcontainer & {
  theme?: Theme;
};

export const CustomContainer = styled(Grid)(
  ({ theme, fullHeight, fullwidth, backgroundColor }: TstyleContainer) => ({
    height: fullHeight ? "100vh" : "auto",
    width: fullwidth ? "100%" : "auto",
    background: backgroundColor,
  })
);
