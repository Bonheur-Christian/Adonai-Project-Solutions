import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/projectContext";
import client from "../sanityClient";

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

  // console.log(projects);

  // const Projects = [
  //   {
  //     Image: "images/project1.jpg",
  //     desc: "Residential Twin House At Kanombe.",
  //   },
  //   {
  //     Image: "images/project2.jpg",
  //     desc: "Residential Twin House At Kanombe.",
  //   },
  //   {
  //     Image: "images/project3.jpg",
  //     desc: "Hope Haven Christian Secondary School.",
  //   },
  //   {
  //     Image: "images/project4.jpg",
  //     desc: "New Life Christian Academy.",
  //   },
  //   {
  //     Image: "images/project5.jpg",
  //     desc: "New Life Christian Academy.",
  //   },
  //   {
  //     Image: "images/project6.jpg",
  //     desc: "Potter's Hand Fellowship Hall.",
  //   },
  //   {
  //     Image: "images/project7.jpg",
  //     desc: "Hope Haven Christian Primary School.",
  //   },
  // ];
  return (
    <div className="mx-auto" id="projects">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 20, centeredSlides: false },
        }}
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-4 justify-evenly flex-wrap">
              <img
                src={item.image.asset.url}
                alt=""
                width={200}
                height={10}
                className="sm:w-[90vw] lg:w-[30vw] lg:h-[50vh] sm:[90vh] lg:rounded-xl sm:rounded-md"
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
