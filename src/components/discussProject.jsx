import { MdEmail } from "react-icons/md";

export default function Discuss() {
  return (
    <div>
      <h2 className="font-lato text-xl text-center">
        Want To Discuss Project?
      </h2>
      <div className="flex justify-center">
        <img src="svg/downArrow.svg" alt="" className="w-auto h-auto" />
      </div>
      <div className="w-full bg-[#054B62] flex justify-center items-center gap-4 text-2xl text-white py-4">
        <p>Reach Out To Our Team. </p>
        <MdEmail />
      </div>
    </div>
  );
}
