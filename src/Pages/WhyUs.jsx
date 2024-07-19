import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";

function WhyUs() {
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
  return (
    <div>
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('svg/Intro.svg')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <div className="flex items-center justify-end h-full px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-xl md:text-3xl lg:text-5xl">
            Why APS .Ltd ?
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-6 md:p-12">
        <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0 pt-32">
          <h1 className="font-semibold text-blue-500 text-lg mb-4">
            IT MATTERS ....
          </h1>
          <h1 className="font-bold text-3xl mb-4 w-1/4">
            Who Does Your Engineering.
          </h1>
          <p className="mb-6 text-xl font-lato w-[40vw]">
            If you’ve worked with one engineer, you’ve worked with them
            all—right? It doesn’t have to be that way. It’s easy to get caught
            up in the routine of working with the same engineering firm(s) over
            and over, despite their shortcomings.
          </p>
          <p className="mb-8 text-xl font-lato w-[40vw]">
            If you’ve worked with one engineer, you’ve worked with them
            all—right? It doesn’t have to be that way. It’s easy to get caught
            up in the routine of working with the same engineering firm(s) over
            and over, despite their shortcomings.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="images/image.png"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto"
            style={{ position: "relative" }}
          />
        </div>
      </div>
      <div className="bg-[#DEF2F9] py-12 space-y-16">
        <p className="font-medium text-2xl ps-[15rem]">
          Aps keeps the clients’ priorities at the forefront of everything we
          do. We believe:
        </p>
        <div className="flex justify-evenly items-start">
          <img src="svg/1.svg" alt="1" className="pt-4" />
          <div className="w-[60vw] space-y-6 ms-[-10rem]">
            <h1 className="text-[#1971F4] font-medium text-2xl">
              THE BUDGET IS MEANT TO BE ADHERED TO.
            </h1>
            <p className="text-xl font-medium">
              Over the course of any project, unexpected hurdles happen. But
              these hurdles shouldn’t completely negate the budget. When these
              situations arise, you’ll need an engineering team that makes
              budget-conscious recommendations without compromising the
              integrity of the project.{" "}
              <span className="text-[#1971F4] font-medium">Aps</span>{" "}
              Engineering will always outline the most cost-effective solutions
              and research other ways to save money throughout the duration of
              the project.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-start">
          <img src="svg/2.svg" alt="2" className="pt-4" />
          <div className="w-[60vw] ms-[-10rem] space-y-6">
            <h1 className="text-[#1971F4] font-medium text-2xl">
              A PROJECT SCHEDULE IS NOT JUST A GUIDELINE.
            </h1>
            <p className="text-xl font-medium">
              When there are multiple vendors and regulatory agencies involved,
              timelines can get off track. As a result, engineers must be
              prepared to readjust any aspect of the project so that it stays on
              schedule. ADC does whatever it takes—including our principals, who
              are involved in every project. We’re not afraid to get our hands
              dirty so your project gets done on time.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-start">
          <img src="svg/3.svg" alt="3" className="pt-4" />
          <div className="w-[60vw] ms-[-10rem] space-y-6">
            <h1 className="text-[#1971F4] font-medium text-2xl">
              RESPONSIVENESS IS CRUCIAL.
            </h1>
            <p className="text-xl font-medium">
              How much time goes by before your engineer returns your call or
              email? Do you feel like you are chasing your engineer? In this day
              and age, we still believe in the value of a phone call. A lunch
              meeting. A handshake. When you reach out, you’ll know the person
              you’re talking to by name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
