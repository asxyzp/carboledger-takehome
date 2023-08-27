// IMPORTING MODULES/PACKAGES
import React from "react";
import EmptyImg from "../../../Asset/empty.svg";
import { StateCard } from "../../StateCard/StateCard";
import { Typography } from "@mui/material";

// CUSTOM COMPONENTS
// EMPTY SHEETS COMPONENT
export const Empty = () => {
  return (
    <StateCard>
      <img src={EmptyImg} alt="Empty" className="state-card-image" />
      <Typography variant="h4" className="state-card-title">
        No Sheets found
      </Typography>
      <Typography variant="body2" className="state-card-subtitle">
        Please upload a sheet to continue
      </Typography>
    </StateCard>
  );
};

const Sheets = ({ sheets }) => {
  if (sheets.length === 0) {
    return <Empty />;
  } else {
    return <>Non-empty</>;
  }
};

export default Sheets;
