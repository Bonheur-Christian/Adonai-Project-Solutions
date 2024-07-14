import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

function Projects() {
  const Projects = [
    {
      Image: "images/project1.png",
    },
    {
      Image: "images/project2.png",
    },
    {
      Image: "images/project3.png",
    },
    {
      Image: "images/project4.png",
    },
  ];

  return (
    <div className="mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: `#prev-btn`, nextEl: `#next-btn` }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
        }}
      >
        {Projects.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto flex justify-center">
              <img src={item.Image} alt="" width={400} height={100} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
