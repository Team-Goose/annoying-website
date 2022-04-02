import { useState } from "react";
import BigRedButton from "./BigRedButton";
import ResetList from "./ResetList";

export default function App() {
  const [lastResetTime, setLastResetTime] = useState("3 days");
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-900 text-white justify-center items-center">
      <h1 className="text-4xl font-bold">
        Reetik has gone {lastResetTime} without breaking something.
      </h1>
      <BigRedButton />
      <ResetList />
    </div>
  );
}
