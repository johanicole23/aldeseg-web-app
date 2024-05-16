import { Box, Typography, Grid } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box'
const circleComponent = ({ data }) => {
    return (
        <Box sx={box.boxFormatGeneral}>
            <Grid container spacing={3}  >
                {data.map((item) => (
                    <Grid item xs={3} sm={3} >
                        <Box sx={{
                            margin:'0 5%',
                            '@media screen and (max-width: 600px)': {
                                margin: '0 10% ',
                            },
                        }}>
                            <img src={item.imgUrl} alt={item.imgUrl} class="image-Radius" />
                            <Box display={'flex'} justifyContent={'center'} >
                                <Typography sx={text.textH5CircleComponent}>{item.word1}</Typography>
                            </Box>
                            <Box display={'flex'} justifyContent={'center'}>
                                <Typography sx={text.textH5CircleComponent}>{item.word2}</Typography>
                            </Box>
                        </Box>

                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default circleComponent;