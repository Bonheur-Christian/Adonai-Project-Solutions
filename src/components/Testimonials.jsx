import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

function Testimonials() {
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
  const length = Testimonials.length;

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="relative group lg:py-32 sm:py-12">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
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
            <div
              key={index}
              className="sm:px-6 py-6  flex  sm:flex-col items-center hover:translate-y-4 hover:text-black duration-1000 bg-[#F8F8F8] lg:w-[50% ] sm:w-[90%] mx-auto  my-6 dark:text-black rounded-xl py-12"
            >
              <div className="rounded-xl lg:mx-auto">
                <div className="flex lg:text-xl sm:text-md pt-2">
                  <p className="sm:px-2 lg:text-center">{item.info}</p>
                </div>
                <div className="py-4 flex gap-2">
                  <div className="flex items-center justify-around">
                    <img src={item.Image} alt="" className="w-1/6" />
                    <div>
                      <p className="lg:text-2xl sm:text-xl font-lato ">
                        {item.Name}
                      </p>
                      <p className="lg:text-xl sm:text-xl font-bold font-lato ">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-[45%] z-10 w-full group-hover:flex justify-between px-6 hidden">
        <div
          className="bg-slate-200 rounded-full p-2 sm:hidden lg:block"
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
          className="bg-slate-200 rounded-full p-2 sm:hidden lg:block"
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
export default Testimonials;
