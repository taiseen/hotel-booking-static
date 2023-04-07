import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderData } from '../constants/data';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';


const HeroSlider = () => {

  return (
    <Swiper className='heroSlider h-[600px] lg:h-[860px] bg-black'>
      {
        sliderData.map(({ id, title, bg, btnNext }) =>
          <SwiperSlide className='h-full'>
            <div>
              <div>Just Enjoy & Relax</div>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={bg} alt="logo" />
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>
  )
};

export default HeroSlider;
