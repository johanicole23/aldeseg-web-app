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
import homeCircleContact from './images/home/circleIcons/directContact.png';
import homeCircleProtection from './images/home/circleIcons/protection.png';
import homeCircleLegal from './images/home/circleIcons/legal.png';
import homeArticleFamilyDoctor from './images/home/article1/familyDoctor.jpg';
import aboutUsVission from './images/aboutUs/vission.png';
import aboutUsBackgroundVission from './images/aboutUs/backgroundVission.png';
import aboutUsBackgroundOneSlide from './images/aboutUs/backgroundOneSlide.jpg';
import aboutUsRocio from "./images/aboutUs/people/RocioDLaTorre.png";
import aboutUsAndrea from "./images/aboutUs/people/AndreaCastillo.png";
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

const homeCircleIcons = [
  {
    id: 1, imgUrl: homeCircleContact, word1: 'Contacto', word2: 'Directo'
  },
  {
    id: 2, imgUrl: homeCircleCellphone, word1: 'Asistencia', word2: 'Telefónica'
  },
  {
    id: 3, imgUrl: homeCircleProtection, word1: 'Protección', word2: 'Garantizada'
  },
  {
    id: 4, imgUrl: homeCircleLegal, word1: 'Asistencia', word2: 'Legal'
  },


];

const homeArticleComponent =
{
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
  title: 'Asesores y Productores de Seguros',
  subtitle: 'Somos un puente sólido y confiable entre nuestros clientes y las mejores compañías de seguros del mercado, ofrecemos soluciones personalizadas que se adaptan a tus necesidades. ',

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
    id: 1, imgUrl: aboutUsRocio, name: "Rocío D' LaTorre", phrase: '"Nuestra prioridad es brindar una cobertura que no solo cumpla con las expectativas de nuestros clientes, sino que las supere, proporcionando servicios excepcionales."',
    numberUrl: aboutUs36Number,
    list1: 'Gestión eficiente: 15 años en el análisis de riesgos y seguros', 
    list2: 'Líder en cumplimiento: 10+ años en aseguradoras y brokers.',
    list3: '15 años en el desarrollo de estrategias de cobertura en seguros.',
    list4: '10+ años protegiendo activos en aseguradoras y brokers.',
    list5: 'Gestión de reclamos: décadas de experiencia en aseguradoras.',

  },
  {
    id: 2, imgUrl: aboutUsAndrea, name: "Andrea Castillo", phrase: '"Nuestra prioridad es brindar una cobertura que no solo cumpla con las expectativas de nuestros clientes, sino que las supere, proporcionando servicios excepcionales."',
    numberUrl: aboutUs36Number,
    list1: 'Gestión eficiente: 15 años en el análisis de riesgos y seguros', 
    list2: 'Líder en cumplimiento: 10+ años en aseguradoras y brokers.',
    list3: '15 años en el desarrollo de estrategias de cobertura en seguros.',
    list4: '10+ años protegiendo activos en aseguradoras y brokers.',
    list5: 'Gestión de reclamos: décadas de experiencia en aseguradoras.',
  },
  {
    id: 3, imgUrl: aboutUsRocio, name: "Miriam D' LaTorre", phrase: '"Nuestra prioridad es brindar una cobertura que no solo cumpla con las expectativas de nuestros clientes, sino que las supere, proporcionando servicios excepcionales."',
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
  generalData, generalCardsData, homeSlides, homeCircleIcons, homeArticleComponent, homeAliancesComponent,
  footerAliances, aboutUsMisionVision, aboutUsSlide, aboutUsWhoComponent, phoneNumber, insuranceCardsData
};

