// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper";

import logo from "../../assets/svg/brandIcon";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderLogo = () => {
  return (
    <div className="slider-logo-bord">
      <Swiper
        className="swiper-logo"
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {logo.map((logoBrand, index) => (
          <SwiperSlide className="swiper-logo__slide" key={`logo${index}`}>{logoBrand}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderLogo;
