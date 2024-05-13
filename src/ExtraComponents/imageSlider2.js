import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Button } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box'
const ImageSlider2 = ({ data }) => {
    return (
        <Carousel
            navButtonsAlwaysVisible={true}
            sx={box.carruselFormat}
            animation="fade"
            timeout={5000}
            transitionDuration={50000}
        >
            {data.map((item) => (
                < Box sx={{
                    position: 'relative',

                }}>
                    <img src={item.imgUrl} alt={item.imgUrl} width={"100%"} height={300} />
                    <Box sx={box.contentCarrusel}>

                        <Box sx={{  }}>
                            <Typography variant="body2" sx={text.textH1}>{item.title}</Typography>
                        </Box>
                        <Box sx={{ marginTop: '1rem' }}>
                            <Typography variant="body2" sx={text.textH3}>{item.subtitle}</Typography>
                        </Box>

                    </Box>
                </Box>
            ))}
        </Carousel>
    )
}

export default ImageSlider2;
