import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NewsModal from "./NewsModal";
import { API_url } from "../constants";
import client from "../sanityClient";
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
function NewsSection({ children }) {
  const [visible, setVisible] = useState(false);
  const [completedProjects, setCompletedProjects] = useState([]);
  const handleOpen = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    fetchCompletedProjects();
  }, []);

  const fetchCompletedProjects = () => {
    client
      .fetch(
        `*[_type=="news"]{
    _id,
    date,
    name,
    description,
    image{
    asset->{
    _id,
    url
    }
    }
    }`
      )
      .then((data) => {
        setCompletedProjects(data);
      })
      .catch((err) => {
        toast.error("Error In getting Completed Projects.");
      });
  };

  const handleDelete = (id) => {
    client
      .delete(id)
      .then(() => {
        fetchCompletedProjects();
        toast.success("Project Deleted");
      })
      .catch((err) => {
        toast.error("Failed Try Again");
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
        {completedProjects.map((item, index) => (
          <div key={index} className="ps-6 flex items-center justify-between ">
            <p className="text-xl">{item.name}</p>
            <p className="text-xl">{item.date}</p>
            <div className="flex gap-5 pe-5">
              <CiEdit
                size={20}
                className="hover:bg-[#0B3757] hover:text-white text-gray-500 hover:rounded-full"
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
      <NewsModal visible={visible} handleClose={handleClose} />
    </div>
  );
}

export default NewsSection;