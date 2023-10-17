import Rocket from "./components/animations/rocket";
export default function Home() {
  return (
    <div className="w-full">
      <h1 className="fixed text-white p-2 text-sm text-center w-full">
        Hello User, Lunch the button to show demo
      </h1>
      <div className="main-cont">
        <Rocket />
      </div>
    </div>
  );
}
