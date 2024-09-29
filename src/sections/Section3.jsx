import React from "react";
import tradition from "../assets/tradition.jpg";
const Section3 = () => {
  return (
    <section className="mt-10 flex sm:flex-row flex-col justify-center items-center gap-5">
      <div>
        <img src={tradition} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start gap-5 sm:w-[500px] w-[300px] p-6">
        <h1 className="sm:text-4xl text-xl text-center font-bold text-[#06286E]">
          Traditional Ways <br /> of Studying,{" "}
          <span className="text-[#3D6CCA]">Quite Frustrating</span>
        </h1>
        <p className="text-xl">Challenges of Traditional Studying</p>
        <ol style={{ listStyleType: "decimal" }} className="sm:text-xl">
          <li>
            Monotony: Repetitive and unengaging study methods can lead to
            boredom.
          </li>
          <li>
            Passive Learning: Methods like rote memorization often lead to
            shallow understanding.
          </li>
          <li>
            Limited Interaction: Studying alone can limit discussion and
            different perspectives.
          </li>
          <li>
            Time Management: It can be difficult to balance study time with
            other responsibilities.
          </li>
          <li>
            Lack of Resources: Sometimes traditional methods do not provide
            enough variety in materials and perspectives.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Section3;
