// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";

import AboutUsBord from "../aboutUsBord/AboutUsBord";
import SpecialOrderlBord from "../specialOrderlBord/SpecialOrderlBord";
import SignInAndLogIn from "../signInAndLogIn/SignInAndLogIn";

import "swiper/scss/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SliderInfoBord = () => {
  return (
    <div className="bord">
      <Swiper
        className="swiper-infobord"
        slidesPerView={1}
        spaceBetween={500}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className="swiper-infobord__slide" key={"AboutUsBord"}>
          {AboutUsBord}
        </SwiperSlide>
        <SwiperSlide
          className="swiper-infobord__slide"
          key={"SpecialOrderlBord"}
        >
          {SpecialOrderlBord}
        </SwiperSlide>
      </Swiper>
      <SignInAndLogIn />
    </div>
  );
};

export default SliderInfoBord;
