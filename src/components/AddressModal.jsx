import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { API_url } from "../constants";
import client from "../sanityClient";

function AddressModal({ visible, handleClose }) {
  if (!visible) return null;
  const [address, setAddress] = useState({
    _id: "",
    tel: "",
    email: "",
    location: "",
  });

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
      });
  };

  const updateAddress = () => {
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
    </div>
  );
}

export default AddressModal;
