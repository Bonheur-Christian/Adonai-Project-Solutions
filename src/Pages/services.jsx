import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";

const Services = () => {
  const [scrolled, setScrolled] = useState(false);

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
      Name: "Civil engineering.png",
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
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('svg/Intro.svg')] h-[10rem] md:h-[20rem] bg-cover bg-center bg-no-repeat">
        <div className="flex items-center justify-end h-full px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-xl md:text-3xl lg:text-5xl">
            SERVICES....
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="container mx-auto p-6 md:p-12">
          <h1 className="text-[#B4A9A9]">VERSATILE. PROACTIVE.EXPERIENCED.</h1>
          <h2 className="text-center text-3xl font-semibold mb-12">
            APS Services
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Our team understands the importance of shared knowledge and believes
            that all things must work together to create a cohesive and
            functional finished product. Explore APS capabilities below to learn
            more about what our team can offer in each sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg"
              >
                <img src={service.image} alt={service.Name} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.Name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button className="px-6 py-2 border text-[#717172] border-[#717172] rounded-full rounded-tr-none">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 max-h-[619px] flex justify-end relative">
          <img
            src="images/sideImage.png"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto max-h-[519px]"
            style={{ position: "relative" }}
          />
        </div>
        <button className="absolute bottom-4 right-4 text-white  bg-blue-600 px-4 py-2 rounded-xl rounded-tr-none">
          Let&apos;s talk
        </button>
      </div>
    </div>
  );
};

export default Services;
