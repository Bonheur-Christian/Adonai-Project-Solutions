import React, { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import client from "../sanityClient";
import { Backdrop, CircularProgress } from "@mui/material";
import { ServiceContext } from "../contexts/ServiceContext";

function EditServiceModal({ visible, handleClose, serviceId }) {
  if (!visible) return null;
  const { setServices } = useContext(ServiceContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [priority, setPriority] = useState("");
  const [loading, setLoading] = useState(false);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (serviceId) {
      fetchServices(serviceId);
    }
  }, [serviceId]);
  const fetchServices = (id) => {
    setLoading(true);

    client
      .fetch(
        `*[_type=="service" && _id == $id]{
    _id, 
    name, 
    description, 
    priority,
    image{
    asset->{
    _id,
    url
    }
    }
    }`,
        { id }
      )
      .then((data) => {
        if (data.length > 0) {
          const services = data[0];
          setName(services.name || "");
          setDescription(services.description || "");
          setImage(services.image?.asset?.url || null);
          setPriority(services.priority || "");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (name.trim() === "" || description.trim() === "") {
      setLoading(false);
      toast.error("All fields are required");
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

      await client
        .patch(serviceId)
        .set(doc)
        .commit()
        .then(() => {
          handleClose();
          toast.success("Service Updated");
          setServices((services) =>
            services.map((service) =>
              service._id === serviceId
                ? {
                    ...service,
                    name,
                    description,
                    priority,
                    image: imageAsset?.url || image,
                  }
                : service
            )
          );
        })
        .catch((err) => {
          toast.error("Failed to get Service, Please Try Again");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      toast.error("error in saving service");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div className="relative bg-white rounded-lg shadow-lg p-6  w-[30vw]">
        <h1 className="text-xl font-semibold mb-4">Edit Service</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="block font-lato font-medium">
            Service Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={loading}
          />
          <label htmlFor="name" className="block font-lato font-medium">
            Service Name
          </label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-400 px-3 py-2 w-full rounded-lg outline-none"
            placeholder="Enter service name"
            value={name}
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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

export default EditServiceModal;
