import { Box, Typography, Grid } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box'
const circleComponent = ({ data }) => {
    return (
        <Box sx={box.boxFormatGeneral}>
            <Grid container spacing={8}  >
                {data.map((item) => (
                    <Grid item xs={12} sm={3} >
                        <img src={item.imgUrl} alt={item.imgUrl} class="image-Radius" />
                        <Box display={'flex'} justifyContent={'center'} >
                            <Typography sx={text.textH5}>{item.word1}</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography sx={text.textH5}>{item.word2}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default circleComponent;