import { useEffect, useState } from "react";
import AddressModal from "./AddressModal";
import { toast, ToastContainer } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import client from "../sanityClient";

function AddressSection({ children }) {
  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = () => {
    setLoading(true);
    client
      .fetch(
        `*[_type=="address"]{
      _id,
      tel,
      email,
      location
    }
    `
      )
      .then((data) => {
        setAddress(data);
      })
      .catch((err) => {
        toast.error("Error In Getting Address.");
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
            Edit Address
          </button>
        </div>
      </div>
      <hr className="mt-4" />
      <div>
        {address.map((item, index) => (
          <div key={index} className="space-y-2 py-6 ps-6">
            <div className="flex gap-4">
              <h1 className="text-xl font-medium">Tel: +250</h1>
              <p className="text-xl">{item.tel}</p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-xl font-medium">Email:</h1>
              <p className="text-xl">{item.email}</p>
            </div>
            <div className="flex gap-4">
              <h1 className="text-xl font-medium">Location:</h1>
              <p className="text-xl">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
      <AddressModal visible={visible} handleClose={handleClose} />
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

export default AddressSection;
