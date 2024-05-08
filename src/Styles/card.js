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
        justifyContent: 'center',
        '@media screen and (501px <= width <= 900px)': {
            width: '200px',
            height: '290px',
            padding: '10px',
            margin: '2% 0 10% 5%'
        },
        '@media screen and (400px <= width <= 500px)': {
            width: '250px',
            height: '300px',
            padding: '10px',
            margin: '2% 0 5% 21%'
        },
        '@media screen and (375px <= width <= 399px)': {
            width: '250px',
            height: '300px',
            padding: '10px',
            margin: '2% 0 5% 20%'
        },
        '@media screen and (320px <= width <= 374px)': {
            width: '250px',
            height: '300px',
            padding: '10px',
            margin: '2% 0 5% 15%'
        }

    },
    CardActionArea: {
        paddingTop: '20%',
        '@media screen and (max-width: 500px)': {
            paddingTop: '10%',
        },
    },
    cardMedia: {
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        '@media screen and (max-width: 500px)': {
            height: '130px',
        },
        '@media screen and (501px <= width <= 900px)': {
            height: '100px',
        },
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        '@media screen and (501px <= width <= 900px)': {
            height: '95px',
        },
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: "12%",
        '@media screen and (max-width: 500px)': {
            paddingBottom: "3%",
        },
        '@media screen and (501px <= width <= 900px)': {
            paddingBottom: "10%",
        },
    },
    cardResponsive: {
        margin: "0 20%",
        '@media screen and (max-width: 500px)': {
            margin: '0 -4%',
        },
        '@media screen and (min-width: 1601px) and (max-width: 1700px)': {
            margin: '0 10%',
        },
        '@media screen and (min-width: 1501px) and (max-width: 1600px)': {
            margin: '0 10%',
        },
        '@media screen and (min-width: 1401px) and (max-width: 1500px)': {
            margin: '0 10%',
        },
        '@media screen and (min-width: 1301px) and (max-width: 1400px)': {
            margin: '0 5%',
        },
        '@media screen and (min-width: 1250px) and (max-width: 1300px)': {
            margin: '0 5%',
        },
        '@media screen and (min-width: 1150px) and (max-width: 1249px)': {
            margin: '0 5%',
        },
        '@media screen and (min-width: 1030px) and (max-width: 1149px)': {
            margin: '0 0%',
        },
        '@media screen and (min-width: 930px) and (max-width: 1029px)': {
            margin: '0 -5%',
        },
        '@media screen and (min-width: 901px) and (max-width: 929px)': {
            margin: '0 -10%',
        },
        '@media screen and (min-width: 780px) and (max-width: 900px)': {
            margin: '0 7%',
        },
        '@media screen and (min-width: 769px) and (max-width: 779px)': {
            margin: '0 5%',
        },
        '@media screen and (min-width: 701px) and (max-width: 768px)': {
            margin: '0 2%',
        },
        '@media screen and (min-width: 645px) and (max-width: 700px)': {
            margin: '0 -2%',
        },
        '@media screen and (min-width: 600px) and (max-width: 644px)': {
            margin: '0 -5%',
        },
    }
}

export default generalCard;