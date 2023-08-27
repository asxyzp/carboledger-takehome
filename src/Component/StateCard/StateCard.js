import { Card, useMediaQuery } from "@mui/material";

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
          "& .state-card-image": {
            width: isMobileMode ? "300px" : "400px",
            marginBottom: "10px",
          },
          "& .state-card-title": {
            fontWeight: "bold",
            textAlign: "center",
          },
          "& .state-card-subtitle": {
            textAlign: "center",
            width: "60%",
            marginTop: "5px",
          },
        };
      }}
      elevation={3}
    >
      {children}
    </Card>
  );
};
