import myTheme from './myTheme.js';

const button = {

    buttonWhiteText: {
        color: 'white',
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "20px",
        textTransform: 'none',
        width: '40%'

    },
    buttonDarkBlueText: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "20px",
        textTransform: 'none',
        width: '18%'
    },
    buttonDarkBlueTextFooter: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "20px",
        textTransform: 'none',
        width: '100%'
    },
    buttonWhiteTextFooter: {
        color: 'white',
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "15px",
        textTransform: 'none',
        width: '100%',

    },

    buttonWhiteTextSmall: {
        color: 'white',
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 500,
        fontSize: "15px",
        textTransform: 'none',
        width: '12%'
    },

    buttonDarkBlueTextSmall: {
        color: myTheme.palette.common.customDarkBlue,
        fontFamily: 'Encode Sans Semi Condensed',
        fontWeight: 600,
        fontSize: "15px",
        textTransform: 'none',
        width: '15%'
    },
    buttonWtsp: {
        backgroundColor: '#2AA81A',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '120px',
        padding: '5px 5px 5px 5px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
    },

}
export default button;