"use client";
import Image from "next/image";
import AnimatedPage from "./(page)/animation/page";
import { useRouter } from "next/navigation";
import Rocket from "./components/animations/rocket";
import { useState } from "react";

export default function Home() {
  const route = useRouter();

  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const handleRoute = () => {
    setButtonClicked(true);
    setTimeout(() => {
      route.push("/animation");
    }, 3000);
  };

  return (
    <div>
      <div className="m-4 rounded-md">
        <Rocket isTakeoff={buttonClicked} />
        <button
          className="bg-blue-500 p-2 rounded-md"
          onClick={() => handleRoute()}
        >
          {" "}
          Click to see demo
        </button>
      </div>
    </div>
  );
}
