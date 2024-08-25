import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import Bar from "../components/bar";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { API_url } from "../constants";
import client from "../sanityClient";
import { toast } from "react-toastify";

function Contacts() {
  const [scrolled, setScrolled] = useState(false);
  const [address, setAddress] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 14) {
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
    fetchAddress();
  });

  const fetchAddress = async () => {
    client
      .fetch(
        `
    *[_type=="address"]{
      _id, 
      tel,
      email,
      location,
    }
    `
      )
      .then((data) => {
        setAddress(data);
      })
      .catch((err) => {
        console.log(err);
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
          <h1 className="text-right text-[#424242] font-bold text-2xl md:text-3xl sm:pt-24 lg:text-5xl">
            Contacts
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="lg:ps-32 sm:ps-6 space-y-12 lg:pt-16 sm:pt-4">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h1 className="text-3xl font-bold font-lato lg:text-start sm:text-center">
              Drop us a Line.
            </h1>
            <p className="text-lg tracking-widest text-[#B4A9A9]">
              WE’LL GET BACK TO YOU PROMPTLY.
            </p>
          </motion.div>
          <address className="font-lato not-italic lg:px-0 sm:px-4">
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="font-semibold text-xl">Address</h1>
              {address.map((item, index) => (
                <div key={index} className="space-y-2 py-6">
                  <div className="flex gap-4">
                    <h1 className="text-xl font-medium">Tel:</h1>
                    <p className="text-xl">{item.tel}</p>
                  </div>
                  <div className="flex gap-4">
                    <h1 className="text-xl font-medium">Email:</h1>
                    <p className="text-xl">{item.email}</p>
                  </div>
                  <div className="flex gap-4">
                    <h1 className="text-xl font-medium">Location:</h1>
                    <p className="text-xl">{item.location}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </address>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex lg:justify-between sm:justify-evenly sm:gap-6 lg:w-[60vw] sm:w-full sm:me-4 items-center">
              <p className="font-semibold text-xl">Location/Map</p>
              <a href="https://www.google.com/maps/place/Gisimenti,+Kigali/@-1.9610884,30.10828,16.92z/data=!4m6!3m5!1s0x19dca65494656c01:0x10ef7e8da96de403!8m2!3d-1.9607498!4d30.1102049!16s%2Fg%2F11vrl9c0nd?entry=ttu">
                <button className="bg-[#396FF9] text-lg text-white text-center lg:px-4 sm:px-2 py-2 rounded">
                  View on google map
                </button>
              </a>
            </div>
            <img
              src="images/map.png"
              alt="map"
              className="mt-6 lg:w-[60vw] sm:w-[90vw] sm:me-12"
            />
            <p className="flex items-center gap-4 pt-4">
              <CiLocationOn className="inline items-center" /> Kigali-Rwanda,
              Remera-Gisiment-Ituze House
            </p>
          </motion.div>
        </div>
        <div className="sm:hidden lg:block">
          <img
            src="svg/services.svg"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto sm:p-6"
          />
        </div>
      </div>
      <div className="py-12 text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-600 font-lato">
          We Will Love To Hear From You
        </h1>
        <p className="text-gray-700 text-center text-xl">
          we are here to help you and respond in time!
        </p>
        <div className="flex justify-center py-6">
          <form className="lg:shadow-xl sm:shadow-none px-12 py-12 rounded-lg">
            <div className="flex justify-center gap-2 py-6 lg:w-[40vw] sm:w-full">
              <input
                type="text"
                placeholder="your name"
                className="border-2 border-gray-400 px-2 py-2 outline-none rounded-md lg:w-[20vw] sm:w-[40vw] text-gray-500 font-medium"
              />
              <input
                type="email"
                placeholder="your email"
                className="border-2 border-gray-400 px-2 py-2 outline-none rounded-md lg:w-[20vw] sm:w-[40vw] text-gray-500 font-medium"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="border-2 border-gray-400 block lg:w-[40vw] sm:w-full px-2 py-2 outline-none rounded-md mb-12 text-gray-500 font-medium"
            />
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="your message"
              className="border-2 border-gray-400 w-full px-2 py-2 outline-none rounded-md text-gray-500 font-medium"
            ></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-medium rounded-lg px-12 py-4 my-6">
              Submit
            </button>
          </form>
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
          <p>Reach Out To Our Team. </p>
          <MdEmail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
