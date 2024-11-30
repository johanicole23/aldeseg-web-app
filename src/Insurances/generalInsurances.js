import React from 'react';
import { Typography, Box, ThemeProvider, Grid, Divider} from '@mui/material';
import text from '../Styles/text';
import myTheme from '../Styles/myTheme';
import NavBar from '../ExtraComponents/navBar';
import ImageSlider2 from '../ExtraComponents/imageSlider2';
import { generalData } from '../assets/data';
import GeneralCard from '../ExtraComponents/generalCard';
import generalCard from '../Styles/card';
import { generalCardsData } from '../assets/data';
import WhatsAppButton from '../ExtraComponents/whatsappButton';
import Footer from '../ExtraComponents/footer';

function GeneralInsurances() {

    return (
        <ThemeProvider theme={myTheme}>
            <div><NavBar title="AppBar Component" /></div>
            <WhatsAppButton />
            <ImageSlider2 data={generalData} />
            <Box alignItems='center' justifyContent={'center'} sx={{ mt: '5%', width: '90%', marginLeft: '5%' }}>
                <Typography sx={[text.textH1, { textAlign: 'center' }]}>
                    SEGUROS
                </Typography>
                <br></br>
                <Typography sx={[text.textH5, { textAlign: 'center' }]}>
                    Contamos con una amplia gama de servicios para satisfacer las necesidades de protección y seguridad de nuestros clientes.
                </Typography>
                <Divider sx={{mt: '5%'}}/>
            </Box>
            
            <Box alignItems='center' justifyContent={'center'} sx={{ mt: '5%' }}>
                <Typography sx={[text.textH2, { textAlign: 'center' }]}>
                    SEGUROS INCLUIDOS:
                </Typography>
                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}
                    sx={generalCard.cardResponsive}>
                <Grid container spacing={1}>
                    {
                        generalCardsData.map((item) => {
                            console.log(item)
                            return (
                                <Grid xs={12} sm={4} md={4}>
                                    <GeneralCard imgUrl={item.imgUrl} name={item.name} description={item.description} link={item.link}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <Footer title="Footer" />
        </Box>
        </ThemeProvider >
    )
}

export default GeneralInsurances;