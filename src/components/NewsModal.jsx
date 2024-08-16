import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { API_url } from "../constants";
import client from "../sanityClient";

function NewsModal({ visible, handleClose }) {
  if (!visible) return null;

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (date.trim() === "" || name.trim() === "" || description.trim() === "") {
      toast.error("All fields are required.");

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
        _type: "news",
        date: date,
        name: name,
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
      toast.success("Completed Project Saved.");
      handleClose();
    } catch (err) {
      toast.error("Error In saving Completed Project!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[30vw]">
        <h1 className="text-xl font-semibold mb-4">
          Add New Completed Project
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="date" className="block">
            Date Of Completion
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <label htmlFor="name" className="block">
            Project Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            placeholder="Enter project Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="" className="block font-lato font-medium">
            Project Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg outline-none"
            onChange={handleImageChange}
          />
          <label htmlFor="desc" className="block">
            Project Description
          </label>
          <textarea
            name="description"
            id="desc"
            rows={4}
            className="w-full border-2 border-gray-400 rounded-lg px-3 py-4 outline-none"
            placeholder="Enter Project description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-4 py-2">
              Save Completed Project
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

export default NewsModal;
