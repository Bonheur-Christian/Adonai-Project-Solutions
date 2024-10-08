import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import ServiceSwiper from "../components/servicesSwiper";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Dropdown from "../components/DropDown";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import client from "../sanityClient";

const openingHours = {
  0: { open: null, close: null },
  1: { open: "07:00", close: "17:00" },
  2: { open: "07:00", close: "17:00" },
  3: { open: "07:00", close: "17:00" },
  4: { open: "07:00", close: "17:00" },
  5: { open: "07:00", close: "17:00" },
  6: { open: "07:00", close: "17:00" },
};

const isOpen = (currentDay, currentTime) => {
  const hours = openingHours[currentDay];
  if (!hours.open || !hours.close) return false;

  const [openHour, openMinute] = hours.open.split(":").map(Number);
  const [closeHour, closeMinute] = hours.close.split(":").map(Number);
  const now = new Date();
  const openTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    openHour,
    openMinute
  );
  const closeTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    closeHour,
    closeMinute
  );

  if (
    closeHour < openHour ||
    (closeHour === openHour && closeMinute < openMinute)
  ) {
    closeTime.setDate(closeTime.getDate() + 1); // Move closing time to the next day
  }

  return currentTime >= openTime && currentTime <= closeTime;
};

function Home() {
  const [status, setStatus] = useState("Closed");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentTime = now;
      if (isOpen(currentDay, currentTime)) {
        setStatus("Open");
      } else {
        setStatus("Closed");
      }
    };

    checkStatus();
    const intervalId = setInterval(checkStatus, 60000);

    return () => clearInterval(intervalId);
  }, []);

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

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    client
      .fetch(
        `*[_type=="project"]{
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
    <div>
      {projects ? (
        <div className="dark:text-white px-0 mx-0 overflow-x-hidden">
          <Intro />
          <p className="text-blue-800 font-lato pt-5 px-3 border-s-8 border-blue-700 font-extrabold text-3xl w-full text-start lg:hidden sm:block my-4">
            The Pathway To Greatness Is Service
          </p>
          <div className="lg:py-12 sm:py-0 space-y-6">
            <div className="flex justify-end items-end p-6 fixed lg:bottom-12 sm:bottom-0  z-50 ">
              <button
                className={` ${
                  scrolled ? "block duration-500" : "hidden"
                } lg:px-4 md:px-2 sm:px-2 md:py-4 sm:py-3 lg:py-4 rounded-full text-white font-medium flex items-center lg:gap-6 md:gap-4 sm:gap-2 ${
                  status === "Open" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                <HiOutlineOfficeBuilding size={20} />
                Office: {status}
              </button>
            </div>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="lg:text-4xl sm:text-xl font-semibold font-lato text-gray-600 text-center">
                About Us
              </h1>
              <p className="font-lato font-medium lg:text-xl sm:text-md lg:text-center sm:text-start lg:w-[80%] sm:w-full sm:px-6 lg:px-0 mx-auto py-6 text-gray-400">
                Welcome to Adonai Project Solutions (APS) Ltd, a premier
                multidisciplinary engineering firm based in Rwanda since 2011.
                We deliver excellence in architectural design, consultancy,
                construction, property management, surveying, and a wide range
                of services including real estate, water treatment, plumbing,
                HVAC installation, waste management, and infrastructure
                projects. Trust APS Ltd for comprehensive and high-quality
                engineering and construction solutions.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h2 className="lg:text-2xl sm:text-xl font-lato font-semibold text-center text-gray-600 tracking-wider lg:px-0 sm:px-6 sm:py-6 lg:py-0">
                APS ‘s Track Record speaks for Itself
              </h2>
              <h2 className="lg:text-2xl sm:text-xl font-lato font-semibold text-center tracking-wider text-gray-600">
                Services offered at Aps
              </h2>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <ServiceSwiper />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex sm:justify-start lg:justify-start">
              <Dropdown title={"Projects List"} content={projects} />
            </div>
            <div className="flex justify-center my-12">
              <a href="#projects">
                <img src="svg/button.svg" alt="" className="w-auto h-auto" />
              </a>
            </div>
            <Projects />
          </motion.div>
          <div className="flex lg:flex-row sm:flex-col-reverse lg:justify-between md:items-center md:justify-center  lg:h-screen lg:py-24 sm:py-6 lg:ps-12 sm:ps-2">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="lg:flex items-center sm:px-12 lg:px-0"
            >
              <img src="svg/mission1.svg" alt="" />
            </motion.div>
            <div className="lg:bg-[url('/images/mission.png')] lg:w-[50%] bg-no-repeat lg:h-full lg:mt-12 sm:mt-0">
              <div className="w-[100%] md:px-24 md:py-12 space-y-6 lg:pt-30 lg:ms-20 sm:py-6">
                <div>
                  <h1 className="font-lato font-bold lg:text-white sm:text-gray-900 lg:text-4xl md:text-3xl sm:text-xl text-center  sm:py-4">
                    Our Vision
                  </h1>
                  <p className="lg:w-[90%] md:w-full md:mx-auto sm:w-full sm:text-wrap lg:text-white sm:text-gray-900 lg:text-xl md:text-xl sm:text-md sm:px-4">
                    To be the leading engineering solutions provider in Rwanda
                    and beyond, known for our commitment to quality, innovation,
                    and sustainable practices.
                  </p>
                </div>
                <div>
                  <div className="lg:ps-32 sm:ps-0">
                    <h1 className="font-lato font-bold lg:text-white sm:text-gray-900 lg:text-4xl sm:text-xl md:text-3xl text-center sm:py-4">
                      Our Mission
                    </h1>
                    <p className="lg:w-[90%] md:w-full md:mx-auto sm:w-full sm:text-wrap lg:text-white sm:text-gray-900 lg:text-xl md:text-xl sm:text-md sm:px-4">
                      To provide comprehensive and innovative engineering
                      solutions that meet the highest standards of quality and
                      sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-lato text-xl text-center">
              Want To Discuss Project?
            </h2>
            <div className="flex justify-center">
              <img src="svg/downArrow.svg" alt="" className="w-auto h-auto" />
            </div>
            <div className="w-full bg-blue-700 flex justify-center items-center gap-4 text-2xl text-white py-4">
              <a href="/about#team">
                <p>Reach Out To Our Team. </p>
              </a>
              <MdEmail />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="200"
          height="200"
          style="shape-rendering: auto; display: block; background: rgb(255, 255, 255);"
        >
          <g>
            <circle
              stroke-width="21"
              stroke="#d2d9f7"
              fill="none"
              r="0"
              cy="50"
              cx="50"
            >
              <animate
                begin="0s"
                calcMode="spline"
                keySplines="0 0.2 0.8 1"
                keyTimes="0;1"
                values="0;43"
                dur="2.083333333333333s"
                repeatCount="indefinite"
                attributeName="r"
              />
              <animate
                begin="0s"
                calcMode="spline"
                keySplines="0.2 0 0.8 1"
                keyTimes="0;1"
                values="1;0"
                dur="2.083333333333333s"
                repeatCount="indefinite"
                attributeName="opacity"
              />
            </circle>
            <circle
              stroke-width="21"
              stroke="#d2d9f7"
              fill="none"
              r="0"
              cy="50"
              cx="50"
            >
              <animate
                begin="-1.0416666666666665s"
                calcMode="spline"
                keySplines="0 0.2 0.8 1"
                keyTimes="0;1"
                values="0;43"
                dur="2.083333333333333s"
                repeatCount="indefinite"
                attributeName="r"
              />
              <animate
                begin="-1.0416666666666665s"
                calcMode="spline"
                keySplines="0.2 0 0.8 1"
                keyTimes="0;1"
                values="1;0"
                dur="2.083333333333333s"
                repeatCount="indefinite"
                attributeName="opacity"
              />
            </circle>
            <g />
          </g>
        </svg>
      )}
    </div>
  );
}

export default Home;
