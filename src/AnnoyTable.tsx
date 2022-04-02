import { useState } from "react";
import AnnoyRow, { AnnoyRowProps } from "./AnnoyRow";

export default function AnnoyTable() {
  const [rows, setRows] = useState<AnnoyRowProps[]>([
    { time: "5 minutes" },
    { time: "2 days" },
    { time: "4 weeks" },
  ]);

  return (
    <div className="flex flex-col items-center">
      {rows.map((row) => (
        <AnnoyRow time={row.time} />
      ))}
    </div>
  );
}
