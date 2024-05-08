import React from 'react';
import { Typography, Box, ThemeProvider, Grid } from '@mui/material';
import text from '../Styles/text';
import myTheme from '../Styles/myTheme';
import ImageSlider from '../ExtraComponents/imageSlider';
import { generalData } from '../assets/data';
import GeneralCard from '../ExtraComponents/generalCard';
import { generalCardsData } from '../assets/data';

function GeneralInsurances() {

    return (
        <ThemeProvider theme={myTheme}>
            <ImageSlider data={generalData} />
            <Box alignItems='center' justifyContent={'center'} sx={{ mt: '5%' }}>
                <Typography sx={[text.textH1, { textAlign: 'center' }]}>
                    SEGUROS
                </Typography>
                <br></br>
                <Typography sx={[text.textH5, { textAlign: 'center' }]}>
                    Contamos con una amplia gama de servicios para satisfacer las necesidades de protección y seguridad de nuestros clientes.
                </Typography>
            </Box>
            <Box alignItems='center' justifyContent={'center'} sx={{ mt: '5%' }}>
                <Typography sx={[text.textH2, { textAlign: 'center' }]}>
                    SEGUROS INCLUIDOS:
                </Typography>
                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} sx={{ margin: "0 20%" }}>
                    <Grid container spacing={1}>
                        {
                            generalCardsData.map((item) => {
                                console.log(item)
                                return (
                                    <Grid xs={4}>
                                        <GeneralCard imgUrl={item.imgUrl} name={item.name} description={item.description} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default GeneralInsurances;