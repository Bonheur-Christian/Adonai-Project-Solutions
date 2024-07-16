import LandingPageBar from "../components/LandingPageBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

export default function About() {
  const team = [
    {
      name: "Rukundo David",
      role: "Co-Founder& CEO",
      image: "/images/David.png",
    },
    {
      name: "Uwineza Linda",
      role: "Co-Founder& COO",
      image: "/images/Linda.png",
    },
    { name: "Keza Ange", role: "Product Designer", image: "/images/Ange.png" },
    {
      name: "Bahati Paul",
      role: "Product Designer",
      image: "/images/Bahati.png",
    },
    {
      name: "Rukundo David",
      role: "Co-Founder& CEO",
      image: "/images/David.png",
    },
    {
      name: "Uwineza Linda",
      role: "Co-Founder& COO",
      image: "/images/Linda.png",
    },
    { name: "Keza Ange", role: "Product Designer", image: "/images/Ange.png" },
    {
      name: "Bahati Paul",
      role: "Product Designer",
      image: "/images/Bahati.png",
    },
  ];
  const length = team.length;

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div>
      <LandingPageBar />
      <div className="bg-[url('svg/Intro.svg')] h-[10rem] md:h-[20rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <div className="flex items-center justify-end h-full px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-xl md:text-3xl lg:text-5xl">
            About Our Story
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-6 md:p-12">
        <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0">
          <h1 className="font-bold text-2xl mb-4">Who are we</h1>
          <p className="mb-8">
            Welcome to Adonai Project Solutions (APS) Ltd, a premier
            multidisciplinary engineering firm based in Rwanda since 2011. We
            deliver excellence in architectural design, consultancy,
            construction, property management, surveying, and a wide range of
            services including real estate, water treatment, plumbing, HVAC
            installation, waste management, and infrastructure projects. Trust
            APS Ltd for comprehensive and high-quality engineering and
            construction solutions.
          </p>
          <h1 className="font-bold text-2xl mb-4">Our Mission</h1>
          <p className="mb-8">
            To provide comprehensive and innovative engineering solutions that
            meet the highest standards of quality and sustainability,
            contributing to the development and betterment of communities.
          </p>
          <h1 className="font-bold text-2xl mb-4">Our Vision</h1>
          <p>
            To be the leading engineering solutions provider in Rwanda and
            beyond, known for our commitment to quality, innovation, and
            sustainable practices.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src="images/image.png"
            alt="aboutUs"
            className="rounded-lg shadow-lg max-w-full h-auto"
            style={{ position: "relative" }} // Ensure the image is positioned relatively for proper z-index handling
          />
          <button className="absolute bottom-4 right-4 text-white  bg-blue-600 px-4 py-2 rounded-xl rounded-tr-none">
            Let&apos;s talk
          </button>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center font-bold text-2xl">
          Meet Our Team
        </h1>
      </div>
      <div className="relative group">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          pagination={{
            dynamicMainBullets: true,
            clickable: true,
          }}
          navigation={{ prevEl: `#prev-btn`, nextEl: `#next-btn` }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {team.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="py-8 flex flex-col md:flex-row items-center w-[90%] mx-auto my-8 dark:text-black rounded-xl"
              >
                <div className="mb-4 md:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full"
                  />
                </div>
                <div className="text-center md:text-left md:ml-8">
                  <div className="text-lg md:text-xl font-bold">
                    {item.name}
                  </div>
                  <div className="text-md md:text-lg text-gray-500">
                    {item.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-[45%] z-10 w-full group-hover:flex justify-between px-6 hidden">
          <div
            className="bg-slate-200 rounded-full p-2"
            onClick={previous}
            id="prev-btn"
          >
            <svg
              className="w-5 h-5"
              fill="#000000"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M160,220a11.96287,11.96287,0,0,1-8.48535-3.51465l-80-80a12.00062,12.00062,0,0,1,0-16.9707l80-80a12.0001,12.0001,0,0,1,16.9707,16.9707L96.9707,128l71.51465,71.51465A12,12,0,0,1,160,220Z" />
            </svg>
          </div>
          <div
            className="bg-slate-200 rounded-full p-2"
            onClick={next}
            id="next-btn"
          >
            <svg
              className="w-5 h-5"
              fill="#000000"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
