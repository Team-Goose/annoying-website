import { useContext, useEffect, useState } from "react";
// import { ItemContext } from "./App";
import ResetItem, { ResetItemProps } from "./ResetItem";

export default function ResetList() {
  const [rows, setRows] = useState<ResetItemProps[]>([
    { reason: "made a spicy pillow", date: "5 minutes" },
    { reason: "started a fire", date: "2 days" },
    { reason: "tried to burn plastic", date: "4 weeks" },
  ]);

  // const itemContext = useContext(ItemContext);

  useEffect(() => {
    if (rows.length > 3) {
      setRows(rows.slice(1));
    }
  }, [rows]);

  // useEffect(() => {}, [itemContext]);

  return (
    <div className="flex flex-col items-center">
      {rows.map((row, i) => (
        <ResetItem key={i} reason={row.reason} date={row.date} />
      ))}
    </div>
  );
}
