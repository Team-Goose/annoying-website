import { ResetItemProps } from "./ResetItem";
import * as mqtt from "mqtt";
import moment from "moment";
import { Client } from "paho-mqtt";

// FRONTEND HOOOKS
let lastHook = (s: ResetItemProps[]) => {};
let listHook = (s: ResetItemProps[]) => {};

// LIST OF EVENTS TRACKED BY BACKEND, DONT USE THIS DIRECTLY
let eventList: ResetItemProps[] = [];

// DONT TOUCH THIS
interface Hook {
  (s: ResetItemProps[]): void;
}

// FOR FRONTEND TO CALL WHEN RENDERED
export function setLastHook(f: Hook) {
  lastHook = f;
}
export function setListHook(f: Hook) {
  listHook = f;
}

// UPDATE LIST IN FRONTEND STATE

// REPLACE ENTIRE LiST WITH NEW LIST
export function updateList(newList: ResetItemProps[]) {
  eventList = newList;
  listHook(eventList);
  lastHook(eventList);
}

// ADD NEW ITEM TO THE END OF THE LIST
export function addEvent(e: ResetItemProps) {
  eventList.push(e);
  listHook(eventList);
  lastHook(eventList);
}

// CALLED BY FRONTEND WHEN SUBMITTING
export function submitEvent(event: ResetItemProps) {
  // TODO: post to backend here
}

export function deateToReadable(d: string): string {
  return moment(d).fromNow();
}
