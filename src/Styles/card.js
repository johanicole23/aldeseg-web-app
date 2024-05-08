import { CardActionArea, backdropClasses } from "@mui/material";
import myTheme from "./myTheme";

const generalCard = {
    card: {
        backgroundColor: myTheme.palette.common.customYellow,
        borderRadius: '20px',
        boxShadow: '4px 8px 4px rgba(0, 0, 0, 0.25)',
        padding: '20px',
        margin: '20px',
        width: '300px',
        height: '345px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CardActionArea: {
        paddingTop: '20%'
    },
    cardMedia:{ 
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default generalCard;