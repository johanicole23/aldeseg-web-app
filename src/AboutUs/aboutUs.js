import { Typography, Box,  ThemeProvider } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';
import myTheme from '../Styles/myTheme';
import NavBar from '../ExtraComponents/navBar';
import Footer from '../ExtraComponents/footer';
import ImageSlider2 from '../ExtraComponents/imageSlider2';
import CircleComponent from '../ExtraComponents/circleComponent';
import ArticleComponent from '../ExtraComponents/articleComponent';
import SwiperComponent from '../ExtraComponents/swiperComponent';
import OneSlide from '../ExtraComponents/oneSlide';
import WhoComponent from '../ExtraComponents/whoComponent';
import { aboutUsWhoComponent, aboutUsSlide, aboutUsMisionVision, homeSlides, homeCircleIcons, homeArticleComponent, homeAliancesComponent } from '../assets/data';

function AboutUs() {

    return (
        <ThemeProvider theme={myTheme}>
            <NavBar title="AppBar" />
            <OneSlide data={aboutUsSlide} />

            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={{...text.textH1, margin:'0 5%'}}>Nuestra Visión y Misión</Typography>
                <ArticleComponent data={aboutUsMisionVision} />
            </Box>

            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={{...text.textH1, margin:'0 5%'}}>¿Quiénes Somos?</Typography>
                <Typography sx={{...text.textH4, margin:'0 5%'}}>Personas comprometidas con tu seguridad</Typography>
                <WhoComponent data={aboutUsWhoComponent} />
            </Box>

            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={{...text.textH1, margin:'0 5%'}}>ALDESEG como la opción ideal para tus necesidades</Typography>
                <ArticleComponent data={homeArticleComponent} />
            </Box>
            
            <Footer title="Footer" />
        </ThemeProvider>

    );
}

export default AboutUs;