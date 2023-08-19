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
import Home from "./Page/Home/Home";

const Routes = () => {
  // GETTING ATOMIC STATES
  const [isDarkMode] = useRecoilState(DarkModeAtom);

  // CREATING ROUTER
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
