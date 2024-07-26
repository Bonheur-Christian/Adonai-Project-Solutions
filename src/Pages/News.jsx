import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import LandingPageBar from "../components/LandingPageBar";
import { useEffect, useState } from "react";
function News() {
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
  const News = [
    {
      image: "images/project3.jpg",
      date: "MARCH 8, 2023",
      title: "Hope Haven Christian Academy Secondary",
      description:
        "The APS team successfully completed the Hope Haven Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project4.jpg",
      date: "MARCH 8, 2023",
      title: "New Life Christian Academy",
      description:
        "The APS team successfully completed the New Life Christian Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project7.jpg",
      date: "MARCH 8, 2023",
      title: "Hope Haven Christian Academy Primary",
      description:
        "The APS team successfully completed the Primary Hope Haven Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project5.jpg",
      date: "MARCH 8, 2023",
      title: "New Life Christian Academy",
      description:
        "The APS team successfully completed the New Life Christian Academy construction project, delivering a modern educational facility equipped with advanced classrooms, science and computer labs, a comprehensive library, sports facilities, and arts spaces. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for students' academic and personal growth.",
    },
    {
      image: "images/project6.jpg",
      date: "MARCH 8, 2023",
      title: "Potter's Hand church Project",
      description:
        "The APS team successfully completed the Potter's Hand church construction project, delivering a modern buildings  equipped with advanced roofing, design and aesthetic. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for People's comfort and personal growth.",
    },
    {
      image: "images/project1.jpg",
      date: "MARCH 8, 2023",
      title: "Residential Twin House Project ",
      description:
        "The APS team successfully completed the Residential Twin House Project, delivering a modern residential facility equipped with advanced rooms, roofing and gardens,  a large space for parking. The project emphasizes sustainability, safety, and accessibility, creating an inclusive and inspiring environment for person comfort.",
    },
  ];
  return (
    <div>
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('svg/Intro.svg')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <div className="flex items-center justify-end h-full px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold font-lato text-xl md:text-3xl lg:text-5xl">
            Company News
          </h1>
        </div>
      </div>
      <div className="p-12">
        {News.map((item, index) => (
          <div key={index} className="flex gap-32 p-12 items-center">
            <img
              src={item.image}
              alt="project 1"
              width={500}
              height={200}
              className="rounded"
            />
            <div className="space-y-12">
              <h1 className="text-xl font-lato text-start ">{item.date}</h1>
              <h1 className="text-3xl font-semibold text-[#1971F4]">
                {item.title}
              </h1>
              <p className="text-lato text-lg font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-blue-700 flex justify-center items-center gap-4 text-2xl text-white py-4">
        <p>Reach Out To Our Team. </p>
        <MdEmail />
      </div>
      <Footer />
    </div>
  );
}

export default News;
