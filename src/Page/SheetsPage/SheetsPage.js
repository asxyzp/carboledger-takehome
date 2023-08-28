// IMPORTING MODULES/PACKAGES
import React, { useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Sheets from "../../Component/Sheets/Sheets/Sheets";
import { Box, Input, Typography, styled } from "@mui/material";
import { BackupTable } from "@mui/icons-material";
import readXlsxFile from "read-excel-file";
import Button from "../../Component/Button/Button";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "sonner";
import { createSheet } from "../../Storage/storage";

// CUSTOM COMPONENTS
const UploadContainer = styled(Box)(() => ({
  "&.MuiBox-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0px 15px",
  },
  "& .upload-icon": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  "& .upload-text": {
    marginLeft: "5px",
    fontWeight: "bolder",
  },
  "& .upload-input": {
    visibility: "hidden",
    width: "1px",
  },
}));

const SheetsPage = () => {
  // SETTING LOCAL STATES
  const [sheets, setSheets] = useState(useLoaderData());

  // METHODS
  /**
   * @name handleClick
   * @description EVENT HANDLER FOR UPLOAD BUTTON
   * @returns {undefined} N/A
   */
  const handleClick = () =>
    document.querySelector("input[type='file']").click();

  /**
   * @name handleFileChange
   * @description EVENT HANDLER FOR HANDLING FILE CHANGE
   * @param {*} event EVENT OBJECT
   * @returns {undefined} N/A
   */
  const handleFileChange = async (event) => {
    if (event.target.files.length > 0) {
      const promise = new Promise(async (resolve, reject) => {
        // STORING FILE DATA
        const file = event.target.files[0];
        const fileData = {
          id: uuidv4(),
          fileName: file?.name,
          fileSize: file?.size,
          displayName: file?.name,
          uploadAt: new Date().toISOString(),
          data: null,
        };

        // READING FILE
        await readXlsxFile(file).then(async (rows) => {
          // CHECKING FOR ERRORS
          if (rows.length < 2) {
            reject("It seems that the sheet is empty");
          } else {
            // CHECKING THE NUMBER OF COLUMNS
            if (rows[0].length != 8) {
              reject(
                "It seems like you're missing one of the following columns: purchase id, date, item id, quantity, unit price, total price, supplier name or emission factor"
              );
            }
            // CHECKING THE ORDER OF ROWS
            if (rows[0][0] === "Purchase ID") {
              reject(
                "Column order or name is incorrect. First column should be called 'Purchase ID'."
              );
            } else if (rows[0][1] === "Date") {
              reject(
                "Column order or name is incorrect. Second column should be called 'Date'."
              );
            } else if (rows[0][2] === "Item ID") {
              reject(
                "Column order or name is incorrect. Third column should be called 'Item ID'."
              );
            } else if (rows[0][3] === "Quantity") {
              reject(
                "Column order or name is incorrect. Fourth column should be called 'Quantity'."
              );
            } else if (rows[0][4] === "Unit Price") {
              reject(
                "Column order or name is incorrect. Fifth column should be called 'Unit Price'."
              );
            } else if (rows[0][5] === "Total Price") {
              reject(
                "Column order or name is incorrect. Sixth column should be called 'Total Price'."
              );
            } else if (rows[0][6] === "Supplier Name") {
              reject(
                "Column order or name is incorrect. Seventh column should be called 'Supplier Name'."
              );
            } else if (rows[0][7] === "Emission Factor") {
              reject(
                "Column order or name is incorrect. Eigth column should be called 'Emission Factor'."
              );
            }
          }

          // PARSING FILE
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

          // RESOLVING DATA
          fileData.data = data;
          resolve(fileData);
        });
      });

      // SHOWING TOAST
      toast.promise(promise, {
        loading: "Loading...",
        success: (sheet) => {
          createSheet(sheet);
          setSheets([sheet, ...sheets]);
          return "Data has been added!";
        },
        error: (error) => error,
      });
    }
  };

  return (
    <React.Suspense>
      <UploadContainer>
        <Box className="upload-icon">
          <BackupTable color="primary" />
          <Typography variant="body1" className="upload-text">
            Sheets
          </Typography>
        </Box>
        <Input
          type="file"
          className="upload-input"
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
      </UploadContainer>
      <Await
        resolve={sheets}
        children={(sheets) => <Sheets sheets={sheets} />}
      />
      <Toaster />
    </React.Suspense>
  );
};

export default SheetsPage;
