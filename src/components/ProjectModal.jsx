import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import client from "../sanityClient";
import { Backdrop, CircularProgress } from "@mui/material";

function ProjectModalComponent({ visible, handleClose }) {
  if (!visible) return null;

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (name.trim() === "") {
      setLoading(false);
      toast.error("All Fields Required");
      return;
    }
    try {
      let imageAsset = null;
      if (image) {
        imageAsset = await client.assets.upload("image", image, {
          contentType: image.type,
          filename: image.name,
        });
      }

      const doc = {
        _type: "project",
        name: name,
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
      toast.success("Project saved");
      handleClose();
    } catch (err) {
      toast.error("Error in saving Project!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Add New Project</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block">
            Project Name
          </label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            placeholder="Enter project name"
            onChange={handleChange}
            disabled={loading}
          />
          <label
            htmlFor=""
            className="block font-lato font-medium"
            onChange={handleImageChange}
          >
            Project Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg outline-none"
            onChange={handleImageChange}
            disabled={loading}
          />
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-4 py-2">
              Save Project
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

export default ProjectModalComponent;
