import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import text from "../Styles/text";
import myTheme from "../Styles/myTheme";

export default function ImageWithDescription({ imgUrlFirst, descriptionFirst, imgUrlSecond, descriptionSecond }) {
    return (
        <Box display={'flex'} marginTop={'5%'} flexDirection={'column'}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Box display={'flex'} sx={{
                    '@media screen and (max-width: 699px)': {
                        flexDirection: 'column',
                        margin: '5%'
                    },
                    '@media screen and (min-width: 700px) and (max-width: 840px)': {
                        flexDirection: 'column',
                        margin: '5%'
                    }
                }}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: '5%'
                        }}>
                            <img src={imgUrlFirst} alt={'alt'} style={{
                                width: '60%',
                                height: 'auto',
                                borderRadius: '10px'
                            }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box sx={{
                            backgroundColor: `${myTheme.palette.common.customGrey}`,
                            borderRadius: '10px',
                            mr: '5%',
                            height: '80%',
                            alignContent: 'flex-start',
                            mb: '5%',
                            '@media screen and (max-width: 699px)': {
                                height: '100%'
                            },
                            '@media screen and (min-width: 700px) and (max-width: 840px)': {
                                height: '100%'
                            }
                        }}>
                            <Typography sx={[text.textH5Insurance, {
                                m: '5%', width: '90%',

                            }]}>
                                {descriptionFirst}
                            </Typography>
                        </Box>
                    </Grid>
                </Box>
                <Box display={'flex'} sx={{
                    '@media screen and (max-width: 840px)': {
                        flexDirection: 'column',
                        margin: '5% 0 5% 5%'
                    }
                }}>
                    <Grid item xs={12} sm={8}>
                        <Box sx={{
                            backgroundColor: `${myTheme.palette.common.customGrey}`,
                            borderRadius: '10px',
                            ml: '5%',
                            height: '80%',
                            alignContent: 'flex-start',
                            mb: '5%',
                            '@media screen and (max-width: 840px)': {
                                height: '100%'
                            }
                        }}>
                            <Typography sx={[text.textH5Insurance, {
                                m: '5%', width: '90%', ml: '5%'
                            }]}>
                                {descriptionSecond}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: '5%',
                           
                        }}>
                            <img src={imgUrlSecond} alt={'alt'} style={{
                                width: '50%',
                                height: 'auto',
                                borderRadius: '10px'
                            }} />
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    );
}