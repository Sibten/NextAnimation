import Rocket from "./components/animations/rocket";
import Typewriter from "./components/animations/typewriter";
export default function Home() {
  return (
    <div className="w-full">
      {/* Rocket Lunch - Uncomment the  */}
      {/* <h1 className="fixed text-white p-2 text-sm text-center w-full">
        Hello, Lunch the button to read message
      </h1>
      <div className="main-cont">
        <Rocket />
      </div> */}
      {/* Typewriter */}
      <div>
        <Typewriter />
      </div>
      <div className="fixed bottom-1 text-center w-full text-white text-xs">
        {" "}
        &copy; Design by Sibten
      </div>
    </div>
  );
}
