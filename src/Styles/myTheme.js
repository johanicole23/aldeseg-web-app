import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    common: {
      customDark: '#00000',
      customDarkBlue: '#000729',
      customYellow: '#FED330',
      customBlue: '#081A73',
      customLightBlue: '#2FC1EF',
      customFooterBlue:'#F1F5FF',
      customYellowTransparent: 'rgba(254, 211, 48, 0.7)',
      customGrey: '#F2F2F2',
    },
    primary: {
      main: '#000729',
    },
    secondary: {
      main: '#FED330',
    },
    tertiary: {
      main: '#081A73',
    },
  },
});


export default myTheme;