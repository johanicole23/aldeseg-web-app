import { Typography, Box, Button, ThemeProvider } from '@mui/material';
import text from '../Styles/text';
import button from '../Styles/button';
import myTheme from '../Styles/myTheme';
import NavBar from '../ExtraComponents/navBar';
import Footer from '../ExtraComponents/footer';


function Home() {

    return (
        <ThemeProvider theme={myTheme}>
            <div><NavBar title="AppBar Component" /></div>

            <Box alignItems='center' justifyContent={'center'} sx={{ mt: '5%' }}>

                <Typography sx={text.textH1}>
                    ALDESEG
                </Typography>
                <Typography sx={text.textH2}>
                    Hola Hola
                </Typography>
                <Typography sx={text.textH3}>
                    Agdshgsreuitgheroinrldksf jdfhdiughdfighdfgkdfg
                </Typography>
                <Typography sx={text.textH4}>
                    hyuidsfbdsufs bsdfybdsufsd
                </Typography>
                <Typography sx={text.textH5}>
                    Lore impsum hyuidsfbdsufs bsdfybdsufsd
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
            <div><Footer title="Footer" /></div>
        </ThemeProvider>

    );
}

export default Home;