import { SxProps } from "@mui/material";
import { ReactNode } from "react";

 export type Tcontainer = {
      
      children?: ReactNode;
      fullHeight?: Boolean;
      fullwidth?: Boolean;
      backgroundColor?: string;
      sx?:SxProps;
    };