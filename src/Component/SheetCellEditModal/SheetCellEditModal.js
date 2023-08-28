import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useRecoilState } from "recoil";
import { ModalTypeAtom, SharedDataAtom } from "../../Context/atoms";
import { Box, Typography, form } from "@mui/material";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { Close, Edit } from "@mui/icons-material";
import Input from "../Input/Input";
import { editSheet } from "../../Storage/storage";

const SheetCellEditModal = () => {
  // GETTING ATOMIC STATES
  const [sharedData] = useRecoilState(SharedDataAtom);
  const [modalType, setModalType] = useRecoilState(ModalTypeAtom);

  // SETTING LOCAL VARIABLES
  const index = sharedData?.index + 1;
  const sheetData = sharedData?.sheetData;
  const setSheetData = sharedData?.setSheetData;
  const sheetDataArray = [...sharedData?.sheetData?.data];

  // SETTING LOCAL STATES
  const [formState, setFormState] = useState({
    companyName: sheetData?.data[index].companyName,
    itemId: sheetData?.data[index]?.itemId,
    purchaseDate: sheetData?.data[index]?.purchaseDate,
    quantity: sheetData?.data[index]?.quantity,
    emissionFactor: sheetData?.data[index]?.emissionFactor,
  });

  // METHODS
  /**
   * @name updateFormState
   * @description METHOD TO UPDATE FORM STATE
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const updateFormState = (event) => {
    if (event.target.id === "companyName")
      setFormState({ ...formState, companyName: event.target.value });
    else if (event.target.id === "itemId")
      setFormState({ ...formState, itemId: event.target.value });
    else if (event.target.id === "purchaseDate")
      setFormState({ ...formState, purchaseDate: event.target.value });
    else if (event.target.id === "quantity")
      setFormState({ ...formState, quantity: event.target.value });
    else if (event.target.id === "emissionFactor")
      setFormState({ ...formState, emissionFactor: event.target.value });
  };

  /**
   * @name updateCell
   * @description METHOD TO UPDATE CELL
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const updateCell = async (event) => {
    event.preventDefault();
    sheetDataArray[index] = { ...sheetDataArray[index], ...formState };
    setSheetData({ ...sheetData, data: sheetDataArray });
    await editSheet(sheetData?.id, {
      ...sheetData,
      data: sheetDataArray,
    }).then(() => {
      setModalType("");
    });
  };

  return (
    <Modal
      open={modalType === "sheetcelledit"}
      onClose={() => setModalType("")}
    >
      <Box className="modal-header">
        <Typography variant="h6">Edit Cell</Typography>
        <IconButton onClick={() => setModalType("")}>
          <Close />
        </IconButton>
      </Box>
      <form
        className="modal-body"
        onChange={updateFormState}
        onSubmit={updateCell}
      >
        <Input
          id="companyName"
          defaultValue={formState.companyName}
          margin="small"
          label="Company Name"
          size="small"
          fullWidth
          required
        />
        <Input
          id="itemId"
          defaultValue={formState.itemId}
          margin="small"
          label="Type of Purchase"
          size="small"
          fullWidth
          required
        />
        <Input
          id="purchaseDate"
          defaultValue={formState.purchaseDate}
          margin="small"
          label="Date of Purchase"
          size="small"
          fullWidth
          required
        />
        <Input
          id="quantity"
          defaultValue={formState.quantity}
          margin="small"
          label="Quantity"
          size="small"
          fullWidth
          required
        />
        <Input
          id="emissionFactor"
          defaultValue={formState.emissionFactor}
          margin="medium"
          label="Emission Factor"
          size="small"
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          fullWidth
          startIcon={<Edit />}
        >
          Update cell
        </Button>
      </form>
    </Modal>
  );
};

export default SheetCellEditModal;
