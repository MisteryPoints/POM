"use client";
import React, { useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { AOffers } from "@/api/API";
import { NavDropdown } from "react-bootstrap";
import { useOnOutsideClick } from "@/components/useOnOutsideClick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Offers = ({
  offer,
  name,
  type,
  cat,
  priority,
  rollover,
  services,
  mb,
}) => {
  return (
    <motion.div
      className={`col-span-1 rounded-[2rem] p-4 px-6 select-none m-auto drop-shadow-md min-h-[280px] w-[300px] overflow-hidden transition-all relative bg-cover bg-gray-100 break-words`}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.6,
          duration: 0.6,
        },
      }}
      viewport={{ once: true }}
    >
      <h1 className="text-xl font-bold text-center w-full mt-[10px]">
        Offer ID: {offer}
      </h1>
      <h2 className="text-sm font-semibold text-center w-full mt-[10px]">
        {name}
      </h2>
      <h2
        className={`text-sm font-semibold text-center mt-[10px] p-2 rounded-xl absolute top-5 left-5 ${
          type == "PKG"
            ? "bg-sky-200"
            : type == "PLAN"
            ? "bg-red-500 text-white"
            : type == "PYG"
            ? "bg-violet-500 text-white"
            : ""
        }`}
      >
        {type}
      </h2>
      <h2
        className={`text-sm font-semibold text-center mt-[10px] p-2 bg-sky-200 rounded-xl absolute bottom-2 right-2 ${
          cat == "POSTPAID"
            ? "bg-violet-600 text-white"
            : cat == "PREPAID"
            ? "bg-teal-500 text-white"
            : ""
        }`}
      >
        {cat}
      </h2>
      <h2 className="text-sm font-semibold text-center w-full mt-[10px]">
        {rollover !== "NA"
          ? rollover / 1024 / 1024 / 1024 >= 1
            ? "Rollover: " + rollover / 1024 / 1024 / 1024 + " GB"
            : "Rollover: " + rollover / 1024 / 1024 + " MB"
          : ""}
      </h2>
      <h2 className="text-sm font-semibold text-center w-full mt-[10px]">
        {services == "NA" ? "" : services}
      </h2>
      <div className="flex gap-4">
        <h2 className="text-sm font-semibold text-center w-full mt-[10px]">
          {mb / 1000 >= 1 ? mb / 1000 : mb} {mb / 1000 >= 1 ? "GB" : "MB"}
        </h2>
        <h2 className="text-sm font-semibold text-end w-full mt-[10px]">
          {Math.round((mb / 1000) * 1024 * 1024 * 1024)} Bytes
        </h2>
      </div>
      <h2 className="text-sm font-semibold text-start w-full mt-[10px] ">
        Prioridad: {priority}
      </h2>
    </motion.div>
  );
};

const Home = () => {
  const [calculo, setCalculo] = useState("");
  const [search, setSearch] = useState("");
  const [searchID, setSearchID] = useState("");
  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const { innerBorderRef } = useOnOutsideClick(() => setShowCategory(false));

  let offerCatData = AOffers.sort().filter((obj) => {
    if (
      (obj["offerType"]
        .toString()
        .toLowerCase()
        .includes(category.toLowerCase()) ||
        obj["subsCategory"]
          .toString()
          .toLowerCase()
          .includes(category.toLowerCase())) &&
      obj["offerId"].toString().includes(searchID)
    ) {
      return obj;
    }
  });

  let offerData = offerCatData
    .sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .filter((obj) => {
      if (
        obj["offerName"].toLowerCase().includes(search.toLowerCase()) ||
        obj["services"].toLowerCase().includes(search.toLowerCase())
      ) {
        return obj;
      }
    });

  return (
    <div className="bg-slate-300 w-full">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        limit={3}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <TransitionEffect />
      <NavHome />
      <div className="mx-24 mt-0 justify-center gap-x-5 gap-y-6">
        <motion.div
          className="select-none m-auto duration-300"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <div
            style={{
              background:
                "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)",
            }}
            className="m-20"
          >
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
              SUBSCRIPTION MANAGER
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="select-none m-auto bg-gradient-to-br from-teal-500 via-sky-700 to-sky-400 mb-4"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center mix-blend-lighten font-extrabold text-6xl bg-slate-300 m-auto w-full uppercase">
            Cálculo de Rollover
          </h1>
        </motion.div>
        <motion.div
          className="select-none m-auto mb-4 flex justify-center gap-4"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <input
            type="number"
            placeholder="Coloque Balance en GB"
            value={calculo}
            onChange={(e) => setCalculo(e.target.value)}
            className={`bg-[#343a40] hover:bg-[#343a40]/90 py-3 min-w-[450px] max-w-[450px] pl-6 xl:py-4 text-3xl translate-all duration-300 text-gray-300 font-bold border-2 border-[#343a40] rounded-2xl focus:!border-2 active:!border-[#343a40] placeholder:italic [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
          />
          <motion.div
            className={`flex justify-center items-center text-center bg-white rounded-3xl min-w-[100px] ${
              calculo > 0 ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            whileTap={{ scale: calculo == "" ? 1 : 0.9 }}
            onClick={() => {
              if (calculo == "") return;
              navigator.clipboard.writeText(calculo * 1024 * 1024);
              toast.success("Cálculo de Rollover copiado Correctamente!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
              });
            }}
          >
            <h2 className="text-2xl font-bold px-3 m-0">
              {calculo !== "" ? Math.round(calculo * 1024 * 1024) : ""}
            </h2>
          </motion.div>
        </motion.div>
        <motion.div
          className="select-none m-auto bg-gradient-to-br from-red-700 via-purple-800 to-violet-600 mb-4"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center mix-blend-lighten font-extrabold text-6xl bg-slate-300 m-auto w-full uppercase">
            Consulta de Offers
          </h1>
        </motion.div>
        <motion.div
          className="flex rounded-full w-full justify-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <NavDropdown
            ref={innerBorderRef}
            title={
              <p
                className={`${
                  showCategory ? "bg-[#343a40]/90" : ""
                } text-center bg-[#343a40] hover:bg-[#343a40]/90 min-w-[230px] xl:!py-[30px]  rounded-l-3xl text-2xl m-0 text-gray-300 font-bold translate-all duration-300 `}
              >
                {category ? category : "Todas"}
              </p>
            }
            variant="flat"
            drop="up-centered"
            menuVariant="dark"
            show={showCategory}
            onClick={() => setShowCategory(!showCategory)}
          >
            <NavDropdown.Item
              onClick={() => setCategory("")}
              className="pr-2 pl-3 min-w-[200px]"
            >
              Todas
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => setCategory("PLAN")}
              className="pr-2 pl-3 min-w-[200px]"
            >
              Offer PLAN
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => setCategory("PKG")}
              className="pr-2 pl-3 min-w-[200px]"
            >
              Offer PKG
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => setCategory("PYG")}
              className="pr-2 pl-3 min-w-[200px]"
            >
              Offer PYG
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => setCategory("POSTPAID")}
              className="pr-2 pl-3 min-w-[200px]"
            >
              Tipo Postpaid
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => setCategory("PREPAID")}
              className="pr-2 pl-3 min-w-[200px]"
            >
              Tipo Prepaid
            </NavDropdown.Item>
            {/* <NavDropdown.Item
              onClick={() => setCategory("Otros")}
              className="pr-2 pl-3 min-w-[200px]"
            >
              Tipo Granel
            </NavDropdown.Item> */}
          </NavDropdown>
          <input
            type="text"
            placeholder="Offer ID"
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
            className={`bg-[#343a40] hover:bg-[#343a40]/90 py-3 min-w-[250px] max-w-[250px] pl-6 xl:py-4 text-3xl translate-all duration-300 text-gray-300 font-bold border-2 border-[#343a40] border-l-slate-500 focus:!border-2 active:!border-[#343a40] placeholder:italic`}
          />
          <input
            type="text"
            placeholder="Detalles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`bg-[#343a40] hover:bg-[#343a40]/90 py-3 min-w-[600px] pl-6 xl:py-4 rounded-r-3xl text-3xl translate-all duration-300 text-gray-300 font-bold border-2 border-[#343a40] border-l-slate-500 focus:!border-2 active:!border-[#343a40] placeholder:italic`}
          />
        </motion.div>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 md:grid-cols-1 gap-y-8 gap-x-16 mx-24 my-12">
          {category !== "" || search !== "" || searchID !== ""
            ? offerData.map(
                ({
                  offerId,
                  offerName,
                  offerType,
                  subsCategory,
                  priority,
                  maxRollover,
                  services,
                  sizeMB,
                }) => (
                  <Offers
                    key={offerId}
                    offer={offerId}
                    name={offerName}
                    type={offerType}
                    cat={subsCategory}
                    priority={priority}
                    rollover={maxRollover}
                    services={services}
                    mb={sizeMB}
                  />
                )
              )
            : AOffers.slice(0, 20).map(
                ({
                  offerId,
                  offerName,
                  offerType,
                  subsCategory,
                  priority,
                  maxRollover,
                  services,
                  sizeMB,
                }) => (
                  <Offers
                    key={offerId + " " + priority}
                    offer={offerId}
                    name={offerName}
                    type={offerType}
                    cat={subsCategory}
                    priority={priority}
                    rollover={maxRollover}
                    services={services}
                    mb={sizeMB}
                  />
                )
              )}
        </div>
      </div>
    </div>
  );
};

export default Home;
