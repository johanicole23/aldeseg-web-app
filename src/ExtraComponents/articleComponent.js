import { Box, Typography, Grid } from '@mui/material';
import text from '../Styles/text';
import box from '../Styles/box'
const articleComponent = ({ data }) => {
    return (
        <Box sx={box.boxFormatGeneral}>
            <Grid container spacing={8}  >
                <Grid item xs={6} sm={6} >
                    
                </Grid>
                <Grid item xs={6} sm={6} >
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default articleComponent;