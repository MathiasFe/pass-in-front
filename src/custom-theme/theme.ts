import {createTheme} from '@mui/material'

declare module '@mui/material/styles' {
    interface Palette {
      bg:string,
      text_white:string,
    }
  
    interface PaletteOptions {
      bg?: string,
      text_white?:string,
    }
  }

const theme = createTheme({
    palette:{
        bg:'#262626',
        text_white:'#F6F6F6',
        primary:{
          main:'#5E259B'
        }
    }

    });

export default theme;