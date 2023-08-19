// IMPORTING PACKAGES/MODULES
import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "../../Component/Button/Button";
import { BackupTable } from "@mui/icons-material";
import "./home.css";
import SheetsCell from "../../Cell/SheetsCell";

const Home = () => {
  return (
    <Box className="home-page">
      <Typography className="home-page-title">
        Upload the relevant spreadsheet file and explore the carbon emission
        data
      </Typography>

      <Box className="home-page-sheets-upload-container">
        <Box className="home-page-sheets-upload-icon">
          <BackupTable color="primary" />
          <Typography variant="h6" sx={{ ml: "5px" }}>
            Sheets
          </Typography>
        </Box>
        <Button variant="contained" color="primary" size="xs">
          Upload (.xlsx)
        </Button>
      </Box>

      <SheetsCell />
    </Box>
  );
};

export default Home;
