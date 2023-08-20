// IMPORTING PACKAGES/MODULES
import {
  Box,
  Card,
  Typography,
  LinearProgress as MuiLinearProgress,
  styled,
  useMediaQuery,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  useTheme,
  IconButton,
  TablePagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ErrorImg from "../../Asset/error.svg";
import EmptyImg from "../../Asset/empty.svg";
import {
  Description,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from "@mui/icons-material";

// SETTING VARIABLE
// STORING STEPS DATA
const StepsData = [
  {
    start: 0,
    stop: 25,
    steps: 5,
    time: 2,
    text: "Uploading the file",
  },
  {
    start: 25,
    stop: 50,
    steps: 5,
    time: 2,
    text: "Parsing the file",
  },
  {
    start: 50,
    stop: 100,
    steps: 5,
    time: 2,
    text: "Processing the file",
  },
];

// CUSTOM COMPONENTS
// CUSTOM CARD COMPONENT
export const StateCard = ({ children }) => {
  // SETTING MEDIA QUERY
  const isMobileMode = useMediaQuery("(max-width: 600px)");

  return (
    <Card
      sx={(theme) => {
        return {
          "&.MuiCard-root": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px 10px",
            borderRadius: "15px",
            minHeight: "75vh",
            border: `1px solid ${theme.palette.divider}`,
          },
          "& .sheet-cell-img": {
            width: isMobileMode ? "300px" : "400px",
            marginBottom: "10px",
          },
        };
      }}
      elevation={3}
    >
      {children}
    </Card>
  );
};

// CUSTOM LINEAR PROGRESS COMPONENT
export const LinearProgress = styled(MuiLinearProgress)(() => ({
  "&.MuiLinearProgress-root": {
    minWidth: "200px",
    width: "50%",
    borderRadius: "9999px",
  },
}));

// CUSTOM COMPONENT TO HANDLE PAGINATION
const TablePaginationActions = ({ count, page, rowsPerPage, onPageChange }) => {
  // METHODS
  /**
   * @name handleFirstPageButtonClick
   * @description METHOD TO HANDLE FIRST PAGE BUTTON CLICK
   * @param {*} event EVENT OBJECT
   * @returns {undefined} N/A
   */
  const handleFirstPageButtonClick = (event) => onPageChange(event, 0);

  /**
   * @name handleBackButtonClick
   * @description METHOD TO HANDLE BACK BUTTON CLICK
   * @param {*} event EVENT OBJECT
   * @returns {undefined} N/A
   */
  const handleBackButtonClick = (event) => onPageChange(event, page - 1);

  /**
   * @name handleNextButtonClick
   * @description METHOD TO HANDLE NEXT BUTTON CLICK
   * @param {*} event EVENT OBJECT
   * @returns {undefined} N/A
   */
  const handleNextButtonClick = (event) => onPageChange(event, page + 1);

  /**
   * @name handleFirstPageButtonClick
   * @description METHOD TO HANDLE LAST PAGE BUTTON CLICK
   * @param {*} event EVENT OBJECT
   * @returns {undefined} N/A
   */
  const handleLastPageButtonClick = (event) =>
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0}>
        <FirstPage />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        <LastPage />
      </IconButton>
    </Box>
  );
};

// STATE COMPONENTS
// EMPTY STATE COMPONENT
const Empty = () => {
  return (
    <StateCard>
      <img src={EmptyImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        No sheet found
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Please upload the spreadsheet file (.xlsx)
      </Typography>
    </StateCard>
  );
};

// LOADING STATE COMPONENT
const Loading = ({ file, setLoadingState }) => {
  // SETTING LOCAL STATE
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // SIMULATING LINEAR PROGRESS
  useEffect(() => {
    // EXECUTING INCREMENTAL PROGRESS FUNCTION
    const incrementProgress = () => {
      if (currentStep >= StepsData.length) {
        setLoadingState(false);
        return; // STOP IF THE STEPS ARE COMPLETED
      }
      const { start, stop, steps, time } = StepsData[currentStep];
      const stepSize = (stop - start) / steps;
      const timeInterval = (time * 1000) / steps;

      setProgress(start); // SET INIT VALUE

      let current = start;

      const interval = setInterval(() => {
        current += stepSize;
        if (current <= stop) {
          setProgress(current);
        } else {
          setProgress(stop);
          clearInterval(interval);
          setCurrentStep(currentStep + 1); // INCREASING STEP
        }
      }, timeInterval);
    };

    incrementProgress(); // STARTING PROGRESS SIMULATION
  }, [currentStep]);

  return (
    <StateCard>
      <Description sx={{ fontSize: "7.5em" }} color="primary" />
      <Typography sx={{ fontWeight: "bolder" }}>{file?.name}</Typography>
      <Typography variant="body2">
        {(file?.size / 1024).toFixed(2)} KB
      </Typography>
      <Box sx={{ mt: "10px" }}></Box>
      <LinearProgress variant="determinate" value={progress} />
      <Typography variant="body2" color="disabled" sx={{ mt: "5px" }}>
        {StepsData[currentStep]?.text}
      </Typography>
    </StateCard>
  );
};

// ERROR STATE COMPONENT
const Error = ({ error }) => {
  return (
    <StateCard>
      <img src={ErrorImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Please check your spreadhseet
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", width: "60%", mt: "5px" }}
      >
        {error}
      </Typography>
    </StateCard>
  );
};

const Success = ({ sheet }) => {
  // SETTING LOCAL STATES
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // SETTING LOCAL VARIABLES
  // AVOIDING LAYOUT JUMP AT THE END
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sheet.data.length) : 0;

  // METHODS
  /**
   * @name setChangePage
   * @description METHOD TO CHANGE PAGE VALUE
   * @param {*} event EVENT OBJECT
   * @param {*} newPage NEW PAGE NO.
   * @returns {undefined} N/A
   */
  const setChangePage = (event, newPage) => setPage(newPage);

  /**
   * @name setChangePageRows
   * @description METHOD TO CHANGE PAGE ROW VALUE
   * @param {*} event EVENT OBJECT
   * @returns {undefined} N/A
   */
  const setChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ mb: "30px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Type of purchase</TableCell>
            <TableCell align="center">Date of purchase</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Company name</TableCell>
            <TableCell align="center">Emission factor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* SELECTING 10 ROWS PER PAGE */}
          {(rowsPerPage > 0
            ? sheet.data
                .slice(1)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : sheet.data.slice(1)
          ).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.itemId}
              </TableCell>
              <TableCell align="center">{row.purchaseDate}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.companyName}</TableCell>
              <TableCell align="center">{row.emissionFactor}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={3}
              count={sheet.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={setChangePage}
              onRowsPerPageChange={setChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const SheetCell = ({ file, sheet, error }) => {
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    if (file !== null) setLoadingState(true);
    console.log(file, loadingState);
  }, [file]);

  // EMPTY STATE
  if (file === null) {
    return <Empty />;
  }
  // LOADING STATE => ERROR STATE
  if (error !== "") {
    return loadingState ? (
      <Loading file={file} setLoadingState={setLoadingState} />
    ) : (
      <Error error={error} />
    );
  }
  // LOADING STATE => SUCCESS STATE
  if (sheet !== null) {
    return loadingState ? (
      <Loading file={file} setLoadingState={setLoadingState} />
    ) : (
      <Success sheet={sheet} />
    );
  }
};

export default SheetCell;
