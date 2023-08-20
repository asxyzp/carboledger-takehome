// IMPORTING PACKAGES/MODULES
import { Card, Skeleton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import EmptyImg from "../../Asset/empty.svg";
import ErrorImg from "../../Asset/error.svg";

// CUSTOM COMPONENTS
// CUSTOM CARD COMPONENT
export const StateCard = ({ children }) => {
  // SETTING MEDIA QUERY
  const isMobileMode = useMediaQuery("(max-width: 600px)");

  return (
    <Card
      sx={(theme) => {
        return {
          "&.MuiCard-root": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 10px",
            borderRadius: "15px",
            minHeight: "75vh",
            border: `1px solid ${theme.palette.divider}`,
          },
          "& .sheet-cell-img": {
            width: isMobileMode ? "300px" : "400px",
            marginBottom: "10px",
          },
        };
      }}
      elevation={3}
    >
      {children}
    </Card>
  );
};

// STATE COMPONENTS
// EMPTY STATE COMPONENT
const Empty = () => {
  return (
    <StateCard>
      <img src={EmptyImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        No sheets found
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Please upload the spreadsheet file (.xlsx)
      </Typography>
    </StateCard>
  );
};

// LOADING STATE COMPONENT
const Loading = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={(theme) => {
        return {
          borderRadius: "15px",
          height: "75vh",
          border: `1px solid ${theme.palette.divider}`,
        };
      }}
    />
  );
};

// ERROR STATE COMPONENT
const Error = () => {
  return (
    <StateCard>
      <img src={ErrorImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Something went wrong
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Apparently we can't load the sheets
      </Typography>
    </StateCard>
  );
};

const SheetsCell = () => {
  return <Empty />;
};

export default SheetsCell;
