import { Box, Typography, Grid, Paper } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';

import { Zoom } from 'react-awesome-reveal';

const boxComponent = ({ data }) => {
    return (
        <Box>
            <Box sx={box.boxFormatArticleComponent}>
                <Zoom>
                    <Grid container spacing={2}  >

                        <Grid item xs={12} sm={6} >
                            <Paper sx={box.boxComponentPaperTitleLeft}>
                                <Typography sx={text.textH1W}>MISIÓN</Typography>
                            </Paper>
                            <Paper sx={box.boxComponentPaperContentLeft}>
                                <Typography sx={text.textH5}>Nuestra misión es brindar tranquilidad y respaldo a través de un servicio personalizado. Nos comprometemos a resolver dudas y asegurar que cada cliente se sienta apoyado por nuestros asesores especializados.</Typography>
                            </Paper>
                        </Grid>



                        <Grid item xs={12} sm={6} >
                            <Paper sx={box.boxComponentPaperTitleRight}>
                                <Typography sx={text.textH1BoxComponent}>VISIÓN</Typography>
                            </Paper>
                            <Paper sx={box.boxComponentPaperContentRight}>
                                <Typography sx={text.textH5W}>Aspiramos a ser líder en el mercado, ofreciendo un servicio excepcional y soluciones innovadoras que aseguren la tranquilidad y satisfacción de nuestros clientes.</Typography>
                            </Paper>
                        </Grid>


                    </Grid>
                </Zoom>
            </Box>
        </Box>

    )
}

export default boxComponent;