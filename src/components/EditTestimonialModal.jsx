import React, { useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import client from "../sanityClient";
import { Backdrop, CircularProgress } from "@mui/material";
import { TestimonialContext } from "../contexts/TestimonialContext";

function EditTestimonialModal({ visible, handleClose, testimonialId }) {
  if (!visible) return null;

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { setTestimonials } = useContext(TestimonialContext);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    fetchTestimonials(testimonialId);
  }, [testimonialId]);

  const fetchTestimonials = (id) => {
    setLoading(true);
    client
      .fetch(
        `*[_type == "testimonials" &&  _id == $id]{
        _id,
        name,
        role, 
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
          const testimonials = data[0];
          setName(testimonials.name || "");
          setRole(testimonials.role || "");
          setDescription(testimonials.description || "");
          setImage(testimonials.image?.asset?.url || null);
        }
      })
      .catch((err) => {
        toast.error("Failed, Please Try Again");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || description.trim() === "" || role.trim() === "") {
      setLoading(false);
      toast.error("All field are required");
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

      await client
        .patch(testimonialId)
        .set(doc)
        .commit()
        .then(() => {
          handleClose();
          toast.success("Testimonial Updated");
          setTestimonials((testimonials) =>
            testimonials.map((testimonial) =>
              testimonial._id === testimonialId
                ? {
                    ...testimonial,
                    name,
                    description,
                    role,
                    image: imageAsset?.url || image,
                  }
                : testimonial
            )
          );
        })
        .catch((err) => {
          toast.error("Failed To update Testimonial, please try again!");
        });
    } catch (err) {
      toast.error("Failed, Please Try again");
    } finally {
      
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div className="relative bg-white rounded-lg shadow-lg p-6  w-[30vw]">
        <h1 className="text-xl font-semibold mb-4">Edit Testimonial</h1>
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
            value={name}
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
            value={role}
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
            value={description}
          ></textarea>
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white px-4 py-2">
              Save Testimonials
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

export default EditTestimonialModal;
