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

// STORING DATA TO SHARED BETWEEN COMPONENTS SUCH AS MODAL AND OTHER COMPONENTS
export const SharedDataAtom = atom({
  key: "sharedDataAtom",
  default: null,
});
