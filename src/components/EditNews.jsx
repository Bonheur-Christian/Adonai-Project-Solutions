import React, { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { API_url } from "../constants";
import client from "../sanityClient";
import { Backdrop, CircularProgress } from "@mui/material";
import { CompletedProjectContext } from "../contexts/completedProjectContext";

function EditNewsModal({ visible, handleClose, newsId }) {
  if (!visible) return null;

  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setCompletedProjects } = useContext(CompletedProjectContext);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (newsId) {
      fetchNews(newsId);
    }
  }, [newsId]);

  const fetchNews = (id) => {
    setLoading(true)
    client
      .fetch(
        `*[_type == "news" && _id == $id]{
        _id,
        name, 
        date, 
        description, 
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
          const news = data[0];
          setDate(news.date || "");
          setName(news.name || "");
          setDescription(news.description || "");
          setImage(news.image?.asset?.url || null);
        }
      })
      .catch((err) => {
        toast.error("Failed to Get news, Please Try again");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (date.trim() === "" || name.trim() === "" || description.trim() === "") {
      setLoading(false);
      toast.error("All fields are required.");
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
        toast.error("Select Image");
        return;
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

      await client
        .patch(newsId)
        .set(doc)
        .commit()
        .then(() => {
          handleClose();
          setCompletedProjects((completedProjects) =>
            completedProjects.map((completedProject) =>
              completedProject._id === newsId
                ? {
                    ...completedProject,
                    name,
                    date,
                    description,
                    image: imageAsset?.url || image,
                  }
                : completedProject
            )
          );
        })
        .catch((err) => {
          toast.error("Failed to get News, Please Try again");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      toast.error("Failed to update news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[30vw]">
        <h1 className="text-xl font-semibold mb-4">
         Edit Completed Project (News)
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
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            disabled={loading}
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            disabled={loading}
          />
          <label htmlFor="" className="block font-lato font-medium">
            Project Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="border-2 border-gray-400 w-full py-2 px-3 rounded-lg outline-none"
            onChange={handleImageChange}
            disabled={loading}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            disabled={loading}
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

export default EditNewsModal;
