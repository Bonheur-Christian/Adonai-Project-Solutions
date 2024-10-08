import { useContext, useEffect, useState } from "react";
import ModalComponent from "./ProjectModal";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import client from "../sanityClient";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { ProjectContext } from "../contexts/projectContext";
import EditProjectModal from "./EditProjectModal";

function ProjectSection({ children }) {
  const [visible, setVisible] = useState(false);
  const { projects, setProjects } = useContext(ProjectContext);
  const [loading, setLoading] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [editVisible, setEditVisible] = useState(false);
  
  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleEditOpen = (id) => {
    setSelectedProjectId(id);
    setEditVisible(true);
  };

  const handleEditClose = () => {
    setSelectedProjectId(null);
    setEditVisible(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    setLoading(true);
    client
      .fetch(
        `*[_type=="project"]{
      _id,
      name,
      image{
      asset->{
      _id,
      url
      }
      }
      }`
      )
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        toast.error("Error in Getting Projects.");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    setLoading(true);
    client
      .delete(id)
      .then(() => {
        toast.success("Project Deleted!");
        setProjects((projects) =>
          projects.slice().filter((item) => item._id !== id)
        );
      })
      .catch((err) => {
        toast.error("Error in Deleting Project");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#F8FBFC] w-[40%] py-12 px-6">
      <div className="flex  justify-between px-6">
        <p className="font-semibold text-xl">{children}</p>
        <div className="flex gap-2">
          <img src="/svg/add.svg" alt="add new item" />
          <button
            className="text-[#4327F4] font-medium text-xl"
            onClick={handleOpen}
          >
            Add
          </button>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="py-6 space-y-4">
        {projects.map((item, index) => (
          <div className="flex justify-between ps-6" key={index}>
            <p className="text-xl font-lato">{item.name}</p>
            <div className="flex gap-5 pe-5">
              <CiEdit
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
                onClick={() => {
                  handleEditOpen(item._id);
                }}
              />
              <MdOutlineDeleteForever
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
                onClick={() => {
                  handleDelete(item._id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <ModalComponent visible={visible} handleClose={handleClose} />
      <EditProjectModal
        visible={editVisible}
        handleClose={handleEditClose}
        projectId={selectedProjectId}
      />
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

export default ProjectSection;
