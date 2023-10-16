"use client";
import Image from "next/image";
import AnimatedPage from "./(page)/animation/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const handleRoute = () => {
    route.push("/animation");
  };

  return (
    <div>
      <div className="m-4 rounded-md">
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
