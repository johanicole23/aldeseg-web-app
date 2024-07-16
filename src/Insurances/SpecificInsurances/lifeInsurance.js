import React from 'react';
import { Typography, Box, ThemeProvider, Divider } from '@mui/material';
import text from '../../Styles/text';
import myTheme from '../../Styles/myTheme';
import NavBar from '../../ExtraComponents/navBar';
import Footer from '../../ExtraComponents/footer';
import box from '../../Styles/box';
import StyledBreadcrumb from '../../ExtraComponents/styledBreadcrumb';
import lifeImg from '../../assets/images/seguro_vida/slide3.jpg';
import ImageWithDescription from '../../ExtraComponents/imageWithDescription';
import { generalCardsData } from '../../assets/data';
import { homeCircleIcons } from '../../assets/data';
import CircleComponent from '../../ExtraComponents/circleComponent';

function lifeInsurance() {

    return (
        <ThemeProvider theme={myTheme}>
            <div><NavBar title="AppBar Component" /></div>
            <Box sx={{
                backgroundImage: `url(${lifeImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '350px',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left',
                borderRadius: '10px',
                '@media screen and (max-width: 600px)': {
                    height: '220px'
                },
                '@media screen and (min-width: 700px) and (max-width: 840px)': {
                    height: '220px'
                },
            }}>
                <Box sx={{
                    mt: '5%', width: '40%', ml: '5%',
                    '@media screen and (max-width: 600px)': {
                        width: '90%',
                        ml: '5%',
                        mt: '15%'
                    },
                    '@media screen and (min-width: 700px) and (max-width: 840px)': {
                        mt: '8%'
                    }
                }}>
                    <Typography sx={[text.textH1, {
                        '@media screen  and (max-width: 840px)': {
                            fontSize: '2rem'
                        }
                    }]}>
                        Seguros de Vida
                    </Typography>
                    <br></br>
                    <Typography sx={[text.textH5, {
                        '@media screen and (max-width: 840px)': {
                            fontSize: '1rem'
                        }
                    }]}>
                        Contamos con una amplia gama de servicios para satisfacer las necesidades de protección y seguridad de nuestros clientes.
                    </Typography>
                </Box>
            </Box>
            <Divider />

            <Box sx={{ mt: '2%', ml: '2%' }}>
                <StyledBreadcrumb component="a" href="/" label="Inicio" />
                {' > '}
                <StyledBreadcrumb component="a" href="/seguros" label="Seguros" />
                {' > '}
                <StyledBreadcrumb component="a" href="#" label="Seguros de Vida" />
            </Box>
            
            <Box sx={box.boxFormatGeneralColumn} >
                <Typography sx={[text.textH1, { textAlign: 'center' }]}>
                    Seguros de Vida
                </Typography>
                <CircleComponent data={homeCircleIcons} />
                <Divider />
            </Box>

            <Typography sx={[text.textH2, { mt: '3%', ml: '5%', mr: '5%' }]}>
                ¿Qué es un seguro de vida?
            </Typography>
            <ImageWithDescription imgUrlFirst={generalCardsData[0].imgUrl} descriptionFirst={generalCardsData[0].description}
                imgUrlSecond={generalCardsData[1].imgUrl} descriptionSecond={generalCardsData[1].description} />
            <Box alignItems='center' justifyContent={'center'} sx={{ width: '90%', marginLeft: '5%' }}>
                <Divider sx={{ mt: '5%' }} />
            </Box>
            <Typography sx={[text.textH2, { mt: '3%', ml: '5%', mr: '5%' }]}>
                ¿Qué cubre un seguro de vida?
            </Typography>
            <ImageWithDescription imgUrlFirst={generalCardsData[2].imgUrl} descriptionFirst={generalCardsData[2].description}
                imgUrlSecond={generalCardsData[3].imgUrl} descriptionSecond={generalCardsData[3].description} />
            <Footer title="Footer" />
        </ThemeProvider >
    )
}

export default lifeInsurance;