import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import text from "../Styles/text";
import myTheme from "../Styles/myTheme";

export default function ImageWithDescription({ imgUrlFirst, descriptionFirst, imgUrlSecond, descriptionSecond }) {
    return (
        <Box display={'flex'} marginTop={'5%'} flexDirection={'column'}>
            <Grid container spacing={2}>
                <Box display={'flex'}>
                    <Grid xs={4}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: '5%'
                        }}>
                            <img src={imgUrlFirst} alt={'alt'} style={{
                                width: '50%',
                                height: 'auto',
                                borderRadius: '10px'
                            }} />
                        </Box>
                    </Grid>
                    <Grid xs={8}>
                        <Box sx={{
                            backgroundColor: `${myTheme.palette.common.customGrey}`,
                            borderRadius: '10px',
                            mr: '5%',
                            height: '80%',
                            alignContent: 'flex-start',
                            mb: '5%'
                        }}>
                            <Typography sx={[text.textH5, { mt: '5%', width: '90%', ml: '5%' }]}>
                                {descriptionFirst}
                            </Typography>
                        </Box>
                    </Grid>
                </Box>
                <Box display={'flex'}>
                    <Grid xs={8}>
                        <Box sx={{
                            backgroundColor: `${myTheme.palette.common.customGrey}`,
                            borderRadius: '10px',
                            ml: '5%',
                            height: '80%',
                            alignContent: 'flex-start',
                            mb: '5%'
                        }}>
                            <Typography sx={[text.textH5, { mt: '5%', width: '90%', ml: '5%' }]}>
                                {descriptionSecond}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: '5%'
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