// IMPORTING PACKAGES/MODULES
import { Card, Skeleton, Typography } from "@mui/material";
import React from "react";
import EmptyImg from "../Asset/empty.svg";
import ErrorImg from "../Asset/error.svg";

// CUSTOM COMPONENTS
// CUSTOM CARD COMPONENT
const CustomCard = ({ children }) => {
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
        "& .sheet-cell-img": {
          width: "250px",
          marginBottom: "10px",
        },
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
    <CustomCard>
      <img src={EmptyImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        No sheets found
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Please upload the spreadsheet file (.xlsx)
      </Typography>
    </CustomCard>
  );
};

// LOADING STATE COMPONENT
const Loading = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        borderRadius: "15px",
        height: "330px",
      }}
    />
  );
};

// ERROR STATE COMPONENT
const Error = () => {
  return (
    <CustomCard>
      <img src={ErrorImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Something went wrong
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Apparently we can't load the sheets
      </Typography>
    </CustomCard>
  );
};

const SheetsCell = () => {
  return <Error />;
};

export default SheetsCell;
