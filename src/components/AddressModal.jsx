import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import client from "../sanityClient";

function AddressModal({ visible, handleClose }) {
  if (!visible) return null;
  const [address, setAddress] = useState({
    _id: "",
    tel: "",
    email: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => {
      return { ...prev, [name]: value };
    });
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
      }[0]`
      )
      .then((data) => {
        setAddress(data);
      })
      .catch((err) => {
        toast.error("Please Try Again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateAddress = () => {
    setLoading(true);
    client
      .patch(address._id)
      .set({
        tel: address.tel,
        email: address.email,
        location: address.location,
      })
      .commit()
      .then(() => {
        handleClose();
        toast.success("Address Updated");
      })
      .catch((err) => {
        toast.error("Please Try Again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateAddress();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Edit Address</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="tel" className="block font-lato font-medium">
            Tel
          </label>
          <input
            type="tel"
            name="tel"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            onChange={handleChange}
            value={address.tel}
            disabled={loading}
          />
          <label htmlFor="email" className="block font-lato font-medium">
            Email
          </label>
          <input
            name="email"
            id="email"
            className="w-full border-2 border-gray-400 rounded-lg px-3 py-2 outline-none"
            onChange={handleChange}
            value={address.email}
            disabled={loading}
          />
          <label htmlFor="location" className="block font-lato font-medium">
            Location
          </label>
          <input
            name="location"
            id="location"
            className="w-full border-2 border-gray-400 rounded-lg px-3 py-2 outline-none"
            onChange={handleChange}
            value={address.location}
            disabled={loading}
          />
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-4 py-2">
              Save
            </button>
          </div>
        </form>
        <IoCloseSharp
          className="absolute top-4 right-4 cursor-pointer"
          size={30}
          onClick={handleClose}
        />
      </div>
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

export default AddressModal;
