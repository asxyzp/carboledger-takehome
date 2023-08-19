import { Card as MuiCard, styled } from "@mui/material";

const Card = styled(MuiCard)(({ theme }) => ({
  "&.MuiCard-root": {
    borderRadius: "10px",
    padding: "10px",
  },
}));

export default Card;
