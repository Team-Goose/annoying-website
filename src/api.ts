import { ResetItemProps } from "./ResetItem";
import * as mqtt from "mqtt";
import moment from "moment";

const client = mqtt.connect(
  "tls://683943b84d234b53a615bdded84e101d.s1.eu.hivemq.cloud:8883",
  { username: "reetik", password: "BullyR33tik", protocol: "mqtts" }
);

export function submitReset(reason: string) {
  client.publish("reetik/reset", JSON.stringify({ reason }));
}

export async function resetListener(callback: Function) {
  client.subscribe("resets", () => {});
}

export async function getList(): Promise<ResetItemProps[]> {
  client.subscribe("reetik/need10", (err, granted) => {
    console.log(granted);
    return []; //return array generated in the callback
  });
  client.publish("reetik/need10", "gimme");
  return []; // remove this
}

export function deateToReadable(d: string): string {
  return moment(d).fromNow();
}
