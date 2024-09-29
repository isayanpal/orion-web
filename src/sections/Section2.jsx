import { Button } from "@material-tailwind/react";
import React from "react";

const Section2 = () => {
  return (
    <section className="mt-5 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="sm:text-5xl text-3xl font-bold text-[#06286E]">
          Are you really <span className="text-[#3D6CCA]">Motivated</span> to
          study?{" "}
        </h1>
        <p className="text-[#0002119D] sm:leading-8 text-xl">
          Answer these few Questions to know your Motivation Level <br />& Find
          How You can work on Improving or Maintaining it{" "}
        </p>
      </div>

      {/* box */}
      <div className="flex flex-col items-center justify-center bg-[#002777E5] h-[550px] w-full rounded-3xl p-3">
        {/* inner div */}
        <div className="flex flex-col items-center justify-evenly p-5 sm:h-[390px] h-[250px] bg-white rounded-3xl">
          <h1 className="text-[#99C1FF] sm:text-4xl">QUESTION 1 OF 5</h1>
          <p className="text-[#0A2D73] sm:text-xl">
            Do you work hard but still feel disappointed with your grades?
          </p>
          <div className="flex flex-row justify-center items-center gap-5">
            <Button size="lg" className="bg-[#002777E5] rounded-xl">
              Yes
            </Button>
            <Button size="lg" className="bg-[#002777E5] rounded-xl">
              No
            </Button>
          </div>
        </div>
        <p className="text-white sm:text-xl font-medium mt-10 text-sm">
          1250 Students Reported Improvement in their Grades with Orion learning
          Solutions
        </p>
      </div>
    </section>
  );
};

export default Section2;
