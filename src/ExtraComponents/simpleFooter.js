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
import box from '../Styles/box';



const simpleFooter = ({ information, socialMedia, tiktok }) => {

    return (
        <ThemeProvider theme={myTheme}>
            <Box sx={{ width: '100%', marginTop: '7rem' }}>
                <BottomNavigation sx={{
                    backgroundColor: 'secondary.main', height: '150px',
                    '@media screen and (max-width: 599px)': {
                        height: '250px'
                    },
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={0} sm={2} md={4} />
                        <Grid item xs={12} sm={4} md={4}>
                            <Box sx={box.boxFooter}>
                                {information.map((item) => (
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                    }}>
                                        <item.icon sx={{ fontSize: 40, color: 'primary.main' }} />
                                        <Typography sx={text.textH4Bold}>{item.text}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={0} sm={1} md={0}></Grid>
                        <Grid item xs={12} sm={4} md={2}>
                            <Grid container spacing={2} sx={box.boxFooterSocialMedia}>
                                {socialMedia.map((item) => (
                                    <Grid item sm={4} >

                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',

                                        }}>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                <item.icon sx={{ fontSize: 24, color: 'primary.main' }} />
                                            </a>

                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',

                                        }}>
                                            <Typography sx={text.textH6}>{item.text}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                                <Grid item sm={4} >

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',

                                    }}>
                                        <a href={tiktok.href} target="_blank" rel="noopener noreferrer">
                                            <img src={tiktok.image} alt={tiktok.image} />
                                        </a>

                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',

                                    }}>
                                        <Typography sx={text.textH6}>{tiktok.text}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={0} sm={1} md={0} />
                    </Grid>
                </BottomNavigation>
            </Box>

        </ThemeProvider>

    );
}

export default simpleFooter;