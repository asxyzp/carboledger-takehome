// IMPORTING MODULES/PACKAGES
import { ThemeProvider } from "@mui/material/styles";

import React from "react";
import { useRecoilState } from "recoil";
import { DarkModeAtom } from "./Context/atoms";
import { DarkMode, LightMode } from "./Style/Themes";
import { CssBaseline } from "@mui/material";
import { NavigationLayout } from "./Layout/NavigationLayout/NavigationLayout";
import ModalRouter from "./Component/ModalRouter/ModalRouter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import SheetsPage from "./Page/SheetsPage/SheetsPage";
import SheetPage from "./Page/SheetPage/SheetPage";

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
      loader: () => {
        return { a: "a" };
      },
    },
    {
      path: "/sheets/:sheet_id",
      element: <SheetPage />,
      loader: () => {
        return { b: "b" };
      },
    },
  ]);

  return (
    <ThemeProvider theme={isDarkMode ? DarkMode : LightMode}>
      <CssBaseline />
      <ModalRouter />
      <NavigationLayout>
        <RouterProvider router={router} />
      </NavigationLayout>
    </ThemeProvider>
  );
};

export default Routes;
