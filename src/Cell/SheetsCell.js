import { NoteAdd } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import React from "react";

const Empty = () => {
  return (
    <Card
      sx={{
        "&.MuiCard-root": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 10px",
        },
      }}
      elevation={0}
    >
      <NoteAdd color="primary" sx={{ fontSize: "5em" }} />
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
