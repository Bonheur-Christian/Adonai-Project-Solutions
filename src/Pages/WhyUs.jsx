import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";

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
    {
      Name: "Kim Adams",
      info: "APS made our dream home a reality. Their attention to detail and commitment to quality are unmatched. The entire process was smooth and stress-free thanks to their expertise and dedication.",
      role: "CEO",
      Image: "images/1.png",
    },
    {
      Name: "Mike Nzirorera ",
      info: "This company is amazing in water management, land survey, property management and other various services. They are great Entrepreneur I've ever seen.",
      role: "Architect",
      Image: "images/2.png",
    },
    {
      Name: "Assoumpta IGIRANEZA",
      info: "The APS team is professional, responsive, and talented. They managed our construction project flawlessly and ensured everything was done to the highest standards. We will definitely use their services again.",
      role: "Entrepreneur",
      Image: "images/3.png",
    },
  ];
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
      <div className="bg-[#DEF2F9]/30 py-12 mt-[-12rem] space-y-16">
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
      <div>
        <div className=" py-12 space-y-6">
          <h2 className="text-2xl font-lato font-semibold ps-[18rem] tracking-wider">
            APS ‘s Track Record speaks for Itself
          </h2>
          <p className="tracking-widest text-xl ps-[18rem]">
            SEE WHAT OUR CLIENT SAID
          </p>
        </div>
        <div>
          {Testimonials.map((item, index) => (
            <div
              key={index}
              className="py-6 flex lg:flex-row sm:flex-col items-center hover:translate-y-6 hover:text-black text-gray-200 duration-1000 hover:bg-[#F8F8F8] w-[60%] mx-auto  my-6 dark:text-black rounded-xl"
            >
              <div>
                <img
                  src={item.Image}
                  alt=""
                  className="w-[60%] sm:mx-auto backdrop-blur-lg"
                />
              </div>
              <div className="rounded-xl lg:mx-auto">
                <div className="flex text-xl pt-2">
                  <p className="sm:px-2 text-center">
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
      <div className="bg-[#DEF2F9] pt-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-lato font-bold text-shadow ps-[18rem]">
            The Company We Keep
          </h1>
          <h1 className="text-md font-lato font-medium ps-[18rem] text-[#1971F4] tracking-[0.5rem]">
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
      <Footer/>
    </div>
  );
}

export default WhyUs;
