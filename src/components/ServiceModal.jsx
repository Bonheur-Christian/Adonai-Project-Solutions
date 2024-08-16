import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { API_url } from "../constants";
import client from "../sanityClient";

function ServiceModalComponent({ visible, handleClose }) {
  if (!visible) return null;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [priority, setPriority] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || description.trim() === "") {
      toast.error("All fields are required");
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
        _type: "service",
        name: name,
        description: description,
        priority: parseInt(priority, 10),
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
      toast.success("Service saved");
      handleClose();
    } catch (err) {
      toast.error("error in saving service");
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div className="relative bg-white rounded-lg shadow-lg p-6  w-[30vw]">
        <h1 className="text-xl font-semibold mb-4">Add New Service</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block font-lato font-medium">
            Service Image
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <label htmlFor="name" className="block font-lato font-medium">
            Service Name
          </label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            placeholder="Enter service name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="block font-lato font-medium">
            Service Priority
          </label>
          <input
            type="number"
            name="priority"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            placeholder="Enter service priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          <label htmlFor="desc" className="block font-lato font-medium">
            Service Description
          </label>
          <textarea
            name="description"
            id="desc"
            rows={4}
            className="w-full border-2 border-gray-400 rounded-lg px-3 py-4 outline-none"
            placeholder="Enter service description"
            value={description}
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
    </div>
  );
}

export default ServiceModalComponent;
