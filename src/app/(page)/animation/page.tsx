"use client";
import Card from "@/app/components/card";
import "./animation.css";
import React, { useEffect, useRef, useState } from "react";

export default function AnimatedPage() {
  let MSG = useRef("Welcome User");

  const [array, setArray] = useState<Array<string>>([]);

  const [flippedIndex, setFlippedIndex] = useState<number>(-1);

  useEffect(() => {
    MSG.current = MSG.current.replace(" ", "");
    setArray(MSG.current.split(""));
  }, []);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined = undefined;
    timer = setTimeout(() => {
      if (array.length == flippedIndex) {
        clearTimeout(timer);
        return;
      }
      setFlippedIndex(flippedIndex + 1);
    }, 850);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <img
        src="https://cdn-icons-png.flaticon.com/128/1374/1374694.png"
        alt="rocket"
        className="rocket-down w-12 h-16 rotate-180 md:rotate-90 mx-8 absolute"
      />
      {flippedIndex == -1 ? (
        <div className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full bg-gray-400 animate-ping"></div>
      ) : null}
      <div className="flex flex-col align-middle">
        <img
          src="https://cdn-icons-png.flaticon.com/128/8753/8753024.png"
          alt="sorry"
          className="w-16 h-16 my-4 mx-auto"
          width={4}
          height={4}
        />
        <div className="flex flex-wrap p-2 justify-center">
          {array.map((s, i) => (
            <>
              <Card text={s.toUpperCase()} isFlip={i == flippedIndex}></Card>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
