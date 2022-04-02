export interface ResetItemProps {
  date: string;
  reason: string;
}

export default function ResetItem(props: ResetItemProps) {
  return (
    <div>
      Reetik {props.reason} {props.date} ago
    </div>
  );
}
