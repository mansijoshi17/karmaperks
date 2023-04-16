import { createTheme } from "@mui/material" 

//#7F4EFF
//$010109

// background-color: linear-gradient(to right, #010109, #08061d, #0b0c2c, #09103c, #09114c, #11145b, #1b166b, #27177a, #381c8d, #4a20a1, #5d24b4, #7127c7);
export const theme = () => createTheme({
    components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundImage: "linear-gradient(to right, #010109, #08061d, #0b0c2c, #09103c, #09114c, #11145b, #1b166b, #27177a, #381c8d, #4a20a1, #5d24b4, #7127c7)",
              color: "white",
            }
          }
        }
      },
    status: {
        danger: '#e53e3e',
    },
    palette: {
        mode: 'dark',
        primary: {
            main:  'rgba(255,255,255,0.2)',
            darker: 'rgba(255,255,255,0.4)',
            contrastText: '#fff',
        },
        secondary: {
            main: '#64748B',
            contrastText: '#fff',
        },

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});