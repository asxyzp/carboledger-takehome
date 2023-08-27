// IMPORTING MODULES/PACKAGES
import { ThemeProvider } from "@mui/material/styles";

import React from "react";
import { useRecoilState } from "recoil";
import { DarkModeAtom } from "./Context/atoms";
import { DarkMode, LightMode } from "./Style/Themes";
import { CssBaseline, Skeleton, Typography } from "@mui/material";
import { NavigationLayout } from "./Layout/NavigationLayout/NavigationLayout";
import ModalRouter from "./Component/ModalRouter/ModalRouter";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import SheetsPage from "./Page/SheetsPage/SheetsPage";
import SheetPage from "./Page/SheetPage/SheetPage";
import { StateCard } from "./Component/StateCard/StateCard";
import Localbase from "localbase";
import { getSheet, getSheets } from "./Storage/storage";
import ErrorImg from "./Asset/error.svg";
import NotFoundImg from "./Asset/notfound.svg";

// INITIALISING STORAGE
export const db = new Localbase("db");

// CUSTOM COMPONENTS
// ERROR COMPONENT
export const Error = () => {
  return (
    <StateCard>
      <img src={ErrorImg} alt="Empty" className="state-card-image" />
      <Typography variant="h4" className="state-card-title">
        Whoops!
      </Typography>
      <Typography variant="body2" className="state-card-subtitle">
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

// 404 PAGE COMPONENT
const NotFound = () => {
  return (
    <StateCard>
      <img src={NotFoundImg} alt="Empty" className="state-card-image" />
      <Typography variant="h4" className="state-card-title">
        404
      </Typography>
      <Typography variant="body2" className="state-card-subtitle">
        Whoops! It seems like we couldn't find your page.
      </Typography>
    </StateCard>
  );
};

const Routes = () => {
  // GETTING ATOMIC STATES
  const [isDarkMode] = useRecoilState(DarkModeAtom);

  // CREATING ROUTER
  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>,
      loader: () => redirect("/sheets"),
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
      loader: (request) => getSheet(request?.params?.sheet_id),
      errorElement: <Error />,
    },
    {
      path: "*",
      element: <NotFound />,
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
