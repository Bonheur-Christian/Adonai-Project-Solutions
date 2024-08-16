import LandingPageBar from "./LandingPageBar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import AutoType from "./AutoType";

function Intro() {
  return (
    <div className="lg:h-[80vh] bg-cover bg-center sm:h-[60vh] intro">
      <LandingPageBar />
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="sm:text-center lg:text-start sm:p-12"
      >
        <div className="flex gap-4 lg:pt-12 lg:mt-40 lg:w-1/2 sm:mt-0 lg:px-6 sm:pt-32 py-6 lg:py-16  lg:bg-blue-200/30 lg:my-4 sm:my-0 sm:bg-none rounded">
          <div>
            <img src="svg/intro1.svg" alt="" className="w-full h-auto " />
          </div>
          <div>
            <h1 className="lg:text-4xl sm:text-xl lg:text-blue-800 sm:text-white font-bold lg:tracking-wider sm:tracking-normal font-lato sm:w-full sm:flex sm:justify-center items-center">
              You Deserve a Different Kind of Engineering Firm.
            </h1>
            <h1 className="font-lato font-extrabold text-4xl py-12 sm:hidden lg:block">
              ONE THAT{" "}
              <AutoType
                sequence={[
                  "ANSWERS YOUR CALL",
                  1000,
                  " OFFERS GOOD SERVICES",
                  1000,
                  " PUTS YOU IN FRONT",
                  1000,
                  "ENSURES GOOD COMMUNICATION",
                  1000,
                ]}
              />
            </h1>
          </div>
        </div>
        <div className="flex lg:gap-12 sm:gap-6">
          <a href="/contacts">
            <button className="bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-full font-medium text-white">
              GET FREE QUOTE
            </button>
          </a>
          <a href="/signin" className="lg:block sm:hidden">
            <button className="bg-blue-500 hover:bg-blue-700 lg:px-12 sm:px-6 py-3 rounded-full font-medium text-white">
              Sign In
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;
