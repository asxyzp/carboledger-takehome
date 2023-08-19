import { Card as MuiCard, styled } from "@mui/material";

const Card = styled(MuiCard)(({ theme }) => ({
  "&.MuiCard-root": {
    borderRadius: "15px",
    padding: "10px",
  },
}));

export default Card;
