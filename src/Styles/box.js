import myTheme from './myTheme.js';
const box = {
    navBarTitleFormat: {
        marginLeft: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    carruselFormat: {
        maxWidth: '100%',
        zIndex: 0,
        marginTop: '0.1rem',
        '@media screen and (max-width: 600px)': {
            marginTop: 5,
            height: '450px', //450px para que se incluyan los textos despues de las diapositivas en mobile
            '& img': {
                width: '100%',
                height: '100px',
                marginTop: '1rem'

            },
        },
        '@media screen and (min-width: 700px) and (max-width: 840px)': {
            marginTop: 5,
            '& img': {
                width: '100%',
                height: '350px',
                marginTop: '1rem'

            },
        },
    },
    contentCarrusel: {
        position: 'absolute', top: '50px', margin: '1rem 5% 0 42%',
        '@media screen and (max-width: 600px)': {
            top: '25px', margin: '120px 6% 0 6%'
        },

    },

    boxFormatGeneralColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '5rem 10% ',
        '@media screen and (max-width: 600px)': {
            margin: '5rem 2% ',
        },
    },
    boxFormatGeneral: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3rem 0 ',
        '@media screen and (max-width: 600px)': {
            margin: '5rem 30% ',
        },
      
    },

   



}
export default box;