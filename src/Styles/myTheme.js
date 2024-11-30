import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    common: {
      customDark: '#00000',
      customDarkBlue: '#004380',
      customYellow: '#FFE964',
      customBlue: '#0B67BB',
      customLightBlue: '#2FC1EF',
      customFooterBlue:'#F1F5FF',
      customYellowTransparent: 'rgba(254, 211, 48, 0.7)',
      customGrey: '#F2F2F2',
    },
    primary: {
      main: '#004380',
    },
    secondary: {
      main: '#FFE964',
    },
    tertiary: {
      main: '#0B67BB',
    },
    quaternary:{
      main: '#ADADAD',
    }
  },
});


export default myTheme;