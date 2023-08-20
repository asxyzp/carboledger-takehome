// IMPORTING MODULES/PACKAGES
import { atom } from "recoil";

// STORING DARK MODE INFORMATION
export const DarkModeAtom = atom({
  key: "darkModeAtom",
  default: true,
});

// STORING MODAL TYPE INFORMATION
export const ModalTypeAtom = atom({
  key: "modalModeAtom",
  default: "",
});
