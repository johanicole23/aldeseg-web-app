import { Box, Typography, Grid } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';
import homeBackground from '../assets/images/prueba.png';
import { Fade } from 'react-awesome-reveal';

const circleComponent = ({ data }) => {
    return (

        <Grid container spacing={3}  >
            <Fade cascade style={{ display: 'flex', flexDirection: 'row' ,justifyContent: 'center', width: '33.3333333%' }}>


                {data.map((item) => (
                    <Grid item xs={4} sm={4}>
                        <Box
                            sx={{ position: 'relative', }}
                        >

                            <Box sx={box.boxCircleComponentBackgroundYellow}>
                                <img src={homeBackground} alt={'background'} className="image-Radius-Background" />
                            </Box>

                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',

                                }}
                            >
                                <img src={item.imgUrl} alt={item.imgUrl} className="image-Radius" />
                                <Box display={'flex'} justifyContent={'center'} >
                                    <Typography sx={text.textH5CircleComponent}>{item.word1}</Typography>
                                </Box>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Typography sx={text.textH5CircleComponent}>{item.word2}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Fade>

        </Grid>

    )
}

export default circleComponent;