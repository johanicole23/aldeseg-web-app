import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import myTheme from '../Styles/myTheme';
import {
    Box,
    Typography,
    ThemeProvider,
    Paper,
    Grid,
} from '@mui/material';
import FormContact from './formContact';
import text from '../Styles/text';
import { footerAliances } from '../assets/data';


export default function Footer() {

    return (
        <ThemeProvider theme={myTheme}>
            <Box sx={{ zIndex: 2, position: 'absolute', width: '100%', marginTop: '3rem' }}>
                <Paper sx={{ backgroundColor: myTheme.palette.common.customDarkBlue, height: '10px' }} />
                <Paper sx={{
                    backgroundColor: myTheme.palette.common.customYellow,
                    height: '550px',
                    '@media screen and (max-width: 600px)': {
                        height: '950px',
                    },
                }} >
                    <Box display="flex" flexDirection={"row"} component={"form"} >
                        <Grid container spacing={1}  >
                            <Grid item xs={12} sm={6} >
                                <FormContact />
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Box display={'flex'} margin='2rem' flexDirection={'column'}
                                    sx={{
                                        '@media screen and (min-width: 600px) and (max-width: 900px)': {
                                            margin: '2rem 0 ',
                                        },
                                    }}>
                                    <Typography sx={text.textH4Bold}>
                                        Atención al cliente:
                                    </Typography>
                                    <Typography sx={text.textH5}>
                                        De lunes a viernes de 08H00 – 18H00
                                    </Typography>
                                    <Typography sx={text.textH5}>
                                        +593 9871 23456
                                    </Typography>
                                </Box>
                                <Box display={'flex'} margin='2rem' flexDirection={'column'}
                                    sx={{
                                        '@media screen and (min-width: 600px) and (max-width: 900px)': {
                                            margin: '2rem 0 ',
                                        },
                                    }}>
                                    <Typography sx={text.textH3Bold}>
                                        Aseguradoras que trabajan con nosotros:
                                    </Typography>
                                    <Grid container spacing={1}  >
                                        {footerAliances.map((item) => (
                                            <Grid item xs={3} sm={4} md={3}>
                                                <Box sx={{
                                                    margin: '0 5%',
                                                    '@media screen and (max-width: 599px)': {
                                                        margin: '0 10% ',
                                                        '& img': {
                                                            width: '90px',
                                                            height: '54px',
                                                        },
                                                    },
                                                    '@media screen and (min-width: 600px) and (max-width: 900px)': {
                                                        marginRight: '5%',
                                                        '& img': {
                                                            width: '90px',
                                                            height: '54px',
                                                        },
                                                    },
                                                }}>
                                                    <img src={item.imgUrl} alt={item.urlImg} className='image-aliance-footer' />
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>

                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Paper>

                <BottomNavigation sx={{ backgroundColor: myTheme.palette.common.customDarkBlue, height: '80px' }} />
            </Box>

        </ThemeProvider>

    );
}