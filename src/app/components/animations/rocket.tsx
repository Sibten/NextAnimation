import React, { useEffect, useState } from "react";
import "./rocket.css";
export default function Rocket({ isTakeoff = false }: { isTakeoff: boolean }) {
  const [rocketEffect, setRocketEffect] = useState<boolean>(false);

  const [lunchRocket, setLunchRocket] = useState<boolean>(false);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined = undefined;
    if (isTakeoff) {
      setRocketEffect(true);
      timeout = setTimeout(() => setRocketEffect(false), 2000);
      setTimeout(() => setLunchRocket(true), 1000);
    }

    return () => clearTimeout(timeout);
  }, [isTakeoff]);

  return (
    <div className="flex flex-col">
      <div className="mx-auto w-max">
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/128/5566/5566679.png"
          alt="rocket"
        />
      </div>
      {lunchRocket ? (
        <div className="mx-auto h-4 bg-gray-100 w-8 animate-pulse flame"></div>
      ) : null}
      {rocketEffect ? (
        <>
          <div className="h-24 w-24 effect -z-10 absolute bottom-0 rounded-full bg-gray-200"></div>
          <div className="h-36 mx-10 w-36 effect -z-10 absolute bottom-0 rounded-full bg-gray-200"></div>{" "}
          <div className="h-48 mx-8 w-48 effect -z-10 absolute bottom-0 rounded-full bg-gray-200"></div>{" "}
        </>
      ) : null}
    </div>
  );
}
