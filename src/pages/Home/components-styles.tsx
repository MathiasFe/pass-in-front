import React from "react";
import { styled } from "@mui/system";
import { Grid, Theme } from "@mui/material";

export const Logo = styled("img")({
  height: "20rem",
});

export const BannerEvent = styled("img")(({ theme }) => ({
  height: "80%",
  borderRadius: "20px",
  boxShadow: "10px -10px 30px 1px rgba(0,0,0,1)",
}));

export const GridBannerHome = styled(Grid)(({ theme }) => ({
  height: "100%",
  justifyContent: "center",
  alignContent: "center",
  paddingLeft: "13rem",
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
  },
}));

export const GridTextTitle = styled(Grid)(({ theme }) => ({
  paddingLeft: "5rem",
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
  },
}));

export const CustomDivider = styled("hr")(
  ({ theme, width }: { theme?: Theme; width?: string }) => ({
    width: width,
    background: theme?.palette.primary.main,
    border: "none",
    borderBottom: `2px solid ${theme?.palette.primary.main}`,
    boxShadow: `0px 0px 2px .1px ${theme?.palette.primary.main}`,
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  })
);
