import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import Bar from "../components/bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Dropdown from "../components/DropDown";
import { API_url } from "../constants";

function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesList, setServicesList] = useState([]);
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
      svg: "images/engineering.jpg",
      title: "CIVIL Engineering",
      description:
        "Civil engineering projects present unique challenges, but APS has the practical knowledge and experience necessary to anticipate problems and quickly propose sound solutions.",
    },
    {
      svg: "images/property.jpg",
      title: "Property Management",
      description:
        "APS Ltd offers comprehensive property management solutions, ensuring that properties are well-maintained, efficiently operated, and profitable. Our services include tenant management, maintenance, and financial reporting.",
    },
    {
      svg: "images/land.jpg",
      title: "Land And Quantity Surveying",
      description:
        "Our land and quantity surveying services are critical for successful project execution. We provide accurate land assessments, mapping, and cost estimation to ensure projects are completed on time and within budget.",
    },
    {
      svg: "images/realestate.jpg",
      title: "REAL ESTATE",
      description:
        "In the realm of real estate, APS Ltd offers a range of services including property development, sales, and marketing. We help clients navigate the complex real estate market to achieve their investment goals.",
    },
    {
      svg: "images/waste.jpg  ",
      title: "Waste Management",
      description:
        "APS Ltd is dedicated to promoting environmental sustainability through our waste management services. We provide innovative solutions for waste collection, recycling, and disposal, ensuring minimal environmental impact.",
    },
    {
      svg: "images/roads.jpg",
      title: "Roads and Bridge Construction",
      description:
        " Our expertise in roads and bridges construction enables us to build infrastructure that supports economic growth and connectivity. We employ advanced techniques and materials to construct durable and safe transportation networks.",
    },
    {
      svg: "images/plumbing.jpg",
      title: "Plumbing, Heating, and Air Conditioning Installation",
      description:
        "Our plumbing, heating, and air conditioning installation services are designed to enhance comfort and efficiency in residential, commercial, and industrial settings. We utilize the latest technologies and best practices to deliver optimal results.",
    },
    {
      svg: "images/renovation.jpg",
      title: "Property Improvement And Renovation",
      description:
        "APS Ltd provides complete property renovation services. Our skilled team handles everything from design to construction, ensuring high-quality results and excellent customer service for all renovation projects.",
    },
  ];
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_url}/allServices`);
        if (!response.ok) {
          toast.error("Error Occured");
        } else {
          const data = await response.json();
          setServicesList(data);
          console.log(servicesList);
        }
      } catch (err) {
        toast.error("Error Occured");
      }
    };
    fetchServices();
  }, []);
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);
  return (
    <div overflow-x-hidden>
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <Bar />
        <div className="flex items-center justify-end px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-2xl md:text-3xl lg:text-5xl">
            Services ....
          </h1>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse md:justify-between md:flex-row">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 sm:w-full md:pr-6 mb-8 md:mb-0 lg:pt-40 sm:pt-16 sm:space-y-12 lg:space-y-6  lg:pl-32 sm:pl-6"
        >
          <h1 className="font-semibold text-[#B4A9A9] tracking-widest text-2xl mb-4 sm:text-center lg:text-start">
            VERSATILE. PROACTIVE.EXPERIENCED.
          </h1>
          <h1 className="font-bold text-4xl mb-4 lg:w-1/2 sm:w-full tracking-wider lg:text-start sm:text-center">
            Aps Services
          </h1>
          <p className="mb-6 text-xl font-lato lg:w-[40vw] sm:w-full sm:pe-2 lg:px-0">
            Our team understands the importance of shared knowledge and believes
            that all things must work together to create a cohesive and
            functional finished product.
          </p>
          <p className="mb-8 text-xl font-lato lg:w-[40vw] sm:w-full">
            Explore Aps capabilities below to learn more about what our team can
            offer in each sector.
          </p>
        </motion.div>
        <div className="sm:hidden lg:block">
          <img
            src="svg/services.svg"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto sm:p-6"
          />
        </div>
      </div>
      <Dropdown title={"All Services"} content={servicesList} />
      <div className="flex flex-wrap  justify-evenly py-24">
        {visibleServices.map((item, index) => (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="lg:w-[40vw] sm:w-full sm:px-6"
          >
            <img
              src={item.svg}
              alt="property showcasing"
              className="w-32 h-32 rounded-full object-cover hover:shadow-gray-400 shadow-md"
            />
            <h1 className="text-2xl pb-6 text-[#1971F4]">{item.title}</h1>
            <p className="font-lato text-lg lg:w-[30vw] sm:w-full pb-6">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
      {showAll ? (
        <div className="flex justify-end lg:me-[15rem] sm:mx-6 sm:m-6 lg:m-0">
          <button
            onClick={() => setShowAll(false)}
            className="text-xl rounded-md flex items-center gap-4"
          >
            see less
            <FaChevronUp color="gray" />
          </button>
        </div>
      ) : (
        <div className="flex justify-end me-[15rem]">
          <button
            onClick={() => setShowAll(true)}
            className="text-xl rounded-md flex items-center gap-4"
          >
            see more
            <FaChevronDown color="gray" size={15} />
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
