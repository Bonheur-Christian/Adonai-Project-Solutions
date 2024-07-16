import LandingPageBar from "./LandingPageBar";

function Intro() {
  return (
    <div className="bg-[url('svg/Intro.svg')] h-screen bg-cover bg-fit bg-no-repeat dark:text-black">
      <LandingPageBar />
      <div className="lg:ms-[60rem] sm:text-center lg:text-start sm:p-12">
        <h1 className="lg:text-3xl sm:text-3xl font-bold lg:tracking-wider sm:tracking-normal font-lato lg:w-1/2 sm:w-full sm:flex sm:justify-center items-center pt-64">
          You Deserve a Different Kind of Engineering Firm.
        </h1>
        <h1 className="font-lato font-light text-lg py-12">
          ONE THAT ANSWERS YOUR CALLS.
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-lg text-white">
          Why APS?
        </button>
      </div>
    </div>
  );
}

export default Intro;
