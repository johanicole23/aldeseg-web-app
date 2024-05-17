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
import { homeSlides, homeCircleIcons, homeArticleComponent, homeAliancesComponent } from '../assets/data';

function Home() {

    return (
        <ThemeProvider theme={myTheme}>
            <NavBar title="AppBar" />
            <ImageSlider2 data={homeSlides} />
            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={text.textH2}>Lo mejor de nosotros</Typography>
                <Typography sx={text.textH4}>en todo momento</Typography>
                <CircleComponent data={homeCircleIcons} />
            </Box>

            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={{...text.textH1, margin:'0 5%'}}>ALDESEG como la opción ideal para tus necesidades</Typography>
                <ArticleComponent data={homeArticleComponent} />
            </Box>

            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={{...text.textH2, margin:'0 5%'}}>Alianzas con las Mejores Aseguradoras</Typography>
                <Typography sx={{...text.textH4, margin:'0 5%'}}>nuestros socios en proteger lo que más importa</Typography>
                <SwiperComponent data={homeAliancesComponent} />
            </Box>

            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={{...text.textH1, margin:'0 5%'}}>ALDESEG como la opción ideal para tus necesidades</Typography>
                <ArticleComponent data={homeArticleComponent} />
            </Box>
            
            <Footer title="Footer" />
        </ThemeProvider>

    );
}

export default Home;