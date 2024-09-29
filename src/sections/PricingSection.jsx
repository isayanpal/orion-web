import { Button } from "@material-tailwind/react";
import React from "react";
import { PriceCard } from "../components/PriceCard";

const PricingSection = () => {
  return (
    <section className="mt-10 flex flex-col justify-center items-center gap-10">
      <h1 className="text-xl sm:text-4xl text-[#06286E] font-bold">
        Clear, <span className="text-[#3D6CCA]">Affordable</span> Pricing{" "}
      </h1>
      <p className="text-md sm:text-xl text-[#0002119D]">
        Start my 14-day free trial today – no credit card required.
      </p>
      <Button className="bg-[#06286E] px-4 rounded-md">
        Start My free trial Now
      </Button>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-5">
        <PriceCard />
        <PriceCard />
      </div>
    </section>
  );
};

export default PricingSection;
