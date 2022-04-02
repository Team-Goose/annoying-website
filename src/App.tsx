import { createContext, useContext, useState } from "react";
import { deateToReadable, getList, resetListener } from "./api";
import BigRedButton from "./BigRedButton";
import { ResetItemProps } from "./ResetItem";
import ResetList from "./ResetList";

// export const ItemContext = createContext<{ s: string; f: Function }>({
//   s: "",
//   f: () => {},
// });

export default function App() {
  // const [items, setItems] = useState<ResetItemProps[]>([]);

  // getList().then((items) => setItems(items));

  const [lastResetTime, setLastResetTime] = useState<ResetItemProps>({
    date: "2022-04-01 23:48:04.240771",
    reason: "",
  });
  resetListener(setLastResetTime);

  return (
    // <ItemContext.Provider value={{ s: lastResetTime, f: setLastResetTime }}>
    <div className="w-screen h-screen flex flex-col bg-gray-900 text-white justify-center items-center">
      <h1 className="text-4xl font-bold">
        Reetik has gone {deateToReadable(lastResetTime.date)} without breaking
        something.
      </h1>
      <BigRedButton />
      <ResetList />
    </div>
    // </ItemContext.Provider>
  );
}
