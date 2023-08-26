import React from "react";
import { useLoaderData } from "react-router-dom";
import SheetsCell from "../../Cell/SheetsCell/SheetsCell";

const SheetsPage = () => {
  const sheets = useLoaderData();
  return <SheetsCell sheets={sheets} />;
};

export default SheetsPage;
