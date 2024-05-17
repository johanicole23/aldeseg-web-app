import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import text from "../Styles/text";
import button from "../Styles/button";


const WhoComponent = ({ data }) => {
    return (
        <Box display={'flex'} marginTop={'5rem'} flexDirection={'column'} width={'80%'}>
            {data.map((item) => (
                <Paper sx={{
                    backgroundColor: 'whiteSmoke',
                    width: '100%',
                    height: '200px',
                    borderRadius: '20px',
                    padding: '2rem 4% 0 4%',
                    marginBottom: '4rem'
                }} >

                    <Grid container spacing={2}>

                        <Grid xs={3}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <img src={item.imgUrl} alt={item.imgUrl} style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%'
                                }} />
                            </Box>
                        </Grid>
                        <Grid xs={9}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'space-around',
                                justifyContent: 'flex-start',
                                flexDirection: 'column',
                                margin: '0 8%'

                            }}>
                                <Typography sx={text.textH2} >{item.name}</Typography>
                                <Typography marginTop={'1rem'} sx={text.textH5} >{item.phrase}</Typography>
                                <Box display={'flex'} justifyContent="flex-end" >
                                    <Button
                                        key={item.id}
                                        variant="contained"
                                        color={item.id % 2 === 0 ? 'secondary' : 'primary'}
                                        to="/"
                                        sx={button.buttonWhiteText}
                                    >
                                        Experiencia
                                    </Button>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}


        </Box>
    );
}
export default WhoComponent;