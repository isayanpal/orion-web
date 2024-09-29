import React from "react";
import circle from "../assets/circle.jpg";

const ProblemSection = () => {
  return (
    <section className="mt-10 flex sm:flex-col justify-center items-center gap-5">
      <h1 className="sm:text-4xl text-xl text-center font-bold text-[#06286E]">
        <span className="text-[#3D6CCA]">Our Solution</span> to your Study
        Problems{" "}
      </h1>
      <div className="text-xl flex sm:flex-row flex-col justify-evenly gap-10">
        <p>Not well Marks</p>
        <p className="text-[#7153FF]">No Proper Time table</p>
        <p>Average Exams performance</p>
      </div>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-2">
        <div>
          {" "}
          <img src={circle} alt="" />
        </div>
        <div className="mt-5 flex flex-col items-center justify-center gap-5 w-[350px]">
          <h1 className="sm:text-4xl text-xl text-center font-bold text-[#06286E]">
            Problem in Creating and Following Time Table
          </h1>
          <p className="text-xl text-center font-bold text-[#06286E]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, praesentium assumenda.{" "}
          </p>
          <p className="text-xl text-center font-bold text-[#06286E]">
            Ullam, atque voluptate quisquam sequi nam vitae repellat commodi
            omnis recusandae exercitationem. Amet sint libero, atque obcaecati
            corporis veritatis!
          </p>
          <p className="text-xl text-center font-bold text-[#06286E]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, praesentium assumenda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
