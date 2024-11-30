import { Box, Typography, Grid } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';
import homeBackground from '../assets/images/prueba.png';
import homeBackgroundBlue from '../assets/images/backgroundBlue.png'
import { Slide } from "react-awesome-reveal";

const principalFacts = ({ data }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4} sm={5} />
            <Grid item xs={8} sm={7}>
                <Slide direction='right'>
                    <Box sx={box.boxPrincipalFactsComponent} >
                        <Box sx={{ position: 'relative' }}>
                            <Box sx={box.boxPrincipalFactsBluePart}>
                                <img src={homeBackgroundBlue} alt={'background'} className="image-Radius-Background-Blue" />
                            </Box>
                            <Box sx={box.boxPrincipalFactsNumberPart}>
                                <Typography sx={text.textH2}>{data.number1}</Typography>
                            </Box>
                        </Box >
                        <Box sx={{ backgroundImage: `url(${homeBackground})` }}>
                            <Box sx={box.boxPrincipalFactsYellowPart} >
                                <Typography sx={text.textH4}>{data.text1}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Slide>
            </Grid>
            <Grid item xs={8} sm={7}>
                <Slide direction='left'>
                    <Box sx={box.boxPrincipalFactsComponent} >

                        <Box sx={{ backgroundImage: `url(${homeBackground})` }}>
                            <Box sx={box.boxPrincipalFactsYellowPartLeft} >
                                <Typography sx={text.textH4}>{data.text2}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ position: 'relative' }}>
                            <Box sx={box.boxPrincipalFactsBluePartLeft}>
                                <img src={homeBackgroundBlue} alt={'background'} className="image-Radius-Background-Blue" />
                            </Box>
                            <Box sx={box.boxPrincipalFactsNumberPartLeft}>
                                <Typography sx={text.textH2}>{data.number2}</Typography>
                            </Box>
                        </Box >
                    </Box>
                </Slide>
            </Grid>
            <Grid item xs={4} sm={5} />
            <Grid item xs={3} sm={5} />
            <Grid item xs={9} sm={7}>
                <Slide direction='right'>
                    <Box sx={box.boxPrincipalFactsComponent} >
                        <Box sx={{ position: 'relative' }}>
                            <Box sx={box.boxPrincipalFactsBluePartRight3}>
                                <img src={homeBackgroundBlue} alt={'background'} className="image-Radius-Background-Blue" />
                            </Box>
                            <Box sx={box.boxPrincipalFactsNumberPart}>
                                <Typography sx={text.textH2}>{data.number3}</Typography>
                            </Box>
                        </Box >
                        <Box sx={{ backgroundImage: `url(${homeBackground})` }}>
                            <Box sx={{
                                ...box.boxPrincipalFactsYellowPart, '@media screen and (max-width: 599px)': {
                                    padding: '15px 5% 15px 10%'
                                },
                            }} >
                                <Typography sx={text.textH4}>{data.text3}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Slide>
            </Grid>

        </Grid>


    )
}

export default principalFacts;