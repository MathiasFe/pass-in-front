import {createTheme} from '@mui/material'

declare module '@mui/material/styles' {
    interface Palette {
      bg:string;
    }
  
    interface PaletteOptions {
      bg?: string;
    }
  }

const theme = createTheme({
    palette:{
        bg:'#121212'
    }

    });

export default theme;