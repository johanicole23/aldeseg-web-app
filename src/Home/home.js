import { Typography, Box, Button, ThemeProvider, Grid } from '@mui/material';
import text from '../Styles/text';
import button from '../Styles/button';
import box from '../Styles/box';
import myTheme from '../Styles/myTheme';
import NavBar from '../ExtraComponents/navBar';
import Footer from '../ExtraComponents/footer';
import ImageSlider2 from '../ExtraComponents/imageSlider2';
import CircleComponent from '../ExtraComponents/circleComponent';
import { homeSlides, homeCircleIcons } from '../assets/data';

function Home() {

    return (
        <ThemeProvider theme={myTheme}>
            <NavBar title="AppBar" />
            <ImageSlider2 data={homeSlides} />
            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={text.textH2}>Conoce nuestros servicios</Typography>
                <Typography sx={text.textH4}>Disponibles y a tu alcance</Typography>
                <CircleComponent data={homeCircleIcons}/>

            </Box>

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
            <Footer title="Footer" />
        </ThemeProvider>

    );
}

export default Home;