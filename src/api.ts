import { ResetItemProps } from "./ResetItem";
import * as mqtt from "mqtt";

const client = mqtt.connect(
  "tls://683943b84d234b53a615bdded84e101d.s1.eu.hivemq.cloud:8883", 
  {"username": "reetik", "password": "BullyR33tik",}
);

export function submitReset(reason: string) {
  client.publish("reetik/reset", JSON.stringify({ reason }));
}

export async function resetListener(callback: Function) {
  client.subscribe("resets", () => {
    callback();
  });
}

export async function getList(): Promise<ResetItemProps[]> {
  return [];
}
