import { TypeAnimation } from "react-type-animation";

function AutoType({sequence}) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={10}
      repeat={Infinity}
      className="font-lato text-3xl text-orange-700 pt-32"
    />
  );
}

export default AutoType;
