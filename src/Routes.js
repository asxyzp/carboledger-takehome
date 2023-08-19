// IMPORTING MODULES/PACKAGES
import { ThemeProvider } from "@mui/material/styles";

import React from "react";
import { useRecoilState } from "recoil";
import { DarkModeAtom } from "./Context/atoms";
import { DarkMode, LightMode } from "./Style/Themes";
import { CssBaseline } from "@mui/material";
import { NavigationLayout } from "./Layout/NavigationLayout/NavigationLayout";
import ModalRouter from "./Component/ModalRouter/ModalRouter";

const Routes = () => {
  // GETTING ATOMIC STATES
  const [isDarkMode] = useRecoilState(DarkModeAtom);

  return (
    <ThemeProvider theme={isDarkMode ? DarkMode : LightMode}>
      <CssBaseline />
      <ModalRouter />
      <NavigationLayout>
        loIncididunt deserunt do id voluptate fugiat occaecat fugiat nisi non
        duis amet amet voluptate labore. Quis sit ad veniam irure consectetur
        sit voluptate fugiat aute nostrud nisi sunt. Veniam reprehenderit aliqua
        officia aliqua mollit ut est. Incididunt enim do culpa cupidatat
        exercitation est eu.
      </NavigationLayout>
    </ThemeProvider>
  );
};

export default Routes;
