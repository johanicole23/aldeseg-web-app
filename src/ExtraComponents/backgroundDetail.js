import { Box } from '@mui/material';
import homeBackgroundBlue from '../assets/images/backgroundBlue.png'
import box from '../Styles/box';

const backgroundDetail = ({ detailWidth, mgLeft, mgRight }) => {
    return (
        <Box sx={{}}>
            <Box sx={{
                backgroundImage: `url(${homeBackgroundBlue})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: detailWidth,
                height: '2rem',
                display: 'flex',
                marginTop:'1rem',
                marginBottom: '1rem',
                marginLeft:mgLeft,
                marginRight:mgRight,
                flexDirection:'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'center',
                '@media screen and (max-width: 599px)': {
                    height: '20px',
                },
                '@media screen and (min-width: 600px) and (max-width: 900px)': {
                    
                },
            }}>
                
            </Box>
        </Box>
    )
}

export default backgroundDetail;