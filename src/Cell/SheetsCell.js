import { Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import EmptyImg from "../Assets/empty.svg";

const Empty = () => {
  // SETTING MEDIA QUERY
  const isMobileMode = useMediaQuery("(max-width: 650px)");

  return (
    <Card
      sx={{
        "&.MuiCard-root": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 10px",
          borderRadius: "15px",
        },
        "& .empty-sheet-img": {
          width: isMobileMode ? "50%" : "20%",
          marginBottom: "10px",
        },
      }}
      elevation={3}
    >
      <img src={EmptyImg} alt="Empty" className="empty-sheet-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        No sheets found
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Please upload the spreadsheet file (.xlsx)
      </Typography>
    </Card>
  );
};

const SheetsCell = () => {
  return <Empty />;
};

export default SheetsCell;
