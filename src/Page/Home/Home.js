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
      <Typography variant="body2" className="home-page-title">
        Carbon Emission Data Management Application
      </Typography>

      <Box className="home-page-sheets-upload-container">
        <Box className="home-page-sheets-upload-icon">
          <BackupTable color="primary" />
          <Typography variant="h6" sx={{ ml: "5px", fontWeight: "bolder" }}>
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
