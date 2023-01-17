import logo from "../../assets/svg/brandIcon";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

export default () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false
        }}
        modules={[Autoplay,]}
      >
        {logo.map(logoBrand => <SwiperSlide>{logoBrand}</SwiperSlide>)}

      </Swiper>
    </>
  );
}
// import { Virtual } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/virtual';

// export default () => {

//   return (
//     <Swiper modules={[Virtual]} spaceBetween={10} slidesPerView={6} loop={true} virtual>
//       {logo.map((slideContent, index) => (
//         <SwiperSlide key={`logo${index}`} virtualIndex={index}>
//           {slideContent}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
