"use client";
import Card from "@/app/components/card";
import React, { useEffect, useState } from "react";

export default function AnimatedPage() {
  let MSG = "Welcome User";

  const [array, setArray] = useState<Array<string>>([]);

  const [flippedIndex, setFlippedIndex] = useState<number>(0);

  useEffect(() => {
    MSG = MSG.replace(" ", "");
    setArray(MSG.split(""));
  }, []);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined = undefined;
    timer = setTimeout(() => {
      if (array.length == flippedIndex) {
        clearTimeout(timer);
        return;
      }
      setFlippedIndex(flippedIndex + 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-wrap">
      <img
        src="https://cdn-icons-png.flaticon.com/128/8753/8753024.png"
        alt="sorry"
      />
      {flippedIndex}
      {array.map((s, i) => (
        <>
          <Card text={s.toUpperCase()} isFlip={i == flippedIndex}></Card>
        </>
      ))}
    </div>
  );
}
