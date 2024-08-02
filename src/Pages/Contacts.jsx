import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import Bar from "../components/bar";
import { CiLocationOn } from "react-icons/ci";

function Contacts() {
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
  return (
    <div className="dark:text-white">
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <Bar />
        <div className="flex items-center justify-end px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-2xl md:text-3xl lg:text-5xl">
            Contacts
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="lg:ps-32 sm:ps-6 space-y-12 lg:pt-16 sm:pt-4">
          <div>
            <h1 className="text-3xl font-bold font-lato lg:text-start sm:text-center">Drop us a Line.</h1>
            <p className="text-lg tracking-widest text-[#B4A9A9]">
              WE’LL GET BACK TO YOU PROMPTLY.
            </p>
          </div>
          <address className="font-lato not-italic lg:px-0 sm:px-4">
            <h1 className="font-semibold text-xl">Address</h1>
            <p>
              <span className="font-medium text-xl">Tel:</span>0788348991
            </p>
            <p>
              <span className="font-medium text-xl">Email:</span>info@apsltd.rw
            </p>
            <p>
              <span className="font-medium text-xl">Location:</span>
              Kigali-Rwanda, Remera-Gisiment-Ituze House
            </p>
          </address>
          <div className="">
            <div className="flex lg:justify-between sm:justify-evenly sm:gap-6 lg:w-[60vw] sm:w-full sm:me-4 items-center">
              <p className="font-semibold text-xl">Location/Map</p>
              <button className="bg-[#396FF9] text-lg text-white text-center lg:px-4 sm:px-2 py-2 rounded">
                View on google map
              </button>
            </div>
            <img src="images/map.png" alt="map" className="mt-6 lg:w-[60vw] sm:w-[90vw] sm:me-12" />
            <p className="flex items-center gap-4 pt-4"><CiLocationOn className="inline items-center"/> Kigali-Rwanda, Remera-Gisiment-Ituze House</p>
          </div>
        </div>
        <div className="sm:hidden lg:block">
          <img
            src="svg/services.svg"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto sm:p-6"
          />
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
