import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";


function Test() {
  const Testimonials = [
    {
      Name: "Jean Chrisostom",
      info: "APS is the greatest company I've ever worked with. They accomplish what they promised. After working with them, I found There Quality of service and Uniqueness.",
      role: "CEO",
      Image: "images/1.png",
    },
    {
      Name: "Hirwa Justin",
      info: "They accomplish what they promised. After working with them, I found There Quality of service and Uniqueness.",
      role: "Engineer",
      Image: "images/2.png",
    },
    {
      Name: "John David ",
      info: "They have better team work and Innovations. There are really great! ",
      role: "Minister",
      Image: "images/3.png",
    },
    {
      Name: "Kim Adams",
      info: "If you have property never wonder in all the country, APS is only company you can entrust with your property.",
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
      info: "I like this company. It provide good services and I encourage whover who want them not to hesitate to reach out.",
      role: "Entrepreneur",
      Image: "images/3.png",
    },
  ];
  const length = Testimonials.length;

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Autoplay,Pagination]}
        pagination={{
          dynamicMainBullets: true,
          clickable: true,
        }}
        navigation={{ prevEl: `#prev-btn`, nextEl: `#next-btn` }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
          1024: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
        }}
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div key={index} className="py-12 flex sm:flex-col items-center bg-[#F8F8F8] w-[90%] mx-auto  my-12 dark:text-black rounded-xl">
              <div>
                <img src={item.Image} alt="" className="ms-6 sm:w-1/2 lg:w-1/3 sm:mx-auto "/>
              </div>
              <div className="rounded-xl lg:mx-auto w-full">
                <div className="flex text-xl pt-4">
                  <p className="lg:px-6 sm:px-2 text-center">
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
                    <p className="text-3xl font-lato">{item.Name}</p>
                    <p className="text-3xl font-bold font-lato ">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-[45%] z-10 w-full group-hover:flex justify-between px-6 hidden">
        <div
          className="bg-slate-200 rounded-full p-2"
          onClick={previous}
          id="prev-btn"
        >
          <svg
            className="w-5 h-5"
            fill="#000000"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M160,220a11.96287,11.96287,0,0,1-8.48535-3.51465l-80-80a12.00062,12.00062,0,0,1,0-16.9707l80-80a12.0001,12.0001,0,0,1,16.9707,16.9707L96.9707,128l71.51465,71.51465A12,12,0,0,1,160,220Z" />
          </svg>
        </div>
        <div
          className="bg-slate-200 rounded-full p-2"
          onClick={next}
          id="next-btn"
        >
          <svg
            className="w-5 h-5 z-[-10]"
            fill="#000000"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96,220a12,12,0,0,1-8.48535-20.48535L159.0293,128,87.51465,56.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l80,80a12.00062,12.00062,0,0,1,0,16.9707l-80,80A11.96287,11.96287,0,0,1,96,220Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Test;
