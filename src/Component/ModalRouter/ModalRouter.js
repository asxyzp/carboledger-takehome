// IMPORTING PACKAGES/MODULES
import React from "react";
import { ModalTypeAtom } from "../../Context/atoms";
import { useRecoilState } from "recoil";

const ModalRouter = () => {
  // GETTING ATOMIC STATES
  const [modalType] = useRecoilState(ModalTypeAtom);

  if (modalType === "") return <></>;
};

export default ModalRouter;
