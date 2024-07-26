import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

function ServiceSwiper() {
  const services = [
    {
      svg: "svg/civil.svg",
      title: "CIVIL Engineering",
      description:
        "Civil engineering projects present unique challenges, but APS has the practical knowledge and experience necessary to anticipate problems and quickly propose sound solutions.",
    },
    {
      svg: "svg/property.svg",
      title: "Property Management",
      description:
        "APS Ltd offers comprehensive property management solutions, ensuring that properties are well-maintained, efficiently operated, and profitable. Our services include tenant management, maintenance, and financial reporting.",
    },
    {
      svg: "svg/land.svg",
      title: "Land And Quantity Surveying",
      description:
        "Our land and quantity surveying services are critical for successful project execution. We provide accurate land assessments, mapping, and cost estimation to ensure projects are completed on time and within budget.",
    },
    {
      svg: "svg/real.svg",
      title: "REAL ESTATE",
      description:
        "In the realm of real estate, APS Ltd offers a range of services including property development, sales, and marketing. We help clients navigate the complex real estate market to achieve their investment goals.",
    },
    {
      svg: "svg/waste.svg",
      title: "Waste Management",
      description:
        "APS Ltd is dedicated to promoting environmental sustainability through our waste management services. We provide innovative solutions for waste collection, recycling, and disposal, ensuring minimal environmental impact.",
    },
    {
      svg: "svg/land.svg",
      title: "Roads and Bridge Construction",
      description:
        " Our expertise in roads and bridges construction enables us to build infrastructure that supports economic growth and connectivity. We employ advanced techniques and materials to construct durable and safe transportation networks.",
    },
    {
      svg: "svg/property.svg",
      title: "Plumbing, Heating, and Air Conditioning Installation",
      description:
        "Our plumbing, heating, and air conditioning installation services are designed to enhance comfort and efficiency in residential, commercial, and industrial settings. We utilize the latest technologies and best practices to deliver optimal results.",
    },
    {
      svg: "svg/real.svg",
      title: "REAL ESTATE",
      description:
        "In the realm of real estate, APS Ltd offers a range of services including property development, sales, and marketing. We help clients navigate the complex real estate market to achieve their investment goals.",
    },
  ];
  const length = services.length;

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
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{
          dynamicMainBullets: true,
          clickable: true,
        }}
        navigation={{ prevEl: `#prev-btn`, nextEl: `#next-btn` }}
        autoplay={{ delay: 10000, disableOnInteraction: true }}
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
              className="py-12 flex sm:flex-col items-center w-[90%] mx-auto  my-12 dark:text-black rounded-xl"
            >
              <div>
                <img src={item.svg} alt="svg desc" />
              </div>
              <div className="rounded-xl lg:mx-auto w-full">
                <div className="flex text-xl pt-4">
                  <p className="px-10 text-center text-2xl text-[#1971F4] font-lato">{item.title}</p>
                </div>
                <div className="py-6 px-10 flex gap-2">
                  <div>
                    <p className="text-xl font-lato">{item.description}</p>
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
export default ServiceSwiper;
