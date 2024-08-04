import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import LandingPageBar from "../components/LandingPageBar";
import { useEffect, useState } from "react";
import Bar from "../components/bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { API_url } from "../constants";
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
    const fetchCompletedProjects = async () => {
      try {
        const response = await fetch(`${API_url}/completedProjects`);
        if (!response.ok) {
          toast.error("Error Occurred");
        } else {
          const data = await response.json();
          const formattedData = data.map((project) => {
            const isoDate = project.date;
            const date = new Date(isoDate);
            const year = date.getUTCFullYear();
            const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
            const day = ("0" + date.getUTCDate()).slice(-2);
            const formattedDate = `${year}-${month}-${day}`;
            return { ...project, formattedDate };
          });
          setCompletedProjects(formattedData);
        }
      } catch (error) {
        toast.error("Error Occurred");
      }
    };
    fetchCompletedProjects();
  }, []);

  const News = [
    {
      image: "images/project3.jpg",
      date: "MARCH 8, 2023",
      title: "Hope Haven Christian Secondary Academy",
      description:
        "The APS team successfully completed the Hope Haven Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project7.jpg",
      date: "September 27, 2021",
      title: "Hope Haven Christian Primary School",
      description:
        "The APS team successfully completed the Primary Hope Haven Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project4.jpg",
      date: "June 4, 2022",
      title: "New Life Christian Academy",
      description:
        "The APS team successfully completed the New Life Christian Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project5.jpg",
      date: "November 8, 2020",
      title: "New Life Christian Academy",
      description:
        "The APS team successfully completed the New Life Christian Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project6.jpg",
      date: "January 1, 2020",
      title: "Potter's Hand church Project",
      description:
        "The APS team successfully completed the Potter's Hand church construction project, delivering a modern buildings  equipped with advanced roofing, design and aesthetic. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for People's comfort and personal growth.",
    },
    {
      image: "images/project1.jpg",
      date: "December 8, 2019",
      title: "Residential Twin House Project ",
      description:
        "The APS team successfully completed the Residential Twin House Project, delivering a modern residential facility equipped with advanced rooms, roofing and gardens,  a large space for parking. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for person comfort.",
    },
  ];
  return (
    <div className="dark:text-white overflow-x-hidden">
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <Bar />
        <div className="flex items-center justify-end px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-2xl md:text-3xl lg:pt-12 lg:text-5xl">
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
            className="flex lg:flex-row sm:flex-col lg:gap-32 sm:gap-12 lg:p-6 sm:py-6 items-center w-1/2 lg:justify-center lg:items-center"
          >
            <div className="lg:space-y-12 sm:space-y-6">
              <h1 className="text-xl font-lato lg:text-start sm:text-center ">
                <span className="font-lato font-semibold">
                  Date Of Completion:
                </span>
                {item.formattedDate}
              </h1>
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
      <Footer />
    </div>
  );
}

export default News;
