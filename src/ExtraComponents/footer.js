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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import EmailIcon from '@mui/icons-material/Email';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import text from '../Styles/text';
import box from '../Styles/box';
import button from '../Styles/button';
import logo from '../assets/images/logo.png';
import sweaden from '../assets/images/Aliances/sweaden.png';
import equinoccial from '../assets/images/Aliances/equinoccial.png';
import latina from '../assets/images/Aliances/latina.png';
import chubb from '../assets/images/Aliances/chubb.png';
import bmi from '../assets/images/Aliances/bmi.png';
import unidos from '../assets/images/Aliances/unidos.png';
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
    'Seguros de Vida o Asistencia Médica',
    'Seguros de Salud',
    'Seguros de Vehículos',
    'Seguros de Hogar',
    'Seguros de Responsabilidad Civil',
    'Seguro de fianzas',
];






export default function Footer() {
    const [value, setValue] = React.useState(0);
    const [isModalCar, setIsModalCar] = useState(false);
    const [isModalLife, setIsModalLife] = useState(false);
    const [boxes, setBoxes] = useState([]);
    const [dates, setDates] = useState([]);
    const [assuranceTypeValue, setAssuranceTypeValue] = useState('');

    const handleQuote = () => {
        if (assuranceTypeValue === 'Seguros de Vida o Asistencia Médica') {
            setIsModalLife(true);
        } else if (assuranceTypeValue === 'Seguros de Vehículos'){
            setIsModalCar(true);
        }
    };

    const handleCloseModalCar = () => {
        setIsModalCar(false);
    }
    const handleCloseModalLife = () => {
        setIsModalLife(false);
    }

    const handleSelectAssuranceType= (value) => {
        setAssuranceTypeValue(value);
        
    }

    const handleSelectCity= (value) => {
        console.log(value);      
    }
    
   

    const handleAddBox = () => {
        if (boxes.length < 5) {
            // Agregar una nueva Box solo si no se han agregado 5
            setBoxes([...boxes,
            <Grid key={boxes.length} item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label={<Typography sx={text.textFieldH6}>Fecha de Nacimiento </Typography>} onChange={(date) => handleDateChange(date, boxes.length)} />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            ]);
        }
    };

    const handleDateChange = (date, index) => {
        const newDates = [...dates];
        newDates[index] = date;
        setDates(newDates);
    };
    return (
        <ThemeProvider theme={myTheme}>
            <Box sx={{ zIndex: 2, position: 'absolute', width: '100%', marginTop: '3rem' }}>
                <Paper sx={{ backgroundColor: myTheme.palette.common.customDarkBlue, height: '10px' }} />
                <Paper sx={{
                    backgroundColor: myTheme.palette.common.customYellow,
                    height: '500px',
                    '@media screen and (max-width: 600px)': {
                        height: '950px',
                    },
                }} >
                    <Box display="flex" flexDirection={"row"} component={"form"} >
                        <Grid container spacing={2}  >
                            <Grid item xs={12} sm={6} >
                                <Paper elevation={5} sx={{  
                                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
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


                                        <CustomSelect names={cities} onSelect={handleSelectCity} label="Ciudad" widthCustom={'225px'} />
                                        <TextField
                                            id="city"
                                            label={<Typography sx={text.textFieldH6} >Teléfono </Typography>}
                                            variant="outlined" margin="normal"
                                            type='number'
                                            sx={text.textFieldFocusedH6} />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                                        <CustomSelect names={assuranceType} onSelect={handleSelectAssuranceType} label="Tipo de Seguro" widthCustom={'475px'} />
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
                            <Grid item xs={12} sm={6} >
                                <Box display={'flex'} margin='2rem' flexDirection={'column'}>
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
                                <Box display={'flex'} margin='2rem' flexDirection={'column'}>
                                    <Typography sx={text.textH3Bold}>
                                        Aseguradoras que trabajan con nosotros:
                                    </Typography>
                                    <Box display='flex' justifyContent={'space-between'} sx={{ flexDirection:'row' , mr: '10%', ml: '2%', mt: '10%' }} >
                                        <img src={sweaden} className="App-sweaden" alt="sweaden" />
                                        <img src={equinoccial} className="App-aliances" alt="equinoccial" />
                                        <img src={latina} className="App-aliances" alt="latina" />
                                    </Box>
                                    <Box display='flex'  justifyContent={'space-between'} sx={{ flexDirection:'row', mr: '10%', ml: '2%', mt: '10%' }} >
                                        <img src={unidos} className="App-aliances" alt="unidos" />
                                        <img src={bmi} className="App-aliances" alt="bmi" />
                                        <img src={chubb} className="App-aliances" alt="chubb" />
                                    </Box>
                                </Box>

                            </Grid>
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
            <Modal
                open={isModalLife}
                onClose={handleCloseModalLife}
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
                    boxShadow: 20,
                    p: 4,
                    '@media screen and (max-width: 600px)': {
                        width: '74%',
                    },
                }}>
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                            <MedicalServicesIcon sx={{ fontSize: '40px', color: myTheme.palette.common.customDarkBlue }} />
                            <Typography sx={text.textH4} >Detalles del Seguro</Typography>
                            <Box sx={{ width: '15px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', margin: '1rem 0' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleAddBox}
                                sx={button.buttonWhiteTextFooter}
                            >
                                + Agregar Asegurado
                            </Button>

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', margin: '1rem 0' }}>
                            <Typography sx={text.textFieldH6} >Agregue las fechas de acuerdo a la cantidad de solicitantes</Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Grid container spacing={2}>
                                {boxes.map((box, index) => (
                                    <React.Fragment key={index}>
                                        {box}
                                    </React.Fragment>
                                ))}
                            </Grid>

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', alignItems: 'center' }}>
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