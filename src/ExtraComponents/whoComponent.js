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
import { set } from 'date-fns';


const WhoComponent = ({ data }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const [isModalExperience, setIsModalExperience] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);

        // Limpia el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const style = {
        width: isSmallScreen ? '120px' : '200px',
        height: isSmallScreen ? '120px' : '200px',
        borderRadius: '50%',
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
                    <Paper sx={box.paperBoxWhoComponent} >
                        <Grid container spacing={2}>
                            <Grid xs={6} sm={4} md={3}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <img src={item.imgUrl} alt={item.imgUrl} style={style} />
                                </Box>
                            </Grid>

                            <Grid xs={6} sm={8} md={9}>
                                <Box sx={{ ...box.boxContentWhoComponent, display: { xs: 'none', sm: 'flex' } }}>
                                    <Typography sx={text.textH2} >{item.name}</Typography>
                                    <Typography marginTop={'1rem'} sx={{ ...text.textH5, /*fontStyle: 'italic'*/ }} >{item.phrase}</Typography>
                                    <Box display={'flex'} justifyContent="flex-end" >
                                        <Button
                                            key={item.id}
                                            variant="contained"
                                            color={item.id % 2 === 0 ? 'secondary' : 'primary'}
                                            onClick={handleModalExperience}
                                            sx={button.buttonWhiteText}
                                        >
                                            Experiencia
                                        </Button>
                                    </Box>

                                </Box>
                                <Box sx={{
                                    alignItems: 'space-around',
                                    justifyContent: 'flex-start',
                                    flexDirection: 'column',
                                    margin: '1rem 4%',
                                    display: {
                                        xs: 'flex',
                                        sm: 'none'
                                    }

                                }}>
                                    <Typography sx={text.textH3Bold} >{item.name}</Typography>

                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{
                            ...box.boxContentWhoComponent, display: { xs: 'flex', sm: 'none' }

                        }}>
                            <Typography margin={'1rem 0 '} sx={text.textH5} >{item.phrase}</Typography>
                            <Box display={'flex'} justifyContent="flex-end" >
                                <Button
                                    key={item.id}
                                    variant="contained"
                                    color={item.id % 2 === 0 ? 'secondary' : 'primary'}
                                    onClick={handleModalExperience}
                                    sx={button.buttonWhiteTextFooter}

                                >
                                    Experiencia
                                </Button>
                            </Box>

                        </Box>
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
                                <Box sx={{ maxHeight: '400px', height:'auto', p: '2rem 1rem 2rem 2rem', }}>

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
                                                    <ListItemIcon sx={{  display: { xs: 'none' , sm:'block'}}}>
                                                        <FiberManualRecord fontSize="extrasmall" sx={{ color: theme.palette.primary.main}}  />
                                                    </ListItemIcon>
                                                    <Typography sx={text.textH7} >{item.list1}</Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon sx={{  display: { xs: 'none' , sm:'block'}}}>
                                                        <FiberManualRecord fontSize="extrasmall" sx={{ color: theme.palette.primary.main }} />
                                                    </ListItemIcon>
                                                    <Typography sx={text.textH7} >{item.list3}</Typography>
                                                </ListItem>
                                                

                                            </List>
                                        </Grid>
                                    </Grid>

                                    <List>
                                        <ListItem>
                                            <ListItemIcon sx={{  display: { xs: 'none', sm:'block' }}}>
                                                <FiberManualRecord  fontSize="extrasmall" sx={{  color: theme.palette.primary.main }} />
                                            </ListItemIcon>
                                            <Typography sx={text.textH7} >{item.list3}</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon sx={{  display: { xs: 'none', sm:'block' }}}>
                                                <FiberManualRecord fontSize="extrasmall" sx={{  color: theme.palette.primary.main }} />
                                            </ListItemIcon>
                                            <Typography sx={text.textH7} >{item.list4}</Typography>
                                        </ListItem>
                                        <ListItem sx={{  display: { xs: 'none', sm:'flex' }}}>
                                            <ListItemIcon >
                                                <FiberManualRecord fontSize="extrasmall" sx={{  color: theme.palette.primary.main }} />
                                            </ListItemIcon>
                                            <Typography sx={text.textH7} >{item.list5}</Typography>
                                        </ListItem>

                                    </List>
                                </Box>
                            </Box>
                        </Modal >

                    </Paper>

                ))}


            </Box>
        </ThemeProvider >
    );
}
export default WhoComponent;