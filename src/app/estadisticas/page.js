"use client";
import React from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";

const Home = () => {
  return (
    <div className="bg-slate-200 w-full">
      <TransitionEffect />
      <NavHome />
    </div>
  );
};

export default Home;
