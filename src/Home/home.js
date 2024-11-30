import { Typography, Box, ThemeProvider } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';
import myTheme from '../Styles/myTheme';
import NavBar from '../ExtraComponents/navBar';
import Footer from '../ExtraComponents/simpleFooter';
import ImageSlider2 from '../ExtraComponents/imageSlider2';
import BigTitleComponent from '../ExtraComponents/bigTitleComponent';
import CircleComponent from '../ExtraComponents/circleComponent';
import ArticleComponent from '../ExtraComponents/articleComponent';
import SwiperComponent from '../ExtraComponents/swiperComponent';

import WhatsAppButton from '../ExtraComponents/whatsappButton';
import { homeSlides, homeCircleIcons, homeArticleComponent, homeAliancesComponent } from '../assets/data';


function Home() {

    return (
        <ThemeProvider theme={myTheme} >
            <NavBar title="AppBar" />

            <WhatsAppButton />
            <ImageSlider2 data={homeSlides} />
            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={text.textH2}>Lo mejor de nosotros</Typography>
                <Typography sx={text.textH4}>en todo momento</Typography>
                <CircleComponent data={homeCircleIcons} />
            </Box>


            <Box sx={{ backgroundColor: 'primary.main' }}>
                <ImageSlider2 data={homeSlides} />

                <BigTitleComponent data={homeBigTitle} />
                <Box sx={box.boxGeneralMargin} >
                    <Box sx={box.boxFormatGeneralColumn} >
                        <CircleComponent data={homeCircleIcons} />
                    </Box>
                </Box>

                <BackgroundDetail detailWidth={'80%'} mgLeft={'0'} mgRight={'20%'} />
                <BackgroundDetail detailWidth={'65%'} mgLeft={'0'} mgRight={'35%'} />
                <Box sx={box.boxFormatGeneralColumn} >


                    <ArticleComponent data={homeArticleComponent} />
                </Box>
                <PrincipalFacts data={homePrincipalFactsComponent} />

                <BackgroundDetail detailWidth={'80%'} mgLeft={'20%'} mgRight={'0'} />
                <BackgroundDetail detailWidth={'65%'} mgLeft={'35%'} mgRight={'0'} />

                <Box sx={box.boxGeneralMargin} >
                    <Typography sx={{ ...text.textH3, margin: '0 5%' }}>ALIANZAS CON LAS</Typography>
                    <Slide direction='up' >
                        <Typography sx={{ ...text.textH1W, margin: '0 5%' }}>MEJORES ASEGURADORAS</Typography>
                    </Slide>

                    <SwiperComponent data={homeAliancesComponent} />
                </Box>
                <Footer information={footerInformation} socialMedia={footerSocialMedia} tiktok={footerSocialTiktok} />
            </Box>



        </ThemeProvider>

    );
}

export default Home;