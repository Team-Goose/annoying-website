export interface ResetItemProps {
  reason: string;
  time: string;
}

export default function ResetItem(props: ResetItemProps) {
  return (
    <div>
      Reetik {props.reason} {props.time} ago
    </div>
  );
}
