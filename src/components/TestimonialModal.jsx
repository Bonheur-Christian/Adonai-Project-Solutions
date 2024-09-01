import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Backdrop, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import client from "../sanityClient";

function TestimonialModal({ visible, handleClose }) {
  if (!visible) return null;

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (name.trim() === "" || role.trim() === "" || description.trim() === "") {
      setLoading(false);
      toast.error("All Fields Are Required!");
      return;
    }

    try {
      let imageAsset = null;
      if (image && typeof image !== "string") {
        imageAsset = await client.assets.upload("image", image, {
          contentType: image.type,
          filename: image.name,
        });
      } else if (!image) {
        setLoading(false);
        toast.error("Select image");
        return;
      }

      const doc = {
        _type: "testimonials",
        name: name,
        role: role,
        description: description,
        ...(imageAsset && {
          image: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          },
        }),
      };

      const response = await client.create(doc);
      toast.success("Testimonial saved");
      handleClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div className="relative bg-white rounded-lg shadow-lg p-6  w-[30vw]">
        <h1 className="text-xl font-semibold mb-4">Add New Testimonial</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label htmlFor="image" className="block font-lato font-medium">
            Image of Client
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <label htmlFor="name" className="block font-lato font-medium">
            Client Name
          </label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            placeholder="Enter client name"
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <label htmlFor="name" className="block font-lato font-medium">
            Client Role (Job title)
          </label>
          <input
            type="text"
            name="role"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            placeholder="Enter client role"
            disabled={loading}
            onChange={(e) => setRole(e.target.value)}
          />

          <label htmlFor="desc" className="block font-lato font-medium">
            Feedback (description)
          </label>
          <textarea
            name="description"
            id="desc"
            rows={4}
            disabled={loading}
            className="w-full border-2 border-gray-400 rounded-lg px-3 py-4 outline-none"
            placeholder="Enter feedback description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-4 py-2">
              Save Service
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

export default TestimonialModal;
