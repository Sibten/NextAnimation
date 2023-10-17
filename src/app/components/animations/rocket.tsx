"use client";
import React, { useEffect, useState } from "react";
import "./rocket.css";

export default function Rocket() {
  const [ignitionOn, setIgnition] = useState<boolean>(false);

  const [takeofRocket, setTakeOff] = useState<boolean>(false);

  useEffect(() => {
    if (ignitionOn) {
      setTimeout(() => {
        setTimeout(() => {
          setIgnition(false);
        }, 500);
        setTakeOff(true);
      }, 1000);
    }
  }, [ignitionOn]);

  return (
    <>
      {/* Rocket */}
      <div
        className={`absolute bottom-[3.1rem] flex  justify-center ${
          takeofRocket ? "flex-col" : ""
        } align-middle w-full`}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/1374/1374694.png"
          alt="rocket"
          className="w-24 mx-auto ans"
        />
        {takeofRocket ? (
          <div className="flame w-8 h-2 mx-auto bg-white"></div>
        ) : null}{" "}
        {ignitionOn ? (
          <>
            {" "}
            <div className="w-24 h-24   bg-gray-50 absolute rounded-full -z-10 mt-6 ignition"></div>
            <div className="w-48 h-48   bg-gray-50 absolute rounded-full -z-10 mt-8 ignition"></div>
            <div className="w-36 h-36   bg-gray-50 absolute rounded-full -z-10 mt-2 ignition"></div>
          </>
        ) : null}
      </div>
      {/* Controls */}
      <div className="absolute bottom-2 flex justify-center w-full">
        <button
          className="bg-yellow-500 p-2 rounded-md font-nunito font-bold tracking-wider text-black"
          onClick={() => setIgnition(true)}
        >
          {" "}
          Lunch Rocket{" "}
        </button>
      </div>
    </>
  );
}
