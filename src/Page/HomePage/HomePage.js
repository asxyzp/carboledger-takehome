// IMPORTING PACKAGES/MODULES
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Button from "../../Component/Button/Button";
import { Factory } from "@mui/icons-material";
import { Link } from "react-router-dom";

// CUSTOM COMPONENTS
// HOME PAGE CONTAINER COMPONENT
const HomePage = styled(Box)(() => ({
  "&.MuiBox-root": {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  "& .home-page-title": { textAlign: "center", marginBottom: "5px" },
  "& .home-page-subtitle": { textAlign: "center", marginBottom: "10px" },
  "& .home-page-button": { maxWidth: "500px", marginBottom: "30px" },
}));

const Home = () => {
  return (
    <HomePage className="home-page">
      <Typography variant="h4" className="home-page-title">
        Carbon Emission Management
      </Typography>
      <Typography
        className="home-page-subtitle"
        sx={{ textAlign: "center", marginBottom: "10px" }}
      >
        Track, manage, and reduce your carbon emissions
      </Typography>
      <Button
        size="small"
        color="primary"
        variant="contained"
        startIcon={<Factory />}
        className="home-page-button"
        component={Link}
        to="/sheets"
        fullWidth
      >
        Get started
      </Button>
    </HomePage>
  );
};

export default Home;
