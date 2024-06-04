import myTheme from './myTheme.js';

const text = {

    textH1: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 700,
        fontSize: "35px",
    },

    textH2: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "2rem",
    },
    textH3: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "30px",
    },

    textH3Bold: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "30px",
    },
    textH4: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "25px",
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
    textH6: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "18px",
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
        color: myTheme.palette.common.customDarkBlue,
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
        fontWeight: 400,
        fontSize: "18px",
        textDecoration: 'none',

    },
    textFieldFocusedH6: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: myTheme.palette.common.customBlue,
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
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            fontSize: "25px",
        },
    },
    titleNavBar: {
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        display: { xs: 'none', md: 'flex' },
        letterSpacing: '.1rem',
        textDecoration: 'none',
        fontSize: '38px',
        color: 'white',
        '@media screen and (max-width: 600px)': {
            fontSize: '30px',
        },
    },
    subTitleNavBar: {
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        color: 'white',
        fontSize: "15px",
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



}
export default text;