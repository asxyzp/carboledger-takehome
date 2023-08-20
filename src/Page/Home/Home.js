// IMPORTING PACKAGES/MODULES
import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../Component/Button/Button";
import { BackupTable } from "@mui/icons-material";
import SheetCell from "../../Cell/SheetCell/SheetCell";
import "./home.css";
import { SheetAtom } from "../../Context/atoms";
import { useRecoilState } from "recoil";
import readXlsxFile from "read-excel-file";

const Home = () => {
  // SETTING LOCAL VARIABLES
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  // GETTING ATOMIC STATES
  const [sheet, setSheet] = useRecoilState(SheetAtom);

  // METHODS
  /**
   * @name handleClick
   * @description EVENT HANDLER FOR UPLOAD BUTTON
   * @returns {undefined} N/A
   */
  const handleClick = () => {
    setFile(null);
    setError("");
    document.querySelector("input[type='file']").click();
  };

  /**
   * @name handleFileChange
   * @description EVENT HANDLER FOR HANDLING FILE CHANGE
   * @param {*} event EVENT OBJECT
   * @returns {undefined} N/A
   */
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      parseFile(event.target.files[0]);
    }
  };

  // METHODS
  /**
   * @name checkError
   * @description METHOD TO CHECK ERROR
   * @param {*} rows ROW DATA
   * @returns {undefined} N/A
   */
  const checkError = (rows) => {
    // CHECKING SIZE
    if (rows.length < 2) setError("It seems that the sheet is empty");
    else {
      // CHECKING THE NUMBER OF COLUMNS
      if (rows[0].length < 8) {
        setError(
          "It seems like you're missing one of the following columns: Purchase ID, Purchase Date, Item ID, Quantity, Unit Price, Total Price, Supplier Name or Emission Factor"
        );
      }
    }
  };

  /**
   * @name parseFile
   * @description METHOD TO PARSE FILE
   * @param {*} file FILE OBJECT
   * @returns {undefined} N/A
   */
  async function parseFile(file) {
    await readXlsxFile(file)
      .then((rows) => {
        checkError(rows);
        const data = rows.map((row) => {
          return {
            purchaseId: row[0],
            purchaseDate: row[1],
            itemId: row[2],
            quantity: row[3],
            unitPrice: row[4],
            totalPrice: row[5],
            companyName: row[6],
            emissionFactor: row[7],
          };
        });
        setSheet({ name: file?.name, size: file?.size, data });
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <Box className="home-page">
      <Typography variant="body2" className="home-page-title">
        Carbon Emission Data Management Application
      </Typography>
      <Box className="home-page-sheet-upload-container">
        <Box className="home-page-sheet-upload-icon">
          <BackupTable color="primary" />
          <Typography variant="body1" sx={{ ml: "5px", fontWeight: "bolder" }}>
            Sheet
          </Typography>
        </Box>
        <Input
          type="file"
          sx={{ visibility: "hidden", width: "1px" }}
          onChange={handleFileChange}
          inputProps={{
            accept: ".xlsx",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="xs"
          onClick={handleClick}
        >
          Upload (.xlsx)
        </Button>
      </Box>
      <SheetCell file={file} sheet={sheet} error={error} />
    </Box>
  );
};

export default Home;
