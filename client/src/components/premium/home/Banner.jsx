import React from "react";
import Section from "../../Section";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";

// import SwiperCore, { } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerImages } from "../../../utils/helpers";

export default function Banner() {
  //   SwiperCore.use([Autoplay]);
  return (
    <Section name={"banner !py-0"}>
      <div className="container">
        <Swiper
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Keyboard]}
          className="mySwiper w-full h-[400px] md:h-[85vh] rounded-md"
        >
          {bannerImages.map((image, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full relative">
                <img
                  src={image.image}
                  loading="eager"
                  className="w-full h-full object-left md:object-center object-cover bg-center"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
}
