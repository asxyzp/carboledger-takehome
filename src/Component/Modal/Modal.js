// IMPORTING PACKAGES/MODULES
import React from "react";

import { Box, Modal as MuiModal, styled } from "@mui/material";

// CUSTOM COMPONENTS
const CustomModal = styled(MuiModal)(({ theme }) => ({
  "&.MuiModal-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
  },
  "& .modal-container": {
    minWidth: "400px",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "25px",
    borderRadius: "10px",
    background: theme.palette.background.paper,
  },
}));

const Modal = ({ open, onClose, children, ...props }) => {
  return (
    <CustomModal open={open} onClose={onClose} hideBackdrop={true} {...props}>
      <Box className="modal-container">{children}</Box>
    </CustomModal>
  );
};

export default Modal;
