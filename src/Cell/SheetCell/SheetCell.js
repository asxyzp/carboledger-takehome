// IMPORTING PACKAGES/MODULES
import {
  Box,
  Card,
  Typography,
  LinearProgress as MuiLinearProgress,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ErrorImg from "../../Asset/error.svg";
import EmptyImg from "../../Asset/empty.svg";
import { Description } from "@mui/icons-material";

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
  // console.log(sheet, sheet.data);
  return (
    <>
      {sheet &&
        sheet.data.map((sheetDataElement) => {
          return sheetDataElement.companyName;
        })}
    </>
  );
};

const SheetCell = ({ file, sheet, error }) => {
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    if (file !== null) setLoadingState(true);
    console.log(file, loadingState);
  }, [file]);

  if (file === null) return <Empty />;
  if (error !== "")
    return loadingState ? (
      <Loading file={file} setLoadingState={setLoadingState} />
    ) : (
      <Error error={error} />
    );
  if (sheet !== null)
    return loadingState ? (
      <Loading file={file} setLoadingState={setLoadingState} />
    ) : (
      <Success sheet={sheet} />
    );
  // return <Loading file={file} />;
};

export default SheetCell;
