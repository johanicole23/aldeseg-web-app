import React from 'react';
import { Typography, Box, ThemeProvider, Divider } from '@mui/material';
import text from '../Styles/text';
import myTheme from '../Styles/myTheme';

const OneSlide = ({ data }) => {

    return (
        <ThemeProvider theme={myTheme}>
            <Box sx={{
                backgroundImage: `url(${data.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '350px',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left',
                padding: '1rem 0',
                '@media screen and (max-width: 599px)': {
                    height: 'auto'
                },
                '@media screen and (min-width: 600px) and (max-width: 900px)': {
                    height: 'auto'
                },
            }}>
                <Box sx={{
                    mt: '5%', width: '50%', ml: '5%',
                    '@media screen and (max-width: 599px)': {
                        width: '90%',
                        ml: '5%',
                        mt: '15%'
                    },
                    '@media screen and (min-width: 600px) and (max-width: 900px)': {
                        mt: '8%',
                        width: '60%',
                    }
                }}>
                    <Typography sx={[text.textH1, {
                        '@media screen and (max-width: 600px)': {
                            fontSize: '2rem'
                        },
                        '@media screen and (min-width: 700px) and (max-width: 840px)': {
                            fontSize: '2rem'
                        }
                    }]}>
                        {data.title}
                    </Typography>
                    <br></br>
                    <Typography sx={[text.textH3, {
                        '@media screen and (max-width: 600px)': {
                            fontSize: '1.5rem'
                        },
                        '@media screen and (min-width: 700px) and (max-width: 840px)': {
                            fontSize: '1.5rem'
                        }
                    }]}>
                        {data.subtitle}
                    </Typography>
                </Box>
            </Box>
            <Divider />
        </ThemeProvider >
    )
}

export default OneSlide;