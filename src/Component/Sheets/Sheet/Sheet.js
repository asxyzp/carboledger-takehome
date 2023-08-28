// IMPORTING MODULES/PACKAGES
import {
  Box,
  Typography,
  Link as MuiLink,
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from "@mui/icons-material";

// INSTANTIATING TIME AGO DEFAULT LOCALE
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

// CUSTOM COMPONENTS

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

const Sheet = ({ sheet }) => {
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
    <Box>
      <Typography variant="h5">Explore sheet</Typography>
      <MuiLink component={Link} to="/" color="inherit">
        <Typography variant="body2">Go back</Typography>
      </MuiLink>

      <Box sx={{ mt: "10px", mb: "15px" }}>
        <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
          {sheet.displayName}
        </Typography>
        <Typography variant="body2">
          Uploaded {timeAgo.format(new Date(sheet.uploadAt))}
        </Typography>
        <Typography variant="body2">
          {(sheet.fileSize / 1024).toFixed(2)} KB, {sheet.data.length - 1} rows
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ mb: "30px", borderRadius: "10px" }}
      >
        <Table sx={{ minWidth: 650 }}>
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
    </Box>
  );
};

export default Sheet;
