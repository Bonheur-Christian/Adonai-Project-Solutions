import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/projectContext";
import client from "../sanityClient";
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Projects() {
  const { projects, setProjects } = useContext(ProjectContext);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    client
      .fetch(
        `*[_type == "project"]{
    _id, 
    name, 
    image{
    asset->{
    _id, 
    url
    }
    }
    }`
      )
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="w-[80%] flex justify-evenly mx-auto" id="projects">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-4 justify-evenly flex-wrap">
              <img
                src={item.image.asset.url}
                alt="Project"
                width={200}
                height={10}
                className="sm:w-[90vw] lg:w-[25vw] lg:h-[40vh] sm:[90vh] lg:rounded-xl sm:rounded-md "
              />
              <p className="font-lato text-xl text-center text-gray-600 font-semibold">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
