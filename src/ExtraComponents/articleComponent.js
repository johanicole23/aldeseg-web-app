import { Box, Typography, Grid } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';

import { Slide } from 'react-awesome-reveal';

const articleComponent = ({ data }) => {
    return (
        <Box>
            <Slide direction='down' >
                <Typography sx={{ ...text.textH4W, margin: '0 5%' }}>{data.title}</Typography>
            </Slide>

            <Box sx={box.boxFormatArticleComponent}>
                <Grid container spacing={2}  >
                    <Grid item xs={12} sm={8} >
                        <Box sx={{
                            margin: '2rem 5%'
                        }}>
                            <Typography sx={text.textH5W}>{data.data1}</Typography>
                        </Box>

                        <Box sx={{
                            backgroundImage: `url(${data.urlBackgroundImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: data.heightBackgroundImg, // Puedes ajustar la altura según sea necesario
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px',
                            '@media screen and (max-width: 599px)': {
                                height: data.heightBackgroundImg600,
                            },
                            '@media screen and (min-width: 600px) and (max-width: 900px)': {
                                height: data.heightBackgroundImg700,
                            },
                        }}>
                            <Box sx={{ margin: '0 5%' }}>
                                <Typography sx={text.textH5}>{data.data2}</Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Box sx={{
                            backgroundImage: `url(${data.urlImgArticle})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: data.heightImgArticle, // Puedes ajustar la altura según sea necesario
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '10px',
                            marginTop: '2rem',
                            '@media screen and (max-width: 600px)': {
                                height: data.heightImgArticle600
                            },
                            '@media screen and (min-width: 700px) and (max-width: 840px)': {
                                height: data.heightImgArticle700
                            },
                        }}>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}

export default articleComponent;