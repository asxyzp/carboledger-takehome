import React from "react";
import Modal from "../Modal/Modal";
import { useRecoilState } from "recoil";
import { ModalTypeAtom } from "../../Context/atoms";
import { Box, Typography } from "@mui/material";
import Button from "../Button/Button";

const InfoModal = () => {
  // GETTING ATOMIC STATES
  const [modalType, setModalType] = useRecoilState(ModalTypeAtom);

  return (
    <Modal
      open={modalType === "info"}
      onClose={() => setModalType("")}
      sx={{
        "& .modal-container": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Box className="logo-container">
        <Box
          className="logo logo-lg"
          sx={(theme) => {
            return {
              border: `3px solid ${
                theme.palette.mode === "light"
                  ? theme.palette.common.black
                  : theme.palette.common.white
              }`,
            };
          }}
        ></Box>
        <Typography variant="h4">CarbonEx</Typography>
      </Box>
      <Typography sx={{ mt: "15px", textAlign: "center" }}>
        CarbonEx is a carbon emission data management application. It has been
        built as a take-home assignment for Carboledger&trade;.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: "5px",
          mb: "10px",
          textAlign: "center",
          fontWeight: "bolder",
        }}
      >
        &copy; Aashish Loknath Panigrahi
      </Typography>
      <Button
        variant="contained"
        size="small"
        fullWidth
        onClick={() => setModalType("")}
      >
        Close
      </Button>
    </Modal>
  );
};

export default InfoModal;
