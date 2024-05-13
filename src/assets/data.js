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
    id: 1, name: 'Seguro 1', description: 'Descripción del seguro 1', imgUrl: general_1
  },
  {
    id: 2, name: 'Seguro 2', description: 'Descripción del seguro 2', imgUrl: general_2
  },
  {
    id: 3, name: 'Seguro 3', description: 'Descripción del seguro 3', imgUrl: general_3
  },
  {
    id: 4, name: 'Seguro 4', description: 'Descripción del seguro 4', imgUrl: general_4
  },
  {
    id: 5, name: 'Seguro 5', description: 'Descripción del seguro 5', imgUrl: general_5
  },
  {
    id: 6, name: 'Seguro 6', description: 'Descripción del seguro 6', imgUrl: general_1
  }
];
const homeSlides = [
  {
    id: 1, imgUrl: homeSlide_1, title: 'Asesores y Productores de Seguros', subtitle: 'Estamos comprometidos contigo, en cada etapa de tu vida.'
  },
  {
    id: 2, imgUrl: homeSlide_2, title: 'ALDESEG es una empresa ', subtitle: 'Con una trayectoria de más de 15 años y una amplia cartera de clientes.'
  },
  {
    id: 3, imgUrl: homeSlide_3, title: 'Amplia gama de servicios', subtitle: 'Satisfacemos las necesidades de protección y seguridad de nuestros clientes.'
  },
  {
    id: 4, imgUrl: homeSlide_4, title: 'Servicio de Asistencia Legal', subtitle: 'Apoyo y protección en la resolución de conflictos relacionados con pólizas de seguros.'
  },
  {
    id: 5, imgUrl: homeSlide_5, title: 'Servicio de Finanzas', subtitle: 'Soluciones para garantizar el cumplimiento de obligaciones contractuales y legales.'
  }
];

const homeCircleIcons = [
  {
    id: 1, imgUrl: prueba, word1:'Protección y', word2:'Seguridad'
  },
  {
    id: 2, imgUrl: prueba, word1:'Protección y', word2:'Seguridad'
  },
  {
    id: 3, imgUrl: prueba, word1:'Protección y', word2:'Seguridad'
  },
  {
    id: 4, imgUrl: prueba, word1:'Protección y', word2:'Seguridad'
  },
 
];


export { generalData, generalCardsData, homeSlides, homeCircleIcons };
