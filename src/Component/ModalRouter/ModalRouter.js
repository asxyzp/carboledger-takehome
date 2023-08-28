// IMPORTING PACKAGES/MODULES
import React from "react";
import { ModalTypeAtom } from "../../Context/atoms";
import { useRecoilState } from "recoil";
import InfoModal from "../InfoModal/InfoModal";
import SheetCellEditModal from "../SheetCellEditModal/SheetCellEditModal";

const ModalRouter = () => {
  // GETTING ATOMIC STATES
  const [modalType] = useRecoilState(ModalTypeAtom);

  if (modalType === "info") return <InfoModal />;
  else if (modalType === "sheetcelledit") return <SheetCellEditModal />;
  else return <></>;
};

export default ModalRouter;
