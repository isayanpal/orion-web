import React from "react";
import cta1 from "../assets/cta1.jpg";
import cta2 from "../assets/cta2.jpg";
import cta3 from "../assets/cta3.jpg";
import cta4 from "../assets/cta4.jpg";
import cta5 from "../assets/cta5.jpg";
import cta6 from "../assets/cta6.jpg";
const CTA = () => {
  return (
    <section className="p-3 sm:h-[100px] flex sm:flex-row flex-col justify-center item-center gap-2">
      <div className="flex justify-center items-center">
        <p className="text-[#6B6B6B]">
          Industry veterans <br />
          <span className="text-[#06286E] font-bold">believe in us</span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <marquee behavior="" direction="">
          <img src={cta1} alt="" />
        </marquee>
        <marquee behavior="" direction="">
          <img src={cta2} alt="" />
        </marquee>
        <marquee behavior="" direction="">
          <img src={cta3} alt="" />
        </marquee>
        <marquee behavior="" direction="">
          <img src={cta4} alt="" />
        </marquee>
        <marquee behavior="" direction="">
          <img src={cta5} alt="" />
        </marquee>
        <marquee behavior="" direction="">
          <img src={cta6} alt="" />
        </marquee>
      </div>
    </section>
  );
};

export default CTA;
