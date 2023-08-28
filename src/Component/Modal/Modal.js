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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    maxWidth: "350px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    borderRadius: "10px",
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
  },
  "& .modal-header": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  "& .modal-body": {
    width: "100%",
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
