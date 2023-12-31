// IMPORTING PACKAGES/MODULES
import { Box, Typography } from "@mui/material";
import React from "react";
import "./navigationLayout.css";
import IconButton from "../../Component/IconButton/IconButton";
import { DarkModeAtom, ModalTypeAtom } from "../../Context/atoms";
import { useRecoilState } from "recoil";
import { DarkMode, Info, LightMode } from "@mui/icons-material";
import { redirect } from "react-router-dom";

export const NavigationLayout = ({ children }) => {
  // GETTING ATOMIC STATES
  const [modalType, setModalType] = useRecoilState(ModalTypeAtom);
  const [isDarkMode, toggleThemeMode] = useRecoilState(DarkModeAtom);

  // METHODS
  /**
   * @name toggleTheme
   * @description METHOD TO TOGGLE THEME
   * @returns {undefined} N/A
   */
  const toggleTheme = () => toggleThemeMode(!isDarkMode);

  /**
   * @name openInfoModal
   * @description METHOD TO OPEN INFO MODAL
   * @returns {undefined} undefined
   */
  const openInfoModal = () => setModalType("info");

  /**
   * @name navigateToHome
   * @description METHOD TO OPEN HOME PAGE
   * @returns {undefined} undefined
   */
  const navigateToHome = () => redirect("/");

  return (
    <Box className="navigation-layout">
      <Box className="navigation-layout-header">
        <Box className="logo-container">
          <Box
            className="logo logo-md"
            sx={(theme) => {
              return {
                border: `3px solid ${
                  theme.palette.mode === "light"
                    ? theme.palette.common.black
                    : theme.palette.common.white
                }`,
              };
            }}
            onClick={navigateToHome}
          ></Box>
          <Typography variant="h5">CarbonEx</Typography>
        </Box>
        <Box className="navigation-layout-actions-container">
          <Box sx={{ mr: "5px" }}>
            <IconButton onClick={openInfoModal}>
              <Info fontSize="medium" />
            </IconButton>
          </Box>
          <IconButton onClick={toggleTheme}>
            {isDarkMode ? (
              <DarkMode fontSize="medium" />
            ) : (
              <LightMode fontSize="medium" />
            )}
          </IconButton>
        </Box>
      </Box>
      <Box className="navigation-layout-body">{children}</Box>
    </Box>
  );
};
