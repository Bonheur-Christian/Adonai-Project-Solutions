import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import ServiceSection from "../components/NewService";
import ProjectSection from "../components/NewProject";
import AddressSection from "../components/EditAddress";
import NewsSection from "../components/AddNews";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    const toastId = "logged in";
    toast.dismiss(toastId);
    toast.success("Logged In", { toastId });
  }, []);
  var showDate = new Date();
  var date =
    showDate.toDateString() +
    "      " +
    showDate.getHours() +
    ":" +
    showDate.getMinutes();

  const handleLogOut = () => {
    localStorage.removeItem("code");
    navigate("/")
  };

  return (
    <div className="flex">
      <div className="min-h-screen  bg-[#0B3757] w-[15vw]">
        <h1 className="text-4xl font-bold text-white ps-8 font-montserrat sticky top-0 py-12">
          APS
        </h1>
        <div className="bg-white/30 px-6 py-12 mx-4 rounded-xl fixed bottom-12 space-y-4 w-[13vw]">
          <h1 className="text-xl text-white">Contact Developer</h1>
          <p className="text-gray-400 font-medium">
            Found a bug or any problem that you don’t know about ?
          </p>
          <div className="flex items-center gap-2">
            <a
              htmlFor="dev"
              href="https://www.linkedin.com/feed/"
              className="text-white underline hover:font-medium"
            >
              Hit the Dev
            </a>
            <img src="/svg/arrow.svg" alt="dev seeking" />
          </div>
        </div>
      </div>
      <div className="w-[80vw] ps-12">
        <div className="flex justify-between px-12 border-b py-6 sticky top-0 bg-white">
          <h1 className="text-xl text-gray-500 font-lato font-bold">
            Dashboard
          </h1>
          <p className="text-gray-500 font-semibold">{date}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded-lg flex items-center gap-2"
            onClick={handleLogOut}
          >
            Log out
            <IoMdLogOut className="text-gray-50 font-extrabold" />
          </button>
        </div>
        <div className="ps-6 space-y-2 py-12">
          <p className="text-2xl font-semibold font-lato">Analytic</p>
          <p className="text-xl">Application Numerical Analytics</p>
        </div>
        <div className="flex flex-wrap justify-around gap-12">
          <ProjectSection children={"All Projects"} />
          <ServiceSection children={"Services"} />
          <AddressSection children={"Address"} />
          <NewsSection children={"Completed Projects"} />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        newestOnTop={false}
      />
    </div>
  );
}

export default Dashboard;
