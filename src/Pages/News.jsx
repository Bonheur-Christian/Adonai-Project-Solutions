import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import LandingPageBar from "../components/LandingPageBar";
import { useEffect, useState } from "react";
import Bar from "../components/bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { API_url } from "../constants";
import client from "../sanityClient";
import { toast, ToastContainer } from "react-toastify";
function News() {
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

  const [completedProjects, setCompletedProjects] = useState([]);

  useEffect(() => {
    fetchCompletedProjects();
  }, []);
  const fetchCompletedProjects = () => {
    client
      .fetch(
        `*[_type=="news"]{
    _id,
    date,
    name,
    description,
    image{
    asset->{
    _id,
    url
    }
    }
    }`
      )
      .then((data) => {
        setCompletedProjects(data);
      })
      .catch((err) => {
        toast.error("Error in Getting News");
      });
  };

  return (
    <div className="dark:text-white overflow-x-hidden">
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <div className="sm:hidden lg:block">
          <Bar />
        </div>
        <div className="flex items-center justify-end px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-2xl md:text-3xl sm:pt-24 lg:pt-2 lg:text-5xl">
            Company News
          </h1>
        </div>
      </div>
      <div className="p-6 flex flex-wrap">
        {completedProjects.map((item, index) => (
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex lg:flex-row sm:flex-col lg:gap-32 sm:gap-12 lg:p-6 sm:py-6 items-center lg:w-1/2 sm:w-full lg:justify-center lg:items-center"
          >
            <div className="space-y-4">
              <img
                src={item.image.asset.url}
                alt={item.name}
                className="rounded-lg "
              />
              <h1 className="text-xl font-lato lg:text-start sm:text-center flex gap-4">
                <span className="font-lato font-semibold">
                  Date:
                </span>
                {item.date}
              </h1>
            </div>
            <div className="lg:space-y-12 sm:space-y-6">
              <h1 className="lg:text-3xl sm:text-2xl sm:text-center lg:text-start font-semibold text-[#1971F4]">
                {item.name}
              </h1>
              <p className="font-lato text-lg lg:font-medium  w-full">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full bg-blue-700 flex justify-center items-center gap-4 text-2xl text-white py-4">
        <p>Reach Out To Our Team. </p>
        <MdEmail />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default News;
