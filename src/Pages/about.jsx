import LandingPageBar from "../components/LandingPageBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Bar from "../components/bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const team = [
    {
      name: "Ndahiro Evode",
      role: "CEO",
      number:"0788348991",
      image: "/images/Ndahiro.jpeg",
    },
    {
      name: "SINDAYIGAYA Moise",
      role: "Chair Person",
      number:"0781709025",
      image: "/images/PM.jpg",
    },

    {
      name: "Ndahiro Evode",
      role: "CEO",
      number:"0788348991",
      image: "/images/Ndahiro.jpeg",
    },
    {
      name: "SINDAYIGAYA Moise",
      role: "Chair Person",
      number:"0781709025",
      image: "/images/PM.jpg",
    },
  ];




  return (
    <div className="dark:text-white overflow-x-hidden">
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[20rem] bg-cover bg-center bg-no-repeat dark:text-black">
      <div className="sm:hidden lg:block">
          <Bar />
        </div>
        <div className="flex items-center justify-end lg:h-full px-6 pb-16 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-xl md:text-3xl sm:pt-24 lg:pb-36 lg:text-5xl">
            About Our Story
          </h1>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse md:flex-row p-6 md:p-12">
        <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0 pt-16 sm:w-full">
          <motion.h1
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-bold lg:text-3xl sm:text-xl mb-4"
          >
            Who We Are
          </motion.h1>
          <motion.p
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="mb-8 lg:text-lg sm:text-md font-lato lg:w-[40vw] sm:w-full"
          >
            Welcome to Adonai Project Solutions (APS) Ltd, a premier
            multidisciplinary engineering firm based in Rwanda since 2011. We
            deliver excellence in architectural design, consultancy,
            construction, property management, surveying, and a wide range of
            services including real estate, water treatment, plumbing, HVAC
            installation, waste management, and infrastructure projects. Trust
            APS Ltd for comprehensive and high-quality engineering and
            construction solutions.
          </motion.p>
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-bold lg:text-3xl sm:text-xl mb-4"
          >
            Our Mission
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-8 lg:text-lg sm:text-md font-lato lg:w-[40vw] sm:w-full"
          >
            To provide comprehensive and innovative engineering solutions that
            meet the highest standards of quality and sustainability,
            contributing to the development and betterment of communities.
          </motion.p>
          <motion.h1
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-bold lg:text-3xl sm:text-xl mb-4 "
          >
            Our Vision
          </motion.h1>
          <motion.p
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:text-lg sm:text-md font-lato lg:w-[40vw] sm:w-full"
          >
            To be the leading engineering solutions provider in Rwanda and
            beyond, known for our commitment to quality, innovation, and
            sustainable practices.
          </motion.p>
        </div>
        <div className="md:w-1/2">
          <img
            src="images/image.png"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
      <div>
        <h1 className="flex justify-center font-bold lg:text-3xl sm:text-2xl">
          Meet Our Team
        </h1>
      </div>
      <div className="relative group flex justify-center" id="team">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            dynamicMainBullets: true,
            clickable: true,
          }}
          autoplay={{ delay: 7000, disableOnInteraction: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {team.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="py-8 flex flex-col space-y-4 items-center w-[90%] mx-auto my-8 dark:text-black rounded-xl justify-center"
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
                  <div className="text-md md:text-lg text-gray-500">
                    <span className="font-medium">Tel: </span>{item.number}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}
