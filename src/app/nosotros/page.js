"use client";
import React from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import Provision from "@/components/Provision";
import Prevencion from "@/components/Prevencion";

const Home = () => {
  return (
    <div className="bg-slate-200 w-full">
      <TransitionEffect />
      <NavHome />
      <Provision />
      <Prevencion />
    </div>
  );
};

export default Home;
