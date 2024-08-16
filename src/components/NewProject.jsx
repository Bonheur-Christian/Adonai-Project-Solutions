import { useEffect, useState } from "react";
import ModalComponent from "./ProjectModal";
import { toast, ToastContainer } from "react-toastify";
import { API_url } from "../constants";
import client from "../sanityClient";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function ProjectSection({ children }) {
  const [visible, setVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const handleOpen = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
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
      });
  };

  const handleDelete = (id) => {
    client
      .delete(id)
      .then(() => {
        fetchProjects();
        toast.success("Project Deleted!");
      })
      .catch((err) => {
        toast.error("Error in Deleting Project");
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
              />
              <MdOutlineDeleteForever
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
                onClick={()=>{
                  handleDelete(item._id)
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <ModalComponent visible={visible} handleClose={handleClose} />
    </div>
  );
}

export default ProjectSection;
