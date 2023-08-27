"use client";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-200 w-full">
      <TransitionEffect />
      <NavHome />
    </div>
  );
};

export default Home;
