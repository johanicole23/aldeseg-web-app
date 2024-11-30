import myTheme from './myTheme.js';

const text = {

    textH1: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'League Gothic',
        fontWeight: 400,
        fontSize: "150px",
        '@media screen and (max-width: 600px)': {
            fontSize: "75px",
            fontWeight: 300,
        },
    },

    textH1W: {
        color: 'white',
        fontFamily: 'League Gothic',
        fontWeight: 400,
        fontSize: "130px",
        '@media screen and (max-width: 600px)': {
            fontSize: "60px",
            fontWeight: 300,
        },
    },

    textH1BoxComponent: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'League Gothic',
        fontWeight: 400,
        fontSize: "130px",
        '@media screen and (max-width: 600px)': {
            fontSize: "60px",
            fontWeight: 300,
        },
    },



    textH2: {
        color: 'white',
        fontFamily: 'League Gothic',
        fontWeight: 400,
        fontSize: "110px",
        '@media screen and (max-width: 600px)': {
            fontSize: "60px",
            fontWeight: 300,
        },
    },



    textH3: {
        color: 'white',
        fontFamily: 'League Gothic',
        fontWeight: 400,
        fontSize: "110px",
        '@media screen and (max-width: 599px)': {
            fontSize: "40px",
            fontWeight: 300,
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            fontSize: "100px",
            fontWeight: 300,
        },
    },

    textH3Bold: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "30px",
    },
    textH4W: {
        color: 'white',
        fontFamily: 'League Gothic',
        fontWeight: 400,
        fontSize: "80px",
        '@media screen and (max-width: 599px)': {
            fontSize: "60px",
            fontWeight: 300,
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            fontSize: "80px",
            fontWeight: 300,
        },
    },
    textH4: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "25px",
        '@media screen and (max-width: 599px)': {
            fontSize: "0.8rem",
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            fontSize: "1.2rem",
        },
    },
    textH4Bold: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "25px",
    },
    textH5: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "20px",
        textDecoration: 'none',

    },
    textH5W: {
        color: 'white',
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "20px",
        textDecoration: 'none',
        '@media screen and (max-width: 599px)': {
            fontWeight: 400,
        },

    },
    textH6: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "16px",
        textDecoration: 'none',

    },
    textH6White: {
        color: 'white',
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "15px",
        textDecoration: 'none',

    },
    textH7: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "15px",
        textDecoration: 'none',

    },
    textH5CircleComponent: {
        color: 'white',
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "20px",
        textDecoration: 'none',
        '@media screen and (max-width: 600px)': {
            fontSize: "14px",
        },
    },
    textFieldH6: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 700,
        fontSize: "18px",
        textDecoration: 'none',

    },
    textFieldFocusedH6: {
        '& .MuiOutlinedInput-root': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'yourHoverColor', // Cambia 'yourHoverColor' por el color que quieras
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: myTheme.palette.common.customBlue, // Color de borde cuando está enfocado
            },
        },
    },
    selectTextFieldFocusedH6: {
        color: myTheme.palette.common.customBlue, // Cambia el color del texto del textfield select

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: myTheme.palette.common.customBlue, // Cambia el color del borde del textfield select cuando está enfocado
        },
    },
    textTitleSlider: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 700,
        fontSize: "35px",
        '@media screen and (max-width: 599px)': {
            fontSize: "32px",
            color: 'white',
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            fontSize: "30px",

        },
    },
    textSubtitleSlider: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "30px",
        '@media screen and (max-width: 599px)': {
            fontSize: "28px",
            color: 'white'
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            fontSize: "25px",
        },
    },
    titleNavBar: {
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        display: { xs: 'none', md: 'flex' },
        // letterSpacing: '.1rem',
        textDecoration: 'none',
        fontSize: '40px',
        color: 'white',
        '@media screen and (max-width: 600px)': {
            fontSize: '30px',
        },
    },
    subTitleNavBar: {
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        color: 'white',
        fontSize: "20px",
        display: "inline-block",
        position: "relative",
        textDecoration: "none",
        textTransform: 'none',

        "&:hover:after": {
            backgroundColor: myTheme.palette.common.customYellow,
            color: myTheme.palette.common.customYellow,
        },
        "&:hover": {

            color: myTheme.palette.common.customYellow,
        },
    },

    textNameWhoComponent: {
        color: 'white',
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "40px",
        textDecoration: 'none',
        textAlign: 'center',
        '@media screen and (max-width: 600px)': {
            fontSize: '35px',
        },

    },

    textH1Insurance: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 700,
        fontSize: "35px",
    },


    textH2Insurance: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "2rem",
    },


    textH5Insurance: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "20px",
        textDecoration: 'none',

    },



}
export default text;