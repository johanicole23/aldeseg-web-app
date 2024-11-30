
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
        margin: '2rem 10%',
        '@media screen and (max-width: 599px)': {
            margin: '2rem 4% ',
        },
    },

    boxGeneralMargin: {
        margin: '10rem 0',
        '@media screen and (max-width: 599px)': {
            margin: '3rem 0 ',
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
        backgroundColor: myTheme.palette.common.customBlue,
        width: '100%',
        height: '4rem',
        justifyContent: 'center',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: '0px',
        marginTop: '0.72rem',

        '@media screen and (max-width: 599px)': {
            height: '4rem',
            marginTop: '3rem',

        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            padding: '0 10% 0 5%',
        },

    },

    boxPhraseWhoComponent: {
        margin: '1rem 5% 1rem 10%',
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            margin: '1rem 0 1rem 5%',
        },

    },

    boxContentWhoComponent: {
        alignItems: 'space-around',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    boxPrincipalFactsComponent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        '@media screen and (max-width: 599px)': {
            margin: '1rem 0 ',
        },
    },

    boxPrincipalFactsYellowPart: {
        padding: '1.5rem 8% 1.5rem 15%',
        flexDirection: 'column',
        '@media screen and (max-width: 599px)': {
            padding: '15px 8% 15px 15%'
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            padding: '15px 8% 15px 20%'
        },

    },
    boxPrincipalFactsYellowPartLeft: {
        padding: '1.5rem 15% 1.5rem 8%',
        flexDirection: 'column',
        '@media screen and (max-width: 599px)': {
            padding: '10px 15% 10px 8%'
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            padding: '10px 16% 10px 8%'
        },
    },

    boxPrincipalFactsBluePart: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: 'translate(-175%, 10%)',
        '@media screen and (max-width: 599px)': {
            transform: 'translate(-70px, -10px)',
        },

    },

    boxPrincipalFactsBluePartLeft: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: 'translate(-175%, 10%)',
        '@media screen and (max-width: 599px)': {
            transform: 'translate(-30px, -10px)',
        },

    },

    boxPrincipalFactsBluePartRight3: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: 'translate(-115%, 10%)',
        '@media screen and (max-width: 599px)': {
            transform: 'translate(-70px, -10px)',
        },

    },

    boxPrincipalFactsNumberPart: {
        position: 'relative',
        alignItems: 'center',
        '@media screen and (max-width: 599px)': {
            transform: 'translate(-23px, 0px)',
        },
    },

    boxPrincipalFactsNumberPartLeft: {
        position: 'relative',
        alignItems: 'center',
        transform: 'translate(-60%, 0px)',
        '@media screen and (max-width: 599px)': {
            transform: 'translate(15px, 0px)',
        },
    },

    boxCircleComponentBackgroundYellow: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        bottom: '7%',
        width: '100%',
        height: '100%',
        '@media screen and (max-width: 599px)': {
            bottom: '6%',
        },
    },

    boxFooter: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem 0',
        '@media screen and (max-width: 599px)': {
            margin: '2rem 2% 0 2%',
        },
    },

    boxFooterSocialMedia: {
        display: 'flex',
        alignItems: 'center',
        margin: '2rem 0',
        '@media screen and (max-width: 599px)': {
            margin: '0 5% 0 0%',
            transform: 'translate(0, -2rem)',
        },
    },

    boxWhoComponentYellowBackGround: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
       
    },

    boxComponentPaperTitleLeft:{
        marginTop: '2rem',
        marginLeft:'35%',
        marginRight:'0',
        borderRadius:'0px',
        height:'auto',
        display:'flex',
        justifyContent:'center',
        backgroundColor: myTheme.palette.common.customBlue,
        '@media screen and (max-width: 599px)': {
            margin:'4rem 8% 0 8% ',
            padding:'1rem 5%',
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            marginLeft:'15%',
        },
    },
    boxComponentPaperContentLeft:{
        marginLeft:'35%',
        marginBottom:'2rem',
        marginRight:'0',
        borderRadius:'0px',
        height: '200px',
        display:'flex',
        justifyContent:'center',
        padding:'0 5%',
        alignItems:'center',
        backgroundColor: myTheme.palette.common.customYellow,
        '@media screen and (max-width: 599px)': {
            margin:'0 8% 2rem 8% ',
            padding:'1rem 5%',
            height:'auto',
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            marginLeft:'15%',
            height:'300px',
        },
    },
    boxComponentPaperTitleRight:{
        marginTop: '2rem',
        marginLeft:'0',
        marginRight:'35%',
        borderRadius:'0px',
        height:'auto',
        display:'flex',
        justifyContent:'center',
        backgroundColor: myTheme.palette.common.customYellow,
        '@media screen and (max-width: 599px)': {
            margin:'4rem 8% 0 8% ',
            padding:'1rem 5%',
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            marginRight:'15%',
        },
    },
    boxComponentPaperContentRight:{
        marginLeft:'0',
        marginBottom:'2rem',
        marginRight:'35%',
        borderRadius:'0px',
        height:'200px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'0 5%',
        backgroundColor: myTheme.palette.common.customBlue,
        '@media screen and (max-width: 599px)': {
            margin:'0 8% 4rem 8% ',
            padding:'1rem 5%',
            height:'auto',
        },
        '@media screen and (min-width: 600px) and (max-width: 900px)': {
            marginRight:'15%',
            height:'300px',
        },
    }

}
export default box;