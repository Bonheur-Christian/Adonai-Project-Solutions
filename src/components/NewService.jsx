import { useContext, useEffect, useState } from "react";
// import ModalComponent from "./ProjectModal";
import ServiceModalComponent from "./ServiceModal";
import { toast, ToastContainer } from "react-toastify";
import { API_url } from "../constants";
import client from "../sanityClient";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Backdrop, CircularProgress } from "@mui/material";
import { ServiceContext } from "../contexts/ServiceContext";

function ServiceSection({ children }) {
  const [visible, setVisible] = useState(false);
  const { services, setServices } = useContext(ServiceContext);
  const [loading, setLoading] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    setLoading(true);
    client
      .fetch(
        `*[_type=="service"] | order(priority asc){
_id,
name,
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
        setServices(data);
      })
      .catch((err) => {
        toast.error("Error in Getting Services");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setLoading(true);
    client
      .delete(id)
      .then(() => {
        toast.success("Service Deleted");
        setServices((services) =>
          services.slice().filter((item) => item._id !== id)
        );
      })
      .catch((err) => {
        toast.error("Please Try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="bg-[#F8FBFC] w-[40%] py-12 px-6">
      <div className="flex  justify-between px-6">
        <p className="font-semibold text-xl">{children}</p>
        <div className="flex gap-2">
          <img src="/svg/add.svg" alt="add new item" />
          <button
            className="text-[#4327F4] font-medium text-xl"
            onClick={handleOpen}
          >
            Add
          </button>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="py-6 space-y-4">
        {services.map((item, index) => (
          <div className="flex justify-between ps-6" key={index}>
            <p className="text-xl font-lato">{item.name}</p>
            <div className="flex gap-5 pe-5">
              <CiEdit
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
              />
              <MdOutlineDeleteForever
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
                onClick={() => {
                  handleDelete(item._id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <ServiceModalComponent visible={visible} handleClose={handleClose} />
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

export default ServiceSection;
