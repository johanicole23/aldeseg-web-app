import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import myTheme from '../Styles/myTheme';
import {
    Box,
    Typography,
    ThemeProvider,
    Button,
    Paper,
    Grid,
    TextField,
    Modal,
    Alert
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EmailIcon from '@mui/icons-material/Email';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import text from '../Styles/text';
import box from '../Styles/box';
import button from '../Styles/button';
import CustomSelect from './customSelect';
import check from '../assets/images/footer/check.png';
import error from '../assets/images/footer/error.png';
import { set } from 'date-fns';


const cities = [
    'Quito',
    'Guayaquil',
    'Cuenca',
    'Ambato',
    'Manta',
    'Portoviejo',
    'Loja',
    'Machala',
    'Santo Domingo',
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
    'Seguros de fianzas',
];

export default function FormContact() {

    const [isModalCar, setIsModalCar] = useState(false);
    const [isModalLife, setIsModalLife] = useState(false);
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const [isModalError, setIsModalError] = useState(false);
    const [isAlertSend, setIsAlertSend] = useState(false);
    const [isAlertLife, setIsAlertLife] = useState(false);
    const [isAlertCar, setIsAlertCar] = useState(false);
    const [boxes, setBoxes] = useState([]);
    const [dates, setDates] = useState([]);
    const [assuranceTypeValue, setAssuranceTypeValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        telephone: '',
        city: '',
        assuranceType: '',
        mark: '',
        year: '',
        model: '',
        valueComercial: '',
        plate: '',
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        date5: '',
    });

    var dateFlag = 0;
    const handleChange = (fieldName, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [fieldName]: value
        }));
    };
    const handleCloseModalCar = () => {
        setIsModalCar(false);
    }
    const handleCloseModalLife = () => {
        setIsModalLife(false);
    }
    const handleCloseModalSuccess = () => {
        setIsModalSuccess(false);
    }
    const handleCloseModalError = () => {
        setIsModalError(false);
    }

    const handleSelectAssuranceType = (value) => {
        setAssuranceTypeValue(value);
        console.log(value);
        setFormData(prevFormData => ({
            ...prevFormData,
            assuranceType: value
        }));
    }

    const handleSelectCity = (value) => {
        setCityValue(value);
        console.log(value);
        setFormData(prevFormData => ({
            ...prevFormData,
            city: value
        }));
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
        setFormData(prevFormData => ({
            ...prevFormData,
            [`date${index + 1}`]: date.format('YYYY-MM-DD')
        }));
        dateFlag++;
        if (dateFlag === 4) {
            dateFlag = 0;
        }

    };

    const handleQuote = () => {

        if ((assuranceTypeValue === '') || (cityValue === '') ||
            (document.getElementById('name').value === '') || (document.getElementById('lastname').value === '') ||
            (document.getElementById('email').value === '') || (document.getElementById('telephone').value === '')

        ) {
            setIsAlertSend(true);
        }
        else {
            setIsAlertSend(false);
            if (assuranceTypeValue === 'Seguros de Vida o Asistencia Médica') {
                setIsModalLife(true);

            } else if (assuranceTypeValue === 'Seguros de Vehículos') {
                setIsModalCar(true);
            }
            else {
                handleSubmit();
                console.log(formData);
            }

        }
    }

    const handleEndLife = () => {

        if (dates.length === 0) {
            setIsAlertLife(true);
        } else {
            setIsAlertLife(false);
            console.log(formData);
            setIsModalLife(false);
            handleSubmit();
        }
    }

    const handleEndCar = () => {

        if ((document.getElementById('mark').value === '') || document.getElementById('year').value === '' ||
            document.getElementById('model').value === '' || document.getElementById('valueComercial').value === '' ||
            document.getElementById('plate').value === '') {

            setIsAlertCar(true);
        }
        else {
            setIsAlertCar(false);
            setIsModalCar(false);
            console.log(formData);
            handleSubmit();


        }
    }
    const handleSubmit = () => {
        // Tu lógica para manejar el envío del formulario
        // ID del servicio, ID de la plantilla y tu User ID de EmailJS
        const serviceID = 'joha_nicole23';
        const templateID = 'template_fyb73h2';
        const userID = 'Oo1cDBJuzniuXTxjX';

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setIsModalSuccess(true);
                    setStatus('Correo enviado exitosamente!');
                },
                (error) => {
                    console.log('FAILED...', error);
                    setIsModalError(true);
                    setStatus('Error al enviar el correo.');
                }
            );
    };
    return (
        <ThemeProvider theme={myTheme}>
            <Paper elevation={5} sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                padding: '2% 2% ', margin: '1.5rem 8%', width: '70%',
                '@media screen and (max-width: 599px)': {
                    width: '80%',
                },
                '@media screen and (min-width: 600px) and (max-width: 900px)': {
                    width: '84%',
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
                        value={formData.name}
                        onChange={(event) => handleChange('name', event.target.value)}
                        label={<Typography sx={text.textFieldH6}>Nombre</Typography>}
                        variant="outlined"
                        margin="normal"
                        sx={{
                            ...text.textFieldFocusedH6,
                            backgroundColor: 'white', // Establece el fondo en blanco
                        }}
                        InputLabelProps={{
                            shrink: true, // Esto bloquea el label en la parte superior
                        }}
                    />
                    <TextField
                        id="lastname"
                        value={formData.lastname}
                        onChange={(event) => {
                            handleChange('lastname', event.target.value)
                        }}
                        label={<Typography sx={text.textFieldH6} >Apellido  </Typography>}
                        variant="outlined" margin="normal"
                        sx={text.textFieldFocusedH6} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <TextField
                        id="email"
                        value={formData.email}
                        onChange={(event) => {
                            handleChange('email', event.target.value)
                        }}
                        label={<Typography sx={text.textFieldH6} >Correo Electrónico  </Typography>}
                        variant="outlined" margin="normal" fullWidth
                        sx={text.textFieldFocusedH6} />

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2%', flexDirection: 'row' }}>


                    <CustomSelect names={cities} onSelect={handleSelectCity} label="Ciudad" widthCustom={'225px'} />
                    <TextField
                        id="telephone"
                        value={formData.telephone}
                        onChange={(event) => {
                            handleChange('telephone', event.target.value)
                        }}
                        label={<Typography sx={text.textFieldH6} >Teléfono </Typography>}
                        variant="outlined" margin="normal"
                        type='text'
                        sx={text.textFieldFocusedH6} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                    <CustomSelect names={assuranceType} onSelect={handleSelectAssuranceType} label="Tipo de Seguro" widthCustom={'475px'} />
                </Box>
                {isAlertSend && (
                    <Alert
                        open={isAlertSend}
                        variant="filled"
                        severity="error"
                        sx={text.textH6White}
                    >
                        Complete los campos vacíos.
                    </Alert>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1%', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={button.buttonWhiteTextFooter}
                        onClick={handleQuote}
                    >
                        Cotiza con nosotros
                    </Button>
                </Box>


            </Paper>

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
                                value={formData.mark}
                                onChange={(event) => {
                                    handleChange('mark', event.target.value)
                                }}
                                label={<Typography sx={text.textFieldH6} >Marca  </Typography>}
                                variant="outlined" margin="normal"
                                sx={text.textFieldFocusedH6} />
                            <TextField
                                id="year"
                                value={formData.year}
                                onChange={(event) => {
                                    handleChange('year', event.target.value)
                                }}
                                label={<Typography sx={text.textFieldH6} >Año </Typography>}
                                variant="outlined" margin="normal"
                                type='number'
                                sx={text.textFieldFocusedH6} />
                            <TextField
                                id="model"
                                value={formData.model}
                                onChange={(event) => {
                                    handleChange('model', event.target.value)
                                }}
                                label={<Typography sx={text.textFieldH6} >Modelo </Typography>}
                                variant="outlined" margin="normal"
                                sx={text.textFieldFocusedH6} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>

                            <TextField
                                id="valueComercial"
                                value={formData.valueComercial}
                                onChange={(event) => {
                                    handleChange('valueComercial', event.target.value)
                                }}
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
                        {isAlertCar && (
                            <Alert
                                open={isAlertCar}
                                severity="error"
                                sx={text.textH7}
                            >
                                Complete todos los campos.
                            </Alert>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1%', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={button.buttonDarkBlueTextFooter}
                                onClick={handleEndCar}
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
                            <Typography sx={text.textFieldH6} >Agregue las fechas de nacimiento de acuerdo a la cantidad de solicitantes</Typography>
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
                        {isAlertLife && (
                            <Alert
                                open={isAlertLife}
                                severity="error"
                                sx={text.textH7}
                            >
                                Agrege al menos la fecha de un asegurado.
                            </Alert>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={button.buttonDarkBlueTextFooter}
                                onClick={handleEndLife}
                            >
                                Terminar Solicitud
                            </Button>
                        </Box>


                    </div>
                </Box>
            </Modal >
            <Modal
                open={isModalSuccess}
                onClose={handleCloseModalSuccess}
                BackdropProps={{
                    sx: { backgroundColor: 'rgba(78, 78, 78, 0.3)' }
                }}

            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30%',
                    bgcolor: 'background.paper',
                    border: '0px solid #000',
                    boxShadow: 20,
                    p: 4,
                    '@media screen and (max-width: 600px)': {
                        width: '80%',
                    },
                }}>
                    <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '@media screen and (max-width: 599px)': {
                                    '& img': {
                                        width: '60px',
                                        height: '60px',

                                    },
                                },
                            }}>
                                <img src={check} alt={'check'} width={'90px'} height={'90px'} />
                            </Box>
                            <Typography sx={text.textH4} >Información Enviada</Typography>

                        </Box>


                    </div>
                </Box>
            </Modal >
            <Modal
                open={isModalError}
                onClose={handleCloseModalError}
                BackdropProps={{
                    sx: { backgroundColor: 'rgba(78, 78, 78, 0.3)' }
                }}

            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30%',
                    bgcolor: 'background.paper',
                    border: '0px solid #000',
                    boxShadow: 20,
                    p: 4,
                    '@media screen and (max-width: 600px)': {
                        width: '80%',
                    },
                }}>
                    <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: '1%', flexDirection: 'row' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '@media screen and (max-width: 599px)': {
                                    '& img': {
                                        width: '60px',
                                        height: '60px',

                                    },
                                },
                            }}>
                                <img src={error} alt={'error'} width={'90px'} height={'90px'} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography sx={text.textH4} >Error </Typography>
                                <Typography sx={text.textH4} >Inténtelo más tarde</Typography>
                            </Box>



                        </Box>


                    </div>
                </Box>
            </Modal >
        </ThemeProvider>

    );
}