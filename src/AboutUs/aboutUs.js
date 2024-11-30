import { Typography, Box, ThemeProvider } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';
import myTheme from '../Styles/myTheme';

import NavBar from '../ExtraComponents/navBar';
import Footer from '../ExtraComponents/footer';
import ArticleComponent from '../ExtraComponents/articleComponent';
import OneSlide from '../ExtraComponents/oneSlide';
import WhoComponent from '../ExtraComponents/whoComponent';

import WhatsAppButton from '../ExtraComponents/whatsappButton';
import { aboutUsWhoComponent, aboutUsSlide, aboutUsMisionVision, homeSlides, homeCircleIcons, homeArticleComponent, homeAliancesComponent } from '../assets/data';


function AboutUs() {

    return (
        <ThemeProvider theme={myTheme} >
            <NavBar title="AppBar" />

            <WhatsAppButton />
            <OneSlide data={aboutUsSlide} />


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