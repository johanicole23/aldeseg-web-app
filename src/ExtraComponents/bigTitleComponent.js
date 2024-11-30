import { Box, Typography } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box';
import homeBackground from '../assets/images/prueba.png';
import { Zoom } from "react-awesome-reveal";

const bigTitleComponent = ({ data }) => {
    return (
        <Box >

            <Box sx={{...box.boxFormatGeneralColumn, mb:'0'}} >
                <Typography sx={text.textH1W}>{data.title1}</Typography>

            </Box>

            <Zoom>
                <Box sx={{ backgroundImage: `url(${homeBackground})` }}>
                    <Box sx={{...box.boxFormatGeneralColumn, mt:'0'}} >
                        <Typography sx={text.textH1}>{data.title2}</Typography>
                    </Box>
                </Box>
            </Zoom>
        </Box>
    )
}

export default bigTitleComponent;