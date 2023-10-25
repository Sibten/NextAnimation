"use client";
import React from "react";
import "./typewriter.css";
import TypewriterComponent from "typewriter-effect";

export default function Typewriter() {
  return (
    <div className="m-8 flex justify-center">
      <div className="text-4xl text-white">
        <TypewriterComponent
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(type) => {
            type
              .typeString("Hello")
              .changeDeleteSpeed(500)
              .pauseFor(1000)
              .deleteAll()
              .typeString(`<b> Welcomes </b> you`)
              .start();
          }}
        />
      </div>
    </div>
  );
}
