import general_1 from './images/general_1.jpeg';
import general_2 from './images/general_2.jpeg';
import general_3 from './images/general_3.jpeg';
import general_4 from './images/general_4.jpeg';
import general_5 from './images/general_5.jpg';
import homeSlide_1 from './images/home/slides/slide_1.jpg';
import homeSlide_2 from './images/home/slides/slide_2.jpeg';
import homeSlide_3 from './images/home/slides/slide_3.jpeg';
import homeSlide_4 from './images/home/slides/slide_4.jpeg';
import homeSlide_5 from './images/home/slides/slide_5.jpeg';
import homeCircleCellphone from './images/home/circleIcons/cellphone.png';
import homeCircleDisponibility from './images/home/circleIcons/disponibility.png';
import homeCirclePersonalize from './images/home/circleIcons/personalize.png';
import homeArticleFamilyDoctor from './images/home/article1/familyDoctor.jpg';
import aboutUsVission from './images/aboutUs/vission.png';
import aboutUsBackgroundVission from './images/aboutUs/backgroundVission.png';
import aboutUsBackgroundOneSlide from './images/aboutUs/backgroundOneSlide.jpg';
import aboutUsRocio from "./images/aboutUs/people/RocioDLaTorre.png";
import aboutUsAndrea from "./images/aboutUs/people/AndreaCastillo.png";
import aboutUsMiriam from "./images/aboutUs/people/MiriamDLaTorre.png";
import aboutUs36Number from "./images/aboutUs/36number.png";
import aig from './images/Aliances/aig.png';
import ama from './images/Aliances/ama.png';
import bestdoctors from './images/Aliances/bestdoctors.png';
import bmi from './images/Aliances/bmi.png';
import chubb from './images/Aliances/chubb.png';
import ecuasuiza from './images/Aliances/ecuasuiza.png';
import equinoccial from './images/Aliances/equinoccial.png';
import hispana from './images/Aliances/hispana.png';
import humana from './images/Aliances/humana.png';
import latina from './images/Aliances/latina.png';
import mapfre from './images/Aliances/mapfre.png';
import sweaden from './images/Aliances/sweaden.png';
import unidos from './images/Aliances/unidos.png';
import confiamed from './images/Aliances/confiamed.png';
import prueba from './images/prueba.png';
import footerTiktok from './images/footer/tik-tok.png'

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const generalData = [
  {
    id: 1, imgUrl: general_1
  },
  {
    id: 2, imgUrl: general_2
  },
  {
    id: 3, imgUrl: general_3
  },
  {
    id: 4, imgUrl: general_4
  },
  {
    id: 5, imgUrl: general_5
  }
];

const generalCardsData = [
  {
    id: 1, name: 'Seguro 1', description: 'Descripción seguro 1', imgUrl: general_1, link: '/seguro-vida'
  },
  {
    id: 2, name: 'Seguro 2', description: 'Descripción seguro 2', imgUrl: general_2, link: '/seguro-salud'
  },
  {
    id: 3, name: 'Seguro 3', description: 'Descripción seguro 3', imgUrl: general_3, link: '/seguro-vehiculo'
  },
  {
    id: 4, name: 'Seguro 4', description: 'Descripción seguro 4', imgUrl: general_4, link: '/seguro-responsabilidad'
  },
  {
    id: 5, name: 'Seguro 5', description: 'Descripción seguro 5', imgUrl: general_5, link: '/seguro-hogar'
  },
  {
    id: 6, name: 'Seguro 6', description: 'Descripción seguro 6', imgUrl: general_1, link: '/'
  }
];
const homeSlides = [
  {
    id: 1, imgUrl: homeSlide_1, title: 'Asesores y Productores', subtitle: 'Nuestros seguros te apoyan y protegen en cada etapa de tu vida.'
  },
  {
    id: 2, imgUrl: homeSlide_2, title: 'ALDESEG es una empresa ', subtitle: 'Con una trayectoria de más de 15 años y una amplia cartera de clientes.'
  },
  {
    id: 3, imgUrl: homeSlide_3, title: 'Amplia gama de servicios', subtitle: 'Satisfacemos las necesidades de protección y seguridad de nuestros clientes.'
  },
  {
    id: 4, imgUrl: homeSlide_4, title: 'Asistencia Legal', subtitle: 'Apoyo y protección en la resolución de conflictos relacionados con pólizas de seguros.'
  },
  {
    id: 5, imgUrl: homeSlide_5, title: 'Servicio de Finanzas', subtitle: 'Soluciones para garantizar el cumplimiento de obligaciones contractuales y legales.'
  }
];

const homeBigTitle =
{
  title1: 'SOMOS TU',
  title2:'MEJOR OPCIÓN'

};

const homeCircleIcons = [
  {
    id: 1, imgUrl: homeCircleCellphone,  word1: 'Contacto', word2: 'Directo'
  },
  {
    id: 2, imgUrl: homeCirclePersonalize, word1: 'Asistencia', word2: 'Personalizada'
  },
  {
    id: 3, imgUrl: homeCircleDisponibility, word1: 'Disponibilidad', word2: '24/7'
  },

];

const homeArticleComponent =
{
  title:'¿QUÉ ES ALDESEG?',
  data1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ',
  data2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla.',
  urlBackgroundImg: prueba,
  urlImgArticle: homeArticleFamilyDoctor,
  heightImgArticle: '230px',
  heightImgArticle600: '260px',
  heightImgArticle700: '190px',
  heightBackgroundImg: '110px',
  heightBackgroundImg600: '150px',
  heightBackgroundImg700: '150px',

};

const homePrincipalFactsComponent =
{
  number1: '1',
  text1: 'ALDESEG es un intermediario profesional entre el cliente y las compañías de seguros.',
  number2: '2',
  text2: 'Nuestra función principal es asesorar a los clientes sobre las mejores coberturas según sus necesidades.',
  number3: '3',
  text3: 'Ademas gestionamos los trámites necesarios para la contratación de pólizas y la resolución de siniestros.',

};

const homeAliancesComponent = [
  {
    id: 1, imgUrl: sweaden,
  },
  {
    id: 2, imgUrl: equinoccial,
  },
  {
    id: 3, imgUrl: latina,
  },
  {
    id: 4, imgUrl: chubb,
  },
  {
    id: 5, imgUrl: bmi,
  },
  {
    id: 6, imgUrl: aig,
  },
  {
    id: 7, imgUrl: ama,
  },
  {
    id: 8, imgUrl: bestdoctors,
  },

  {
    id: 9, imgUrl: ecuasuiza,
  },
  {
    id: 10, imgUrl: hispana,
  },
  {
    id: 11, imgUrl: humana,
  },
  {
    id: 12, imgUrl: mapfre,
  },
  {
    id: 13, imgUrl: unidos,
  },
  {
    id: 14, imgUrl: confiamed,
  },

];

const footerInformation=[
  {
    id:1 , icon: EmailIcon, text:'servicio.cliente@aldeseg.com'
  },
  {
    id:2, icon: LocalPhoneIcon, text:'098-339-5633'
  }
];

const footerSocialMedia=[
  {
    id:1 , icon: FacebookIcon, text:'Facebook', href: 'http://localhost:3000/'
  },
  {
    id:2, icon: InstagramIcon, text:'Instagram', href: 'http://localhost:3000/'
  },
];

const footerSocialTiktok={
  image: footerTiktok,
  text:'Tiktok',
  href: 'http://localhost:3000/'

};

const footerAliances = [
  {
    id: 1, imgUrl: sweaden,
  },
  {
    id: 2, imgUrl: equinoccial,
  },
  {
    id: 3, imgUrl: latina,
  },
  {
    id: 4, imgUrl: ecuasuiza,
  },
  {
    id: 5, imgUrl: bmi,
  },
  {
    id: 6, imgUrl: aig,
  },
  {
    id: 7, imgUrl: ama,
  },
  {
    id: 8, imgUrl: bestdoctors,
  },
  {
    id: 9, imgUrl: humana,
  },
  {
    id: 10, imgUrl: unidos,
  },
  {
    id: 11, imgUrl: confiamed,
  },
  {
    id: 12, imgUrl: mapfre,
  },


];

const aboutUsSlide =
{
  imgUrl: aboutUsBackgroundOneSlide,
  title: 'Asesórate con los mejores en ALDESEG',
  subtitle: 'Somos un puente sólido y confiable entre nuestros clientes y las mejores compañías de seguros del mercado, ofrecemos soluciones personalizadas que se adaptan a tus necesidades. ',

};

const aboutUsBigTitle =
{
  title1: 'NUESTRO',
  title2:'EQUIPO'

};
const aboutUsMisionVision =
{
  data1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ',
  data2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla.',
  urlBackgroundImg: aboutUsBackgroundVission,
  urlImgArticle: aboutUsVission,
  heightImgArticle: '230px',
  heightImgArticle600: '260px',
  heightImgArticle700: '190px',
  heightBackgroundImg: '110px',
  heightBackgroundImg600: '150px',
  heightBackgroundImg700: '150px',

};
const aboutUsWhoComponent = [
  {
    id: 1, imgUrl: aboutUsRocio, name: "Rocío D' LaTorre", 
    phrase: 
    'Gerente general y cofundadora de ALDESEG, se graduó en Administración de Empresas en la Universidad Central del Ecuador. A los 19 años, comenzó su carrera como asistente de emisión y pronto se enamoró del mercado de seguros, lo que la llevó a obtener una maestría en el campo. Con 37 años de experiencia, ha ocupado puestos como jefa de emisión y jefa de siniestros. Hoy, su pasión por lo que hace sigue siendo su principal motivación.',
    numberUrl: aboutUs36Number,
    list1: 'Gestión eficiente: 15 años en el análisis de riesgos y seguros', 
    list2: 'Líder en cumplimiento: 10+ años en aseguradoras y brokers.',
    list3: '15 años en el desarrollo de estrategias de cobertura en seguros.',
    list4: '10+ años protegiendo activos en aseguradoras y brokers.',
    list5: 'Gestión de reclamos: décadas de experiencia en aseguradoras.',

  },
  {
    id: 2, imgUrl: aboutUsMiriam, name: "Miriam D' LaTorre", 
    phrase: 
    'Gerente de operaciones de ALDESEG, ha adquirido un profundo conocimiento del mercado asegurador a través de su experiencia en diversas aseguradoras. Junto a su hermana Rocío, fundó ALDESEG con el sueño de brindar un servicio excepcional a la gente, comprometida a ofrecer asesoría y soluciones de seguros de alta calidad.',
    numberUrl: aboutUs36Number, 
    list1: 'Gestión eficiente: 15 años en el análisis de riesgos y seguros', 
    list2: 'Líder en cumplimiento: 10+ años en aseguradoras y brokers.',
    list3: '15 años en el desarrollo de estrategias de cobertura en seguros.',
    list4: '10+ años protegiendo activos en aseguradoras y brokers.',
    list5: 'Gestión de reclamos: décadas de experiencia en aseguradoras.',
  },
  {
    id: 3, imgUrl: aboutUsAndrea, name: "Andrea Castillo", 
    phrase: 
    'Como abogada y Gerente Comercial de ALDESEG, aporta una visión innovadora y un enfoque centrado en el cliente. Su liderazgo se refleja en la creación de estrategias comerciales efectivas y en la implementación de soluciones personalizadas, garantizando tanto la satisfacción como la lealtad de los clientes.',
    numberUrl: aboutUs36Number,
    list1: 'Gestión eficiente: 15 años en el análisis de riesgos y seguros', 
    list2: 'Líder en cumplimiento: 10+ años en aseguradoras y brokers.',
    list3: '15 años en el desarrollo de estrategias de cobertura en seguros.',
    list4: '10+ años protegiendo activos en aseguradoras y brokers.',
    list5: 'Gestión de reclamos: décadas de experiencia en aseguradoras.',
  },
];

const phoneNumber = '593983879340';

const insuranceCardsData = [
  {
    id: 1, name: 'Seguro 1', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”', imgUrl: general_1, link: '/seguro-vida'
  },
  {
    id: 2, name: 'Seguro 2', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”', imgUrl: general_2, link: '/'
  },
  {
    id: 3, name: 'Seguro 3', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”', imgUrl: general_3, link: '/'
  },
  {
    id: 4, name: 'Seguro 4', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”', imgUrl: general_4, link: '/'
  },
  {
    id: 5, name: 'Seguro 5', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”', imgUrl: general_5, link: '/'
  },
  {
    id: 6, name: 'Seguro 6', description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”', imgUrl: general_1, link: '/'
  }
];
export {
 
  generalData, generalCardsData, 
  homeSlides, homeCircleIcons, homeArticleComponent, homeAliancesComponent, homeBigTitle, homePrincipalFactsComponent, 
  footerAliances, footerInformation, footerSocialMedia, footerSocialTiktok,
  aboutUsSlide, aboutUsBigTitle, aboutUsWhoComponent, aboutUsMisionVision,
  phoneNumber, insuranceCardsData

};

