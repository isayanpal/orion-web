import React from "react";
import hero from "../assets/hero.jpg";
import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center sm:flex-row flex-col gap-2">
      {/* left side */}
      <div className="p-3 flex flex-col gap-3 items-start sm:w-[720px]">
        <h1 className="sm:text-4xl sm:leading-10 text-xl font-bold">
          The only learning platform that helps you score better marks and
          support self-growth.
        </h1>
        <p className="text-xl sm:leading-8">
          Study with a self-aware adaptive system, understand, remember, and
          master subjects without worry, and know your academic strengths and
          weaknesses to truly succeed.
        </p>
        <div className="flex flex-row items-center justify-center gap-5">
          <Button className="bg-[#06286E]">Start Now – It’s FREE</Button>
          <Button className="bg-inherit text-[#598FFF] border border-[#598FFF]">
            Book a Demo
          </Button>
        </div>
      </div>

      {/* right side */}
      <div>
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Hero;
