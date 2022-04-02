import { useEffect, useState } from "react";
import { setListHook } from "./api";
import ResetItem, { ResetItemProps } from "./ResetItem";

export default function ResetList() {
  const [rows, setRows] = useState<ResetItemProps[]>([
    { reason: "made a spicy pillow", date: "2022-04-01 23:42:48.205680" },
    { reason: "started a fire", date: "2022-04-01 23:44:23.082900" },
    { reason: "tried to burn plastic", date: "2022-04-01 23:48:04.240771" },
  ]);

  setListHook((items) => setRows(items));

  useEffect(() => {
    if (rows.length > 3) {
      setRows(rows.slice(1));
    }
  }, [rows]);

  useEffect(() => {
    rows.push({
      reason: "made a spicy pillow",
      date: "2022-04-01 23:42:48.205680",
    });
  });

  return (
    <div className="flex flex-col items-center">
      {rows.map((row, i) => (
        <ResetItem key={i} reason={row.reason} date={row.date} />
      ))}
    </div>
  );
}
