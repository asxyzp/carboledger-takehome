// IMPORTING MODULES/PACKAGES
import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import Sheets from "../../Component/Sheets/Sheets/Sheets";

const SheetsPage = () => {
  const sheets = useLoaderData();

  return (
    <React.Suspense>
      <Await
        resolve={sheets}
        children={(sheets) => <Sheets sheets={sheets} />}
      />
    </React.Suspense>
  );
};

export default SheetsPage;
