// IMPORTING PACKAGES/MODULES
import React from "react";
import { ModalTypeAtom } from "../../Context/atoms";
import { useRecoilState } from "recoil";
import InfoModal from "../InfoModal/InfoModal";

const ModalRouter = () => {
  // GETTING ATOMIC STATES
  const [modalType] = useRecoilState(ModalTypeAtom);

  if (modalType === "") return <></>;
  else if (modalType === "info") return <InfoModal />;
};

export default ModalRouter;
