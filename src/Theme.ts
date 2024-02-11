import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiFormControl:{
      styleOverrides:{
        root:{
          margin: '10px 0',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root:{
          backgroundColor: '#F6F6F6',
        },
      },
    },
    MuiButton:{
      styleOverrides: {
        root:{
          fontSize: 18,
          color:'#3A2D2B',
          padding: 0,
          marginTop: 20,
          '&:hover': {
            fontWeight: 'bold',
            backgroundColor: 'transparent !important',
          },
        },
      },
    }
  },
});

export default theme