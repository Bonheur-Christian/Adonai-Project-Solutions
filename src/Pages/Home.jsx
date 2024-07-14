import Footer from "../components/Footer";
import Intro from "../components/Intro";
import LandingPageBar from "../components/LandingPageBar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div className="dark:text-white px-0 mx-0">
      <LandingPageBar />
      <Intro />
      <div className="py-12 space-y-6">
        <h2 className="text-2xl font-lato font-semibold text-center tracking-wider">
          APS ‘s Track Record speaks for Itself
        </h2>
        <p className="tracking-widest text-xl text-center">
          SEE WHAT OUR CLIENT SAID{" "}
        </p>
      </div>
      <div className="text-center w-[80vw] mx-auto text-xl">
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
        <img src="svg/button.svg" alt="" className="w-auto h-auto" />
      </div>
      <Projects />
      <div className="flex justify-between h-screen py-24 ps-12">
        <div className="flex items-center">
          <img src="svg/mission1.svg" alt="" />
        </div>
        <div className="bg-[url('svg/mission.svg')] w-1/2 bg-no-repeat">
          <div className="py-32">
            <h1 className="font-lato font-bold text-white text-4xl text-center">
              Our Vision
            </h1>
            <p className="w-1/2 text-center text-white text-xl mx-auto">
              To be the leading engineering solutions provider in Rwanda and
              beyond, known for our commitment to quality, innovation, and
              sustainable practices.
            </p>
            <div className="flex justify-center my-32">
              <button className="bg-transparent border-2 border-blue-700 py-2 px-4 text-white hover:bg-blue-700 duration-500">
                View Our Work
              </button>
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
          <p>Reach Out To Our Team. </p>
          <MdEmail />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
