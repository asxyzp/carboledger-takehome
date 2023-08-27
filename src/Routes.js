// IMPORTING MODULES/PACKAGES
import { ThemeProvider } from "@mui/material/styles";

import React from "react";
import { useRecoilState } from "recoil";
import { DarkModeAtom } from "./Context/atoms";
import { DarkMode, LightMode } from "./Style/Themes";
import { CssBaseline, Skeleton, Typography } from "@mui/material";
import { NavigationLayout } from "./Layout/NavigationLayout/NavigationLayout";
import ModalRouter from "./Component/ModalRouter/ModalRouter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import SheetsPage from "./Page/SheetsPage/SheetsPage";
import SheetPage from "./Page/SheetPage/SheetPage";
import { StateCard } from "./Component/StateCard/StateCard";
import ErrorImg from "./Asset/error.svg";

// LOADER METHODS
/**
 * @name getSheets
 * @description METHOD TO LOAD SHEETS DATA
 * @returns {Object} SheetsData
 */
const getSheets = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 500)
  );
};

/**
 * @name getSheet
 * @description METHOD TO LOAD SHEET DATA
 * @returns {Object} SheetData
 */
const getSheet = async (id) => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve([4, 3, 2, 1]);
    }, 500)
  );
};

// CUSTOM COMPONENTS
// ERROR COMPONENT
export const Error = () => {
  return (
    <StateCard>
      <img src={ErrorImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Whoops!
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", width: "60%", mt: "5px" }}
      >
        Something went wrong. We couldn't load your data.
      </Typography>
    </StateCard>
  );
};

// LOADING COMPONENT
export const Loading = () => {
  return (
    <Skeleton
      variant="rectangular"
      sx={(theme) => {
        return {
          "&.MuiSkeleton-root": {
            padding: "50px 10px",
            borderRadius: "15px",
            minHeight: "75vh",
            border: `1px solid ${theme.palette.divider}`,
          },
        };
      }}
    />
  );
};

const Routes = () => {
  // GETTING ATOMIC STATES
  const [isDarkMode] = useRecoilState(DarkModeAtom);

  // CREATING ROUTER
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/sheets",
      element: <SheetsPage />,
      loader: () => getSheets(),
      errorElement: <Error />,
    },
    {
      path: "/sheets/:sheet_id",
      element: <SheetPage />,
      loader: () => getSheet(),
      errorElement: <Error />,
    },
  ]);

  return (
    <ThemeProvider theme={isDarkMode ? DarkMode : LightMode}>
      <CssBaseline />
      <ModalRouter />
      <NavigationLayout>
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </NavigationLayout>
    </ThemeProvider>
  );
};

export default Routes;
