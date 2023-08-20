// IMPORTING MODULES/PACKAGES
import { atom } from "recoil";

// STORING DARK MODE INFORMATION
export const DarkModeAtom = atom({
  key: "darkModeAtom",
  default: false,
});

// STORING MODAL TYPE INFORMATION
export const ModalTypeAtom = atom({
  key: "modalModeAtom",
  default: "",
});

// STORING SHEET DATA
export const SheetAtom = atom({
  key: "sheetAtom",
  default: null,
});
