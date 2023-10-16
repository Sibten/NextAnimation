"use client";
import React, { useState } from "react";
import "./index.css"; // Import your CSS file

export default function Card({
  text,
  isFlip,
}: {
  text: string;
  isFlip: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  React.useEffect(() => {
    if (isFlip) setIsFlipped(true);
  }, [isFlip]);
  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>Flip</p>
        </div>
        <div className="flip-card-back">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
