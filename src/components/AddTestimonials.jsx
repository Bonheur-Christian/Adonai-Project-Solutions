import { useEffect, useState } from "react";
import TestimonialModal from "./TestimonialModal";
import { Backdrop, CircularProgress } from "@mui/material";
import client from "../sanityClient";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function TestimonialSection({ children }) {
  const [visible, setVisible] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = () => {
    setLoading(true);
    client
      .fetch(
        `
    *[_type == "testimonials"]{
    _id,
    name, 
    role, 
    description, 
    image{
    asset->{
    _id, 
    url
    }
     }
    }
      `
      )
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => {
        console.log(err);
      })

      .finally(() => {
        setLoading(false);
      });
  };

  const handleOpen = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div className="bg-[#F8FBFC] w-[40%] py-12 px-6">
      <div className="flex  justify-between px-6">
        <p className="font-semibold text-xl">{children}</p>
        <div className="flex gap-2" onClick={handleOpen}>
          <img src="/svg/add.svg" alt="add new item" />
          <button className="text-[#4327F4] font-medium text-xl">Add</button>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="py-6 space-y-4">
        {testimonials.map((item, index) => (
          <div className="flex justify-between ps-6" key={index}>
            <p className="text-xl font-lato">{item.name}</p>
            <div className="flex gap-5 pe-5">
              <CiEdit
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
                // onClick={() => {
                //   handleEditOpen(item._id);
                // }}
              />
              <MdOutlineDeleteForever
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
                // onClick={() => {
                //   handleDelete(item._id);
                // }}
              />
            </div>
          </div>
        ))}
      </div>
      <TestimonialModal handleClose={handleClose} visible={visible} />
      <Backdrop
        sx={{ color: "#d3e2e8", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
        <h1 className="text-white text-xl px-4 pb-2">
          Please Wait <span className="text-4xl">...</span>
        </h1>
      </Backdrop>
    </div>
  );
}

export default TestimonialSection;