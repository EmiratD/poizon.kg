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
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {logo.map((logoBrand) => (
          <SwiperSlide>{logoBrand}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderLogo;
