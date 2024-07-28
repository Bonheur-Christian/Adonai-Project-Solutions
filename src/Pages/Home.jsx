import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import ServiceSwiper from "../components/servicesSwiper";
import Testimonials from "../components/Testimonials";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div className="dark:text-white px-0 mx-0">
      <Intro />
      <div className="py-12 space-y-6">
        <h2 className="text-2xl font-lato font-semibold text-center tracking-wider">
          APS ‘s Track Record speaks for Itself
        </h2>
        <h2 className="text-2xl font-lato font-semibold text-center tracking-wider">
          Services offered at Aps
        </h2>
        <div>
          <ServiceSwiper />
        </div>
        <p className="tracking-widest text-xl text-center">
          SEE WHAT OUR CLIENT SAID{" "}
        </p>
      </div>
      <div className="lg:text-center sm:text-start w-[80vw] mx-auto lg:text-xl md:text-xl sm:text-lg  ">
        <p>
          At APS Ltd, we are committed to excellence, integrity, and customer
          satisfaction. Our team of professionals is dedicated to delivering
          projects that meet and exceed client expectations. We adhere to the
          highest standards of safety and sustainability, ensuring that our work
          benefits both the community and the environment.
        </p>
      </div>
      <Testimonials />
      <div className="flex justify-center my-12">
        <a href="#projects">
          <img src="svg/button.svg" alt="" className="w-auto h-auto" />
        </a>
      </div>
      <Projects />
      <div className="flex lg:flex-row sm:flex-col-reverse lg:justify-between  lg:h-screen lg:py-24 sm:py-6 lg:ps-12 sm:ps-2">
        <div className="lg:flex items-center sm:px-12 lg:px-0">
          <img src="svg/mission1.svg" alt="" />
        </div>
        <div className="lg:bg-[url('/images/mission.png')] lg:w-1/2 bg-no-repeat">
          <div className="lg:ps-48 space-y-12 lg:py-12 sm:py-6">
            <div>
              <h1 className="font-lato font-bold lg:text-white sm:text-gray-900 text-4xl text-center sm:py-4">
                Our Vision
              </h1>
              <p className="lg:w-[80%] sm:w-full sm:text-wrap lg:text-white sm:text-gray-900 text-xl mx-auto sm:px-4">
                To be the leading engineering solutions provider in Rwanda and
                beyond, known for our commitment to quality, innovation, and
                sustainable practices.
              </p>
            </div>
            <div>
              <h1 className="font-lato font-bold lg:text-white sm:text-gray-900 text-4xl text-center sm:py-4">
                Our Mission
              </h1>
              <p className="lg:w-[80%] sm:w-full sm:text-wrap lg:text-white sm:text-gray-900 text-xl mx-auto sm:px-4">
                To provide comprehensive and innovative engineering solutions
                that meet the highest standards of quality and sustainability,
                contributing to the development and betterment of communities.
              </p>
            </div>
            <div className="flex justify-center lg:my-32 sm:my-12">
              <a href="/services">
                <button className="bg-transparent border-2 border-blue-700 py-2 px-4 lg:text-white sm:font-lato sm:text-lg hover:bg-blue-700 sm:hover:text-white duration-500 dark:hover:bg-blue-400 dark:border-blue-400 rounded-xl">
                  View Our Work
                </button>
              </a>
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
  );
}

export default Home;
