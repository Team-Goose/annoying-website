import { useState } from "react";
import ResetItem, { ResetItemProps } from "./ResetItem";

export default function ResetList() {
  const [rows, setRows] = useState<ResetItemProps[]>([
    { reason: "made a spicy pillow", time: "5 minutes" },
    { reason: "started a fire", time: "2 days" },
    { reason: "tried to burn plastic", time: "4 weeks" },
  ]);

  return (
    <div className="flex flex-col items-center">
      {rows.map((row, i) => (
        <ResetItem key={i} reason={row.reason} time={row.time} />
      ))}
    </div>
  );
}
