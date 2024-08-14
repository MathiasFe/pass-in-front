import { SxProps } from "@mui/material";
import { ReactNode } from "react";

 export type Tcontainer = {
      
      children?: ReactNode;
      fullHeight?: Boolean;
      spacing?:number,
      fullwidth?: Boolean;
      container?:Boolean;
      backgroundColor?: string;
      sx?:SxProps;
    };