import { Typography, Box, ThemeProvider } from '@mui/material';
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
import BigTitleComponent from '../ExtraComponents/bigTitleComponent';
import BackgroundDetail from '../ExtraComponents/backgroundDetail';
import BoxComponent from '../ExtraComponents/boxComponent';

import { aboutUsSlide, aboutUsBigTitle, aboutUsWhoComponent, aboutUsMisionVision, homeSlides, homeCircleIcons, homeArticleComponent, homeAliancesComponent } from '../assets/data';

function AboutUs() {

    return (
        <ThemeProvider theme={myTheme} >
            <NavBar title="AppBar" />

            <Box sx={{ backgroundColor: 'primary.main' }}>
                <OneSlide data={aboutUsSlide} />
                <BigTitleComponent data={aboutUsBigTitle} />

                <Box sx={box.boxFormatGeneralColumn} >
                    <WhoComponent data={aboutUsWhoComponent} />
                </Box>

                <BackgroundDetail detailWidth={'65%'} mgLeft={'35%'} mgRight={'0'} />
                <BackgroundDetail detailWidth={'80%'} mgLeft={'20%'} mgRight={'0'} />
                
                <BoxComponent data={aboutUsMisionVision}></BoxComponent>
                


                <Footer title="Footer" />
            </Box>
        </ThemeProvider>

    );
}

export default AboutUs;