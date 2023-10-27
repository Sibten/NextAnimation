"use client";
import React, { useState } from "react";
import "./typewriter.css";
import Monkey from "./monkey";
import { IoCall, IoVideocam } from "react-icons/io5";

export default function Typewriter() {
  const [callMonkey, setCallMonkey] = useState<boolean>(false);

  const [startTyping, setStartTyping] = useState<boolean>(false);

  const USER = "Krishna";

  return (
    <div className="">
      <div className="bg-gray-900 p-2 rounded-b-md text-white flex justify-between items-center">
        <h1 className="font-bold">{USER}</h1>
        <div className="flex">
          <IoCall className="m-2" />
          <IoVideocam className="m-2" />
        </div>
      </div>
      <div className="mx-auto w-max">
        {callMonkey ? (
          <button
            className="bg-black mx-auto text-white p-2 rounded-full my-4"
            onClick={() => {
              setCallMonkey(false);
              setStartTyping(false);
            }}
          >
            Click to Back
          </button>
        ) : (
          <button
            className="bg-black mx-auto text-white p-2 rounded-full my-4"
            onClick={() => setCallMonkey(true)}
          >
            Click to Read
          </button>
        )}
      </div>
      <Monkey
        visibleMonkey={callMonkey}
        callBack={(flag: boolean) => setStartTyping(flag)}
        message={`Hello! My Name is Chimpoo! I'm an assistant monkey of sibten. I'm Specially
        designed for you to give a message! Here is message. Please read below`}
        title="Chimpoo"
      />
      {startTyping && callMonkey ? (
        <Monkey
          visibleMonkey={true}
          position="right"
          message="Dear, I really really sorry once again for previous experience from my side. This is dedicated effort only for you! Please accept my sincere apologies."
          title="Message"
        />
      ) : null}
    </div>
  );
}
