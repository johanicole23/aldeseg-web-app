import { Typography, Box, Button, ThemeProvider } from '@mui/material';
import text from '../Styles/text';
import button from '../Styles/button';
import myTheme from '../Styles/myTheme';

function Home() {

    return (
        <ThemeProvider theme={myTheme}>
            <Box alignItems='center' justifyContent={'center'} sx={{ mt: '5%' }}>
                <Typography sx={text.textH1}>
                    ALDESEG
                </Typography>
                <Typography sx={text.textH2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <Typography sx={text.textH3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <Typography sx={text.textH4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <Typography sx={text.textH5}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    to="/"
                    sx={button.buttonWhiteText}
                >
                   Más información
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    color="secondary"
                    to="/"
                    sx={button.buttonWhiteText}
                >
                   Más información
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    color="tertiary"
                    to="/"
                    sx={button.buttonWhiteText}
                >
                   Más información
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    color="secondary"
                    to="/"
                    sx={button.buttonDarkBlueText}
                >
                   Cotiza con nosotros
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    color="primary"
                    to="/"
                    sx={button.buttonWhiteTextSmall}
                >
                   Experiencia
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    color="secondary"
                    to="/"
                    sx={button.buttonWhiteTextSmall}
                >
                   Más información
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    color="tertiary"
                    to="/"
                    sx={button.buttonWhiteTextSmall}
                >
                   Más información
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    color="secondary"
                    to="/"
                    sx={button.buttonDarkBlueTextSmall}
                >
                   Cotiza con nosotros
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    to="/"
                    sx={button.buttonDarkBlueTextSmall}
                >
                   Cotiza con nosotros
                </Button>

            </Box>
        </ThemeProvider>

    );
}

export default Home;