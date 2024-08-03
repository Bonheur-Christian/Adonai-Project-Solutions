import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import Bar from "../components/bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function WhyUs() {
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

  const Testimonials = [
    {
      Name: "Jean Chrisostom",
      info: "Adonai Project Solutions exceeded our expectations with their attention to detail and commitment to quality. Our new office building is both functional and aesthetically pleasing. We couldn't be happier with the results!",
      role: "CEO",
      Image: "images/1.png",
    },
    {
      Name: "Hirwa Justin",
      info: "Working with APS was a fantastic experience. They delivered our project on time and within budget. The team was professional, communicative, and truly cared about our vision.",
      role: "Engineer",
      Image: "images/2.png",
    },
    {
      Name: "John David ",
      info: "Choosing APS for our construction project was the best decision we made. Their team was knowledgeable, reliable, and worked tirelessly to ensure our project was completed to perfection. We highly recommend them.",
      role: "Minister",
      Image: "images/3.png",
    },
  ];
  return (
    <div className="dark:text-white">
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <Bar />
        <div className="flex items-center justify-end px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold sm:text-xl md:text-3xl lg:text-5xl">
            Why APS .Ltd ?
          </h1>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col-reverse md:flex-row">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 md:pr-6 mb-8 md:mb-0 lg:pt-40 sm:pt-6 lg:pl-12 sm:px-4 sm:w-full"
        >
          <h1 className="font-semibold text-blue-500 text-lg mb-4">
            IT MATTERS ....
          </h1>
          <h1 className="font-bold text-3xl sm:text-2xl mb-4 lg:w-1/4 sm:w-full">
            Who Does Your Engineering.
          </h1>
          <p className="mb-6 text-xl font-lato lg:w-[40vw] sm:w-full">
            Welcome to Adonai Project Solutions (APS) Ltd, a premier
            multidisciplinary engineering firm based in Rwanda. Established in
            2011, we have been committed to delivering excellence in a wide
            range of services for over a decade. Our expertise spans across
            various domains.
          </p>
          <p className="mb-8 text-xl font-lato lg:w-[40vw] sm:w-full">
            Adonai Project Solutions ltd, we put the client desire infront,
            resulting in Our best performance.
          </p>
        </motion.div>
        <div className="md:w-1/2 sm:w-full sm:p-6">
          <img
            src="images/image.png"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-[#DEF2F9]/30 dark:bg-gray-800 py-12 lg:mt-[-12rem] sm:mt-0 space-y-16">
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="font-medium text-2xl lg:ps-[15rem] sm:p-6 sm:text-center"
        >
          Aps keeps the clients’ priorities at the forefront of everything we
          do. We believe:
        </motion.p>
        <div className="flex justify-evenly items-start">
          <img src="svg/1.svg" alt="1" className="pt-4 sm:hidden lg:block" />
          <div className="lg:w-[60vw] sm:w-full space-y-6 lg:ms-[-10rem] sm:ms-0 sm:px-6">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[#1971F4] font-medium text-2xl sm:text-center"
            >
              THE BUDGET IS MEANT TO BE ADHERED TO.
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-xl font-medium"
            >
              Over the course of any project, unexpected hurdles happen. But
              these hurdles shouldn’t completely negate the budget. When these
              situations arise, you’ll need an engineering team that makes
              budget-conscious recommendations without compromising the
              integrity of the project.
              <span className="text-[#1971F4] font-medium"> Aps </span>
              Engineering will always outline the most cost-effective solutions
              and research other ways to save money throughout the duration of
              the project.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-evenly items-start">
          <img src="svg/2.svg" alt="2" className="pt-4 sm:hidden lg:block" />
          <div className="lg:w-[60vw] sm:w-full space-y-6 lg:ms-[-10rem] sm:ms-0 sm:px-6">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[#1971F4] font-medium text-2xl sm:text-center"
            >
              A PROJECT SCHEDULE IS NOT JUST A GUIDELINE.
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-xl font-medium"
            >
              When there are multiple vendors and regulatory agencies involved,
              timelines can get off track. As a result, engineers must be
              prepared to readjust any aspect of the project so that it stays on
              schedule. ADC does whatever it takes—including our principals, who
              are involved in every project. We’re not afraid to get our hands
              dirty so your project gets done on time.
            </motion.p>
          </div>
        </div>
        <div className="flex justify-evenly items-start">
          <img src="svg/3.svg" alt="2" className="pt-4 sm:hidden lg:block" />
          <div className="lg:w-[60vw] sm:w-full space-y-6 lg:ms-[-10rem] sm:ms-0 sm:px-6">
            <motion.h1
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[#1971F4] font-medium text-2xl sm:text-center"
            >
              RESPONSIVENESS IS CRUCIAL.
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-xl font-medium"
            >
              How much time goes by before your engineer returns your call or
              email? Do you feel like you are chasing your engineer? In this day
              and age, we still believe in the value of a phone call. A lunch
              meeting. A handshake. When you reach out, you’ll know the person
              you’re talking to by name.
            </motion.p>
          </div>
        </div>
      </div>
      <div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" py-12 space-y-6"
        >
          <h2 className="text-2xl sm:text-center font-lato font-semibold lg:ps-[18rem] sm:p-6 tracking-wider">
            APS ‘s Track Record speaks for Itself
          </h2>
          <p className="tracking-widest text-xl lg:ps-[18rem] sm:text-center">
            SEE WHAT OUR CLIENT SAID
          </p>
        </motion.div>
        <div>
          {Testimonials.map((item, index) => (
            <div
              key={index}
              className="sm:px-6 py-6 flex lg:flex-row sm:flex-col items-center hover:translate-y-6 hover:text-black text-gray-200 duration-1000 hover:bg-[#F8F8F8] lg:w-[60%] sm:w-[100%] mx-auto  my-6 dark:text-black rounded-xl"
            >
              <div>
                <img
                  src={item.Image}
                  alt=""
                  className="lg:w-[60%] w-[40%] sm:mx-auto backdrop-blur-lg"
                />
              </div>
              <div className="rounded-xl lg:mx-auto">
                <div className="flex text-xl pt-2">
                  <p className="sm:px-2 lg:text-center">
                    <img
                      src="svg/quote.svg"
                      alt=""
                      className="inline w-[60px] h-[20px]"
                    />
                    {item.info}
                    <img
                      src="svg/quote.svg"
                      alt=""
                      className="inline w-[60px] h-[20px]"
                    />
                  </p>
                </div>
                <div className="py-6 px-10 flex gap-2">
                  <div>
                    <p className="text-3xl font-lato ">{item.Name}</p>
                    <p className="text-3xl font-bold font-lato ">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#DEF2F9] dark:bg-gray-800 pt-12">
        <div className="lg:space-y-6 sm:space-y-0">
          <h1 className="text-3xl font-lato font-bold text-shadow lg:ps-[18rem] sm:p-6">
            The Company We Keep
          </h1>
          <h1 className="lg:text-md sm:text-xl font-lato font-medium lg:ps-[3rem] sm:ps-6 text-[#1971F4] lg:tracking-[0.5rem] sm:tracking-widest sm:text-center">
            PROUD TO PARTNER WITH ORGANIZATIONS ACROSS THE COUNTRY FOR 30 YEARS.
          </h1>
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
      </div>
      <Footer />
    </div>
  );
}

export default WhyUs;
