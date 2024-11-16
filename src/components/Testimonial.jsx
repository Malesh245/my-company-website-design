import React from "react";

import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial({ data }) {
  return (
    <section className="container mx-auto sm:mx-auto bg-black">
      <Fade direction="up" triggerOnce>
        <h1 className="text-5xl text-white text-center font-bold">
          Testimonials
        </h1>
      </Fade>
      <Fade direction="up" delay={500} triggerOnce>
        <p className=" text-lg text-white text-center mb-3 sm:mb-3 xl:mb-4">
          What they said about us.
        </p>
      </Fade>
      {/* eslint-disable-next-line react/jsx-max-props-per-line */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex-col h-96 w-80 rounded-2xl shadow-xl sm:shadow-2xl border px-8 py-6 mx-2 mb-6 mt-6 xl:mx-auto sm:mx-6 sm:mb-12 bg-[#7f66aa]">
              <div className="flex items-center mb-5">
                <img
                  src={item.imageUrl}
                  alt="Testimoni"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-col pl-5">
                  <h2 className="text-white font-bold text-2xl">{item.name}</h2>
                  <p className=" text-white font-semi-bold">{item.company}</p>
                </div>
              </div>
              <p className="font-normal text-2xl text-white  pl-5 pt-3 pb-1">
                {item.testimoni}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default Testimonial;
