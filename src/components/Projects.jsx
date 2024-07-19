import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

function Projects() {
  const Projects = [
    {
      Image: "images/project1.jpg",
      desc:"Residential Twin House At Kanombe."
    },
    {
      Image: "images/project2.jpg",
      desc:"Residential Twin House At Kanombe."
    },
    {
      Image: "images/project3.jpg",
      desc:"Hope Haven Christian School Secondary."
    },
    {
      Image: "images/project4.jpg",
      desc:"New Life Christian Academy."
    },
    {
      Image: "images/project5.jpg",
      desc:"New Life Christian Academy."
    },
    {
      Image: "images/project6.jpg",
      desc:"Potter's Hand Church."
    },
    {
      Image: "images/project7.jpg",
      desc:"Hope Haven Christian School Primary."
    },
  ];

  return (
    <div className="mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
        }}
      >
        {Projects.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-4 justify-evenly flex-wrap">
              <img
                src={item.Image}
                alt=""
                width={200}
                height={10}
                className="sm:w-1/2 lg:w-[30vw] lg:h-[50vh] rounded-2xl"
              />
              <p className="font-lato text-xl text-gray-600 shadow-2xl font-semibold">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
