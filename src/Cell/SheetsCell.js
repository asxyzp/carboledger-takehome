import { Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import EmptyImg from "../Assets/empty.svg";
import LoadingImg from "../Assets/loading.svg";

const Empty = () => {
  // SETTING MEDIA QUERY
  const isMobileMode = useMediaQuery("(max-width: 650px)");

  return (
    <Card
      sx={{
        "&.MuiCard-root": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 10px",
          borderRadius: "15px",
        },
        "& .sheet-cell-img": {
          width: isMobileMode ? "50%" : "20%",
          marginBottom: "10px",
        },
      }}
      elevation={3}
    >
      <img src={EmptyImg} alt="Empty" className="sheet-cell-img" />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        No sheets found
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Please upload the spreadsheet file (.xlsx)
      </Typography>
    </Card>
  );
};

// const Loading = () => {
//   // SETTING MEDIA QUERY
//   const isMobileMode = useMediaQuery("(max-width: 650px)");

//   return (
//     <Card
//       sx={{
//         "&.MuiCard-root": {
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "50px 10px",
//           borderRadius: "15px",
//         },
//         "& .sheet-cell-img": {
//           width: isMobileMode ? "50%" : "20%",
//           marginBottom: "15px",
//         },
//       }}
//       elevation={3}
//     >
//       <img src={LoadingImg} alt="Empty" className="sheet-cell-img" />
//       <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//         Looking for sheets
//       </Typography>
//       <Typography variant="body2" sx={{ textAlign: "center" }}>
//         Searching through the database
//       </Typography>
//     </Card>
//   );
// };

const SheetsCell = () => {
  return <Empty />;
};

export default SheetsCell;
