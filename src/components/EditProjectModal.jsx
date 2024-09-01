import { Backdrop, CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import client from "../sanityClient";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { ProjectContext } from "../contexts/projectContext";

function EditProjectModal({ visible, handleClose, projectId }) {
  if (!visible) return null;

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setProjects } = useContext(ProjectContext);

  useEffect(() => {
    if (projectId) {
      fetchProjects(projectId);
    }
  }, [projectId]);

  const fetchProjects = (id) => {
    setLoading(true);
    client
      .fetch(
        `*[_type == "project" && _id == $id ]{
      _id,
      name,
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
          const project = data[0];
          setName(project.name || "");
          setImage(project.image?.asset?.url || null);
        }
      })
      .catch((err) => {
        toast.error("Failed to get projects, Please try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
      toast.error("All fields Required");
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
        toast.error("Please select an image");
        return;
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

      await client
        .patch(projectId)
        .set(doc)
        .commit()
        .then(() => {
          handleClose();
          toast.success("Project Updated");
          setProjects((projects) =>
            projects.map((project) =>
              project._id === projectId
                ? { ...project, name, image: imageAsset?.url || image }
                : project
            )
          );
        })
        .catch((err) => {
          toast.error("Failed please Try again");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      toast.error("Error in Updating Project");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Edit Project</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
            value={name}
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

export default EditProjectModal;
