import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const SwiperComponent = ({ data }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width: 599px)');
    const isMediumScreen = useMediaQuery('(min-width: 600px) and (max-width: 900px)');
    const isLargeScreen = useMediaQuery('(min-width: 850px)');
    const slidesPerView = isSmallScreen ? 1.5 : (isMediumScreen ? 2 : 4);
    return (
        <Swiper
            style={{
                width: '100%',
                height: '150px',
                paddingTop: '50px', // Proporción de altura para 3 slides

            }}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            autoplay={{ delay: 1000 }}
            loop={true}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {data.map((item) => (
                <SwiperSlide>
                    <img src={item.imgUrl} alt={item.urlImg} className='image-aliance-swiper' />
                </SwiperSlide>
                
            ))}

        </Swiper>
    );
};

export default SwiperComponent;
