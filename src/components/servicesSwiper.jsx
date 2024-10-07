import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import client from "../sanityClient";

function ServiceSwiper() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    client
      .fetch(
        `*[_type=="service"] | order(priority asc){
      _id,
      name,
      description,
      priority,
      image{
      asset->{
      _id,
      url
      }
      }
      }`
      )
      .then((data) => {
        setServices(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const length = services.length;

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative group my-10 mb-12">
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
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="flex sm:flex-col items-center w-[80%] mx-auto  dark:text-white rounded-xl"
            >
              <div key={index} className="lg:w-[40vw] sm:w-full sm:px-6">
                <img
                  src={item.image.asset.url}
                  alt="property showcasing"
                  className="w-32 h-32 rounded-full object-cover hover:shadow-gray-400 md:flex md:justify-center shadow-md"
                />
                <h1 className="text-2xl pb-6 text-[#1971F4]">{item.name}</h1>
                <p className="font-lato text-lg lg:w-[30vw] sm:w-full pb-6">
                  {item.description}
                </p>
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
export default ServiceSwiper;
