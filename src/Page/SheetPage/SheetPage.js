// IMPORTING MODULES/PACKAGES
import React from "react";
import { Await, useLoaderData } from "react-router-dom";
import Sheet from "../../Component/Sheets/Sheet/Sheet";

const SheetPage = () => {
  // GETTING LOADER DATA
  const sheet = useLoaderData();

  return (
    <React.Suspense>
      <Await resolve={sheet} children={(sheet) => <Sheet sheet={sheet} />} />
    </React.Suspense>
  );
};

export default SheetPage;
