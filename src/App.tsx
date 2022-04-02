import { useState } from "react";
import AnnoyButton from "./AnnoyButton";
import AnnoyTable from "./AnnoyTable";

export default function App() {
  const [lastFuckUp, setLastFuckUp] = useState("3 days");
  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white justify-center items-center">
      <h1 className="text-4xl font-bold">Reetik breathed {lastFuckUp} ago.</h1>
      <AnnoyButton />
      <AnnoyTable />
    </div>
  );
}
