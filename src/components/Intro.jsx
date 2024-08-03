import LandingPageBar from "./LandingPageBar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Intro() {
  return (
    <div className="bg-[url('/images/intro.jpg')] h-screen bg-cover  bg-no-repeat dark:text-black intro">
      <LandingPageBar />
      <motion.div 
          variants={fadeIn("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="lg:ms-[60rem] sm:text-center lg:text-start sm:p-12">
        <div className=" flex gap-4 pt-32">
          <div>
            <img src="svg/intro1.svg" alt="" className="w-full h-auto pt-3" />
          </div>
          <div>
            <h1 className="lg:text-6xl sm:text-3xl font-bold lg:tracking-wider sm:tracking-normal font-lato lg:w-full sm:w-full sm:flex sm:justify-center items-center">
              You Deserve a Different Kind of Engineering Firm.
            </h1>
            <h1 className="font-lato font-light text-3xl py-12">
              ONE THAT{" "}
              <span className="text-orange-700 font-semibold">
                ANSWERS YOUR CALLS.
              </span>
            </h1>
          </div>
        </div>
        <a href="/whyus">
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-lg text-white">
            Why APS?
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default Intro;
