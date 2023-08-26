import React from "react";
import { useLoaderData } from "react-router-dom";
import SheetCell from "../../Cell/SheetCell/SheetCell";

const SheetPage = () => {
  const sheet = useLoaderData();
  return <SheetCell sheet={sheet} />;
};

export default SheetPage;
