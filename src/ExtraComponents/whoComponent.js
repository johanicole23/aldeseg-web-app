import React, { useState, useEffect } from 'react';
import {
    ThemeProvider, Box, Typography, Grid, Paper, Button, useMediaQuery,
    useTheme, Modal, List, ListItem, ListItemIcon,
} from "@mui/material";
import { FiberManualRecord } from '@mui/icons-material';

import text from "../Styles/text";
import box from "../Styles/box";
import button from "../Styles/button";
import myTheme from '../Styles/myTheme';

import yellowBackground from '../assets/images/prueba.png';
import { set } from 'date-fns';


const WhoComponent = ({ data }) => {

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const [isModalExperience, setIsModalExperience] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth > 600 && window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
            setIsMediumScreen(window.innerWidth > 600 && window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const style = {
        width: isSmallScreen ? '18rem' : '15rem',
        height: isSmallScreen ? '22rem' : '19rem',
        transform: isSmallScreen
            ? 'translate(0, 14px)'
            : isMediumScreen
                ? 'translate(-12px, 10px)'
                : 'translate(10%, 10px)',

    };

    

    const handleCloseModal = () => {
        setIsModalExperience(false);
    };

    const handleModalExperience = () => {
        setIsModalExperience(true);

    };

    return (
        <ThemeProvider theme={myTheme}>
            <Box display={'flex'} marginTop={'5rem'} flexDirection={'column'} width={'80%'}
                sx={{
                    '@media screen and (min-width: 600px) and (max-width: 900px)': {
                        width: '90%',
                    },
                }}>
                {data.map((item) => (

                    <Box margin='3rem 0'>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={5} md={3}>
                                <Box >
                                    <img src={item.imgUrl} alt={item.imgUrl} style={style} />
                                </Box>
                            </Grid>

                            <Grid xs={12} sm={7} md={9}>
                                <Box sx={box.boxContentWhoComponent}>
                                    <Paper sx={box.paperBoxWhoComponent} >
                                        <Typography sx={text.textNameWhoComponent} >{item.name}</Typography>
                                    </Paper>
                                    <Box sx={box.boxPhraseWhoComponent}>
                                        <Typography sx={{ ...text.textH5W, textAlign: 'justify' }} >{item.phrase}</Typography>
                                        <Box display={'flex'} justifyContent="flex-start" mt='2rem' >
                                            <Button
                                                key={item.id}
                                                variant="contained"
                                                color='tertiary'
                                                onClick={handleModalExperience}
                                                sx={button.buttonWhiteText}
                                            >
                                                Experiencia
                                            </Button>
                                        </Box>
                                    </Box>


                                </Box>
                            </Grid>
                        </Grid>

                        <Modal
                            open={isModalExperience}
                            onClose={handleCloseModal}
                            BackdropProps={{
                                sx: { backgroundColor: 'rgba(78, 78, 78, 0.3)' }
                            }}

                        >
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '40%',
                                bgcolor: 'background.paper',
                                border: '0px solid #000',
                                borderRadius: '10px',
                                boxShadow: 20,

                                '@media screen and (max-width: 600px)': {
                                    width: '90%',
                                },
                            }}>
                                <Box sx={{ borderRadius: '10px 10px 0 0', backgroundColor: theme.palette.primary.main, height: '50px', width: '100%' }} />
                                <Box sx={{ maxHeight: '400px', height: 'auto', p: '2rem 1rem 2rem 2rem', }}>

                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', marginBottom: '2rem' }}>
                                        <Typography sx={text.textH4} >Experiencia Profesional</Typography>
                                        <Typography sx={text.textH3Bold} >{item.name}</Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        <Grid xs={5} sm={5} >
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <img src={item.numberUrl} alt={item.numberUrl} style={{
                                                    width: '100px',
                                                    height: '100px',
                                                    borderRadius: '50%'
                                                }} />

                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                flexDirection: 'column',
                                                margin: '1rem 0 1rem 2rem',

                                            }}>
                                                <Typography sx={text.textH5} >Años de Experiencia </Typography>

                                            </Box>



                                        </Grid>
                                        <Grid xs={7} sm={7}>
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                        <FiberManualRecord fontSize="extrasmall" sx={{ color: theme.palette.primary.main }} />
                                                    </ListItemIcon>
                                                    <Typography sx={text.textH7} >{item.list1}</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                        <FiberManualRecord fontSize="extrasmall" sx={{ color: theme.palette.primary.main }} />
                                                    </ListItemIcon>
                                                    <Typography sx={text.textH7} >{item.list3}</Typography>
                                                </ListItem>


                                            </List>
                                        </Grid>
                                    </Grid>

                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                <FiberManualRecord fontSize="extrasmall" sx={{ color: theme.palette.primary.main }} />
                                            </ListItemIcon>
                                            <Typography sx={text.textH7} >{item.list3}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                <FiberManualRecord fontSize="extrasmall" sx={{ color: theme.palette.primary.main }} />
                                            </ListItemIcon>
                                            <Typography sx={text.textH7} >{item.list4}</Typography>
                                        </ListItem>
                                        <ListItem sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                            <ListItemIcon >
                                                <FiberManualRecord fontSize="extrasmall" sx={{ color: theme.palette.primary.main }} />
                                            </ListItemIcon>
                                            <Typography sx={text.textH7} >{item.list5}</Typography>
                                        </ListItem>

                                    </List>
                                </Box>
                            </Box>
                        </Modal >

                    </Box>



                ))}


            </Box>
        </ThemeProvider >
    );
}
export default WhoComponent;