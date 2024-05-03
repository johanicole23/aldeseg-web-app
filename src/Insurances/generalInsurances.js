import React from 'react';
import { Typography, Box, ThemeProvider } from '@mui/material';
import text from '../Styles/text';
import myTheme from '../Styles/myTheme';
import ImageSlider from '../ExtraComponents/imageSlider';
import generalData from '../assets/data';

function GeneralInsurances(){

    return (
        <ThemeProvider theme={myTheme}>
            <ImageSlider data={generalData} />
            <Box alignItems='center' justifyContent={'center'} sx={{ mt: '5%' }}>
                <Typography sx={[text.textH1, { textAlign: 'center' }]}>
                    SEGUROS
                </Typography>
                <Typography sx={[Text.textH5, { textAlign: 'center'}]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
            </Box>
        </ThemeProvider>
    )
}

export default GeneralInsurances;