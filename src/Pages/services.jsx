import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";
import { FaChevronDown } from "react-icons/fa";
import Discuss from "../components/discussProject";

const Services = () => {
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
  const services = [
    {
      image: "/images/civil.png",
      Name: "Civil engineering",
      description:
        "Civil engineering projects present unique challenges, but APS has the practical knowledge and experience necessary to anticipate problems and quickly propose sound solutions.",
    },
    {
      image: "/images/property.png",
      Name: "Property Management",
      description:
        "APS Ltd offers comprehensive property management solutions, ensuring that properties are well-maintained, efficiently operated, and profitable. Our services include tenant management, maintenance, and financial reporting.",
    },
    {
      image: "/images/landAndQuality.png",
      Name: "Land and quality surveying",
      description:
        "Our land and quantity surveying services are critical for successful project execution. We provide accurate land assessments, mapping, and cost estimation to ensure projects are completed on time and within budget.",
    },
    {
      image: "/images/realEstate.png",
      Name: "Real Estate",
      description:
        "In the realm of real estate, APS Ltd offers a range of services including property development, sales, and marketing. We help clients navigate the complex real estate market to achieve their investment goals.",
    },
  ];
  return (
    <div>
      {/* {scrolled && <LandingPageBar />} */}
      <LandingPageBar />
      <div className="bg-[url('svg/Intro.svg')] bg-white dark:bg-black h-screen lg:h-[20rem] bg-cover bg-center bg-no-repeat">
        <div className=" flex flex-col space-y-10 lg:flex-row items-center justify-center lg:justify-end h-full px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-xl md:text-3xl lg:text-5xl">
            SERVICES....
          </h1>
          <button className="bottom-4 right-4 text-white visible lg:hidden  bg-blue-600 px-4 py-2 rounded-xl rounded-tr-none">
            Let&apos;s talk
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="container mx-auto p-0 lg:p-12">
          <div className="items-center text-center  p-0">
            <h1 className="text-[#B4A9A9] items-center justify-center flex">
              VERSATILE. PROACTIVE.EXPERIENCED.
            </h1>
            <div className="flex justify-center lg:justify-center">
              <h2 className="text-center text-black dark:text-white text-3xl font-semibold mb-12">
                APS Services
              </h2>
            </div>
            <div className="text-center flex justify-center w-1/2 lg:w-auto">
              <p className=" text-black dark:text-white mb-12">
                Our team understands the importance of shared knowledge and
                believes that all things must work together to create a cohesive
                and functional finished product. Explore APS capabilities below
                to learn more about what our team can offer in each sector.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col text-black dark:text-white items-center text-center p-0 md:p-6 rounded-lg"
              >
                <img src={service.image} alt={service.Name} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.Name}</h3>
                <p className="text-gray-700 dark:text-white mb-4">
                  {service.description}
                </p>
                <button className="px-6 py-2 border text-[#717172] hover:text-white hover:bg-blue-600 border-[#717172] hover:border-none rounded-full rounded-tr-none transition duration-500 ease-in-out">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:w-1/2 lg:max-h-[619px] lg:relative">
          <img
            src="images/sideImage.png"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto max-h-[519px]"
          />
        </div>

        <button className="absolute bottom-4 hidden lg:flex right-4 text-white  bg-blue-600 px-4 py-2 rounded-xl rounded-tr-none">
          Let&apos;s talk
        </button>
      </div>
      <div className="cursor-pointer text-black dark:text-white my-5 mb-24">
        <h1 className="flex justify-center items-center gap-3">
          See more{" "}
          <span>
            <FaChevronDown />
          </span>
        </h1>
      </div>
      <Discuss />
      <Footer />
    </div>
  );
};

export default Services;
