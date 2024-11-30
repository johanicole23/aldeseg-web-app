import { Swiper, SwiperSlide } from 'swiper/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';

import homeBackgroundBlue from '../assets/images/backgroundBlue.png'
import homeBackgroundGray from '../assets/images/backgroundGray.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Fade } from 'react-awesome-reveal';



const SwiperComponent = ({ data }) => {
    const isSmallScreen = useMediaQuery('(max-width: 599px)');
    const isMediumScreen = useMediaQuery('(min-width: 600px) and (max-width: 900px)');
    const slidesPerView = isSmallScreen ? 1.5 : (isMediumScreen ? 2 : 4);
    return (

        <Box sx={{
            backgroundImage: `url(${homeBackgroundBlue})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '300px',
            '@media screen and (max-width: 599px)': {
                margin: '3rem 0 ',

            },
        }}>
            <Swiper
                style={{
                    width: '100%',
                    height: '200px',
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
                        <Box sx={{ position: 'relative', }}>
                            <Box sx={{
                                position: 'absolute',
                                display: 'flex',
                                justifyContent: 'center',
                                bottom: '7%',
                                width: '100%',
                                height: '100%',
                                '@media screen and (max-width: 599px)': {
                                    bottom: '6%',
                                },
                            }}>
                                <img src={homeBackgroundGray} alt={homeBackgroundGray} className='image-background-aliance-swiper' />
                            </Box>

                            <Fade>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',

                                    }}
                                >
                                    <img src={item.imgUrl} alt={item.urlImg} className='image-aliance-swiper' />
                                </Box>
                            </Fade>
                        </Box>


                    </SwiperSlide>

                ))}



            </Swiper>
        </Box>


    );
};

export default SwiperComponent;
