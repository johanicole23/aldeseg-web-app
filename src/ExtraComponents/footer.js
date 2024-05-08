import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import myTheme from '../Styles/myTheme';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    ThemeProvider,
    Button,
    MenuItem,
    IconButton,
    Menu,
    Container,
    useMediaQuery,
    Paper,
    Grid,
    TextField,
    Modal
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import text from '../Styles/text';
import box from '../Styles/box';
import button from '../Styles/button';
import logo from '../assets/images/logo.png';
import CustomSelect from './customSelect';



const cities = [
    'Quito',
    'Guayaquil',
    'Cuenca',
    'Ambato',
    'Manta',
    'Portoviejo',
    'Loja',
    'Machala',
    'Santo Domingo de los Colorados',
    'Esmeraldas',
    'Ibarra',
    'Riobamba',
    'Tulcán',
    'Latacunga',
    'Babahoyo',
];

const assuranceType = [
    'Seguros de Vida',
    'Seguros de Salud',
    'Seguros de Vehículos',
    'Seguros de Hogar',
    'Seguros de Responsabilidad Civil',
    'Seguro de fianzas',
];
function handleSelect(value) {
    console.log('Opción seleccionada:', value);
}


export default function Footer() {
    const [value, setValue] = React.useState(0);
    const [isModalCar, setIsModalCar] = useState(false);

    const handleQuote = () => {
        setIsModalCar(true);
    };

    const handleCloseModalCar = () => {
        setIsModalCar(false);
    }
    return (
        <ThemeProvider theme={myTheme}>
            <Box sx={{ zIndex: 2, position: 'absolute', width: '100%', marginTop: '3rem' }}>

                <Paper sx={{ backgroundColor: myTheme.palette.common.customYellow, height: '500px' }} >
                    <Box display="flex" flexDirection={"row"} component={"form"} >
                        <Grid container spacing={2}  >
                            <Grid item xs={12} sm={6} >
                                <Paper elevation={5} sx={{
                                    padding: '2% 2% ', margin: '1.5rem 8%', width: '70%',
                                    '@media screen and (max-width: 600px)': {
                                        width: '80%',
                                    },
                                }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                                        <Typography sx={text.textH4} >Contáctanos aquí</Typography>
                                        <Box sx={{ width: '15px' }} />
                                        <EmailIcon sx={{ fontSize: '40px', color: myTheme.palette.common.customDarkBlue }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

                                        <TextField
                                            id="name"
                                            label={<Typography sx={text.textFieldH6} >Nombre  </Typography>}
                                            variant="outlined" margin="normal"
                                            sx={text.textFieldFocusedH6} />
                                        <TextField
                                            id="lastname"
                                            label={<Typography sx={text.textFieldH6} >Apellido  </Typography>}
                                            variant="outlined" margin="normal"
                                            sx={text.textFieldFocusedH6} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <TextField
                                            id="email"
                                            label={<Typography sx={text.textFieldH6} >Correo Electrónico  </Typography>}
                                            variant="outlined" margin="normal" fullWidth
                                            sx={text.textFieldFocusedH6} />

                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2%', flexDirection: 'row' }}>


                                        <CustomSelect names={cities} onSelect={handleSelect} label="Ciudad" widthCustom={'225px'} />
                                        <TextField
                                            id="city"
                                            label={<Typography sx={text.textFieldH6} >Apellido  </Typography>}
                                            variant="outlined" margin="normal"
                                            sx={text.textFieldFocusedH6} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                                        <CustomSelect names={assuranceType} onSelect={handleSelect} label="Tipo de Seguro" widthCustom={'475px'} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1%', alignItems: 'center' }}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            sx={button.buttonDarkBlueTextFooter}
                                            onClick={handleQuote}
                                        >
                                            Cotiza con nosotros
                                        </Button>
                                    </Box>


                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} ></Grid>
                        </Grid>




                    </Box>
                </Paper>

                <BottomNavigation sx={{ backgroundColor: myTheme.palette.common.customDarkBlue, height: '80px' }}>
                    <Box display="flex" alignItems="center">

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: '10%', ml: '2%', mt: '10%' }} >
                            <img src={logo} className="App-logo" alt="logo" />
                        </Box>
                        <Typography sx={text.titleNavBar} >
                            aldeseg
                        </Typography>
                    </Box>


                </BottomNavigation>
            </Box>
            <Modal
                open={isModalCar}
                onClose={handleCloseModalCar}
                BackdropProps={{
                    sx: { backgroundColor: 'rgba(78, 78, 78, 0.3)' }
                }}

            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50%',
                    bgcolor: 'background.paper',
                    border: '0px solid #000',
                    boxShadow: 20,
                    p: 4,
                    '@media screen and (max-width: 600px)': {
                        width: '74%',
                    },
                }}>
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                            <CarRepairIcon sx={{ fontSize: '40px', color: myTheme.palette.common.customDarkBlue }} />
                            <Typography sx={text.textH4} >Detalles del Vehículo</Typography>
                            <Box sx={{ width: '15px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

                            <TextField
                                id="mark"
                                label={<Typography sx={text.textFieldH6} >Marca  </Typography>}
                                variant="outlined" margin="normal"
                                sx={text.textFieldFocusedH6} />
                            <TextField
                                id="year"
                                label={<Typography sx={text.textFieldH6} >Año </Typography>}
                                variant="outlined" margin="normal"
                                type='number'
                                sx={text.textFieldFocusedH6} />
                            <TextField
                                id="model"
                                label={<Typography sx={text.textFieldH6} >Modelo </Typography>}
                                variant="outlined" margin="normal"
                                sx={text.textFieldFocusedH6} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

                            <TextField
                                id="valueComercial"
                                label={<Typography sx={text.textFieldH6} >Valor Comercial  </Typography>}
                                variant="outlined" margin="normal"
                                type='number'
                                sx={text.textFieldFocusedH6} />
                            <TextField
                                id="plate"
                                label={<Typography sx={text.textFieldH6} >Placa </Typography>}
                                variant="outlined" margin="normal"
                                sx={text.textFieldFocusedH6} />

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1%', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={button.buttonDarkBlueTextFooter}
                                onClick={handleQuote}
                            >
                                Terminar Solicitud
                            </Button>
                        </Box>


                    </div>
                </Box>
            </Modal >
        </ThemeProvider>

    );
}