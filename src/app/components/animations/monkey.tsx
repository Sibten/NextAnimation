import React from "react";
import TypewriterComponent from "typewriter-effect";

export default function Monkey({
  image = "https://cdn-icons-png.flaticon.com/256/7346/7346581.png",
  visibleMonkey,
  callBack,
  message,
  title,
  position = "left",
}: {
  image: string;
  visibleMonkey: boolean;
  callBack?: Function;
  message: string;
  title?: string;
  position?: "left" | "right";
}) {
  return (
    <>
      <div
        className={`${visibleMonkey ? "opacity-100" : "opacity-0"} flex ${
          position == "right" ? "flex-row-reverse" : "flex-row"
        } w-full md:w-max mx-auto items-center p-2 transition-opacity duration-1000`}
      >
        <img src={image} alt="chimpoo" className={"w-28 md:w-48"} />
        <div className="relative rounded-3xl bg-gradient-to-r bg  from-green-400 to-[#ed76a684] p-2 md:p-4 text-sm md:text-xl">
          {title && <h2 className="font-bold">{title}</h2>}
          {visibleMonkey ? (
            <TypewriterComponent
              onInit={(typing) => {
                typing
                  .typeString(message)
                  .typeString(".")
                  .callFunction(() => {
                    if (callBack) callBack(true);
                  })
                  .start();
              }}
              options={{
                delay: 50,
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
