import { atom } from "recoil";
import { position } from "./interfaces";

export const currentLocationAtom = atom<position>({
  key: "currentLocation",
  default: {
    longitude: 126.8682,
    latitude: 37.5179,
  },
});
