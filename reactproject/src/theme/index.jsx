import { createTheme } from "@mui/material";
import typography from './typography';

export const theme= createTheme({

    typography,
    fontFamily:"'Poppins',sans-serif",
    main:'#415161',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
    error:'red',
    components: {
        MuiButton: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.variant === 'contained' &&
                ownerState.color === 'primary' && {
                  backgroundColor: '#ff5151',
                  color: '#fff',
                  fontSize:'15px',
                  borderRadius:'5px',
                  padding:'7px 30px',
                  "&:hover":{
                    backgroundColor:'#ff3f26',
                    color:'#fff',
                    
                  }
                }),
            }),
          },
        },
        MuiIconButton:{
          styleOverrides:{
            root:{
              background:'#ff5151',
              color:'#fff',
              borderRadius:'7px',
            }
          }
        },
        MuiListItemButton:{
          styleOverrides:{
            root:{
              fontSize: '15px',
              color: '#415161',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '400',
              "&:hover":{
                color:'#ff3f26'
              }
            }
          }
        },
        MuiBadge:{
          styleOverrides:{
            badge:{
              background:'#ff5151'
            }
          }
        }
      },

})