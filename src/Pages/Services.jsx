import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import Bar from "../components/bar";

function Services() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
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
      svg: "svg/civil.svg",
      title: "CIVIL Engineering",
      description:
        "Civil engineering projects present unique challenges, but APS has the practical knowledge and experience necessary to anticipate problems and quickly propose sound solutions.",
    },
    {
      svg: "svg/property.svg",
      title: "Property Management",
      description:
        "APS Ltd offers comprehensive property management solutions, ensuring that properties are well-maintained, efficiently operated, and profitable. Our services include tenant management, maintenance, and financial reporting.",
    },
    {
      svg: "svg/land.svg",
      title: "Land And Quantity Surveying",
      description:
        "Our land and quantity surveying services are critical for successful project execution. We provide accurate land assessments, mapping, and cost estimation to ensure projects are completed on time and within budget.",
    },
    {
      svg: "svg/real.svg",
      title: "REAL ESTATE",
      description:
        "In the realm of real estate, APS Ltd offers a range of services including property development, sales, and marketing. We help clients navigate the complex real estate market to achieve their investment goals.",
    },
    {
      svg: "svg/waste.svg",
      title: "Waste Management",
      description:
        "APS Ltd is dedicated to promoting environmental sustainability through our waste management services. We provide innovative solutions for waste collection, recycling, and disposal, ensuring minimal environmental impact.",
    },
    {
      svg: "svg/land.svg",
      title: "Roads and Bridge Construction",
      description:
        " Our expertise in roads and bridges construction enables us to build infrastructure that supports economic growth and connectivity. We employ advanced techniques and materials to construct durable and safe transportation networks.",
    },
    {
      svg: "svg/property.svg",
      title: "Plumbing, Heating, and Air Conditioning Installation",
      description:
        "Our plumbing, heating, and air conditioning installation services are designed to enhance comfort and efficiency in residential, commercial, and industrial settings. We utilize the latest technologies and best practices to deliver optimal results.",
    },
    {
      svg: "svg/real.svg",
      title: "REAL ESTATE",
      description:
        "In the realm of real estate, APS Ltd offers a range of services including property development, sales, and marketing. We help clients navigate the complex real estate market to achieve their investment goals.",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);
  return (
    <div>
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <Bar />
        <div className="flex items-center justify-end px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-xl md:text-3xl lg:text-5xl">
            Services ....
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:justify-between md:flex-row">
        <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0 pt-40 pl-32">
          <h1 className="font-semibold text-[#B4A9A9] tracking-widest text-2xl mb-4">
            VERSATILE. PROACTIVE.EXPERIENCED.
          </h1>
          <h1 className="font-bold text-4xl mb-4 w-1/2 tracking-wider">
            Aps Services
          </h1>
          <p className="mb-6 text-xl font-lato w-[40vw]">
            Our team understands the importance of shared knowledge and believes
            that all things must work together to create a cohesive and
            functional finished product.
          </p>
          <p className="mb-8 text-xl font-lato w-[40vw]">
            Explore Aps capabilities below to learn more about what our team can
            offer in each sector.
          </p>
        </div>
        <div className="">
          <img
            src="svg/services.svg"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-wrap  justify-evenly">
        {visibleServices.map((item, index) => (
          <div key={index} className="w-[40vw]">
            <img
              src={item.svg}
              alt="property showcasing"
              className="py-4"
              sizes="0"
            />
            <h1 className="text-2xl pb-6 text-[#1971F4]">{item.title}</h1>
            <p className="font-lato text-lg w-[30vw] pb-6">
              {item.description}
            </p>
            <button class="hover:text-white hover:bg-[#1971F4] duration-300 hover:border-none box-border flex flex-row justify-center items-center px-12 py-4 gap-4 w-45 h-14 bg-white border border-gray-700 rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-2xl order-3 flex-grow-0">
              Learn More
            </button>
          </div>
        ))}
      </div>
      {showAll ? (
        <div className="flex justify-end me-[15rem]">
          <button
            onClick={() => setShowAll(false)}
            className="px-6 py-2 bg-[#1971F4] text-white rounded-md"
          >
            See Less
          </button>
        </div>
      ) : (
        <div className="flex justify-end me-[15rem]">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-[#1971F4] text-white rounded-md"
          >
            See More
          </button>
        </div>
      )}
      <div>
        <h2 className="font-lato text-xl text-center">
          Want To Discuss Project?
        </h2>
        <div className="flex justify-center">
          <img src="svg/downArrow.svg" alt="" className="w-auto h-auto" />
        </div>
        <div className="w-full bg-blue-700 flex justify-center items-center gap-4 text-2xl text-white py-4">
          <p>Reach Out To Our Team. </p>
          <MdEmail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
