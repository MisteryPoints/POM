"use client";
import React, { useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion"; 
import { AOffers } from "@/api/API";
import { NavDropdown } from "react-bootstrap";
import { useOnOutsideClick } from "@/components/useOnOutsideClick";
 

const Offers = ({ name }) => {
  return (
    <motion.div
      className={`col-span-1 rounded-[2rem] select-none m-auto drop-shadow-md h-[450px] w-[450px] no-underline relative inline-flex items-center justify-start overflow-hidden transition-all group bg-cover bg-gray-100 `}
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
      {name}
    </motion.div>
  );
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const { innerBorderRef } = useOnOutsideClick(() => setShowCategory(false));

  let offerCatData = AOffers.sort().filter((obj) => {
    if (
      obj["offerType"].toString().toLowerCase().includes(category.toLowerCase()) || 
      obj["subsCategory"].toString().toLowerCase().includes(category.toLowerCase())
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
        obj["offerId"] == search ||
        obj["offerName"].toLowerCase().includes(search.toLowerCase()) ||
        obj["services"].toLowerCase().includes(search.toLowerCase())
        ) {
        return obj;
      }
    });

  return (
    <div className="bg-slate-300 w-full">
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
              SUSCRIPTION MANAGER
            </h1>
          </div>
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
            placeholder="Introduce el Link deseado"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`bg-[#343a40] hover:bg-[#343a40]/90 py-3 min-w-[600px] pl-6 xl:py-4 rounded-r-3xl text-3xl translate-all duration-300 text-gray-300 font-bold border-2 border-[#343a40] border-l-slate-500 focus:!border-2 active:!border-[#343a40] placeholder:italic`}
          />
        </motion.div>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-1 gap-y-8 gap-x-16 mx-24 my-12">
          {category !== "" || search !== ""
            ? offerData.map(({ offerId, offerName }) => (
                <Offers key={offerId} name={offerName}/>
              ))
            : AOffers.map(({ offerId, offerName }) => (
                <Offers key={offerId} name={offerName}/>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
