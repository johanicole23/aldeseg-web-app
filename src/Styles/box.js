
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
        '@media screen and (max-width: 599px)': {
            marginTop: 5,
            height: '450px', //450px para que se incluyan los textos despues de las diapositivas en mobile
            '& img': {
                width: '100%',
                height: '100px',
                marginTop: '1rem'

            },
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            marginTop: 5,
            '& img': {
                width: '100%',
                height: '275px',
                marginTop: '1rem'

            },
        },
    },
    contentCarrusel: {
        position: 'absolute', top: '50px', margin: '1rem 5% 0 42%',
        '@media screen and (max-width: 599px)': {
            top: '25px', margin: '150px 6% 0 6%'
        },

    },
    contentArticleComponent: {
        position: 'absolute', margin: '0 5% 3rem 5%',
        '@media screen and (max-width: 599px)': {
            top: '25px', margin: '120px 6% 0 6%'
        },

    },

    boxFormatGeneralColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '5rem 10% ',
        '@media screen and (max-width: 599px)': {
            margin: '3rem 4% ',
        },
    },
    boxFormatGeneral: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3rem 0 ',
        '@media screen and (max-width: 599px)': {
            margin: '5rem 2% 2rem 2% ',
        },
      
    },
    boxFormatArticleComponent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3rem 0 ',
        '@media screen and (max-width: 599px)': {
            margin: '1rem 5% ',
        },
      
    },

    paperBoxWhoComponent: {
        backgroundColor: 'whiteSmoke',
        width: '100%',
        height: '200px',
        borderRadius: '20px',
        padding: '2rem 4% 0 4%',
        marginBottom: '4rem',
        '@media screen and (max-width: 599px)': {
            height: '410px',
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            height: '270px',
        },
    },

    boxContentWhoComponent: {
        alignItems: 'space-around',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        margin: '0 8%',
    },

   



}
export default box;