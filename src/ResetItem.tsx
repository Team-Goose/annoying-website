import { deateToReadable } from "./api";

export interface ResetItemProps {
  date: string;
  reason: string;
}

export default function ResetItem(props: ResetItemProps) {
  return (
    <div>
      Reetik {props.reason} {deateToReadable(props.date)}
    </div>
  );
}
