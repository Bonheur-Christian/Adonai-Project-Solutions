import LandingPageBar from "./LandingPageBar";

function Intro() {
  return (
    <div className="bg-[url('svg/Intro.svg')] h-screen bg-cover bg-fit bg-no-repeat dark:text-black">
      <LandingPageBar />
      <div className="lg:ms-[60rem] sm:text-center lg:text-start sm:p-12">
        <div className=" flex gap-4 pt-44">
          <div>
            <img src="svg/intro1.svg" alt="" className="w-full h-fit pt-3" />
          </div>
          <div>
            <h1 className="lg:text-6xl sm:text-3xl font-bold lg:tracking-wider sm:tracking-normal font-lato lg:w-full sm:w-full sm:flex sm:justify-center items-center">
              You Deserve a Different Kind of Engineering Firm.
            </h1>
            <h1 className="font-lato font-light text-3xl py-12">
              ONE THAT <span className="text-gray-400 font-semibold">ANSWERS YOUR CALLS.</span>
            </h1>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-lg text-white">
          Why Aps?
        </button>
      </div>
    </div>
  );
}

export default Intro;
