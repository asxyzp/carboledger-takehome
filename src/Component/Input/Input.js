// IMPORTING PACKAGES/MODULES
import {
  InputLabel,
  Box as MuiBox,
  FormHelperText as MuiFormHelperText,
  OutlinedInput as MuiInput,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// CUSTOM COMPONENTS
// CUSTOM BOX COMPONENT
const CustomBox = styled(MuiBox)(() => ({
  "&.MuiOutlinedInput-margin-small": {
    marginBottom: "5px",
  },
  "&.MuiOutlinedInput-margin-medium": {
    marginBottom: "10px",
  },
  "&.MuiOutlinedInput-margin-large": {
    marginBottom: "20px",
  },
}));

// CUSTOM BOX COMPONENT
const CustomInputLabel = styled(InputLabel)(() => ({
  "&.MuiInputLabel-root": {
    marginBottom: "2.5px",
  },
  "& .MuiInputLabel-required": {
    fontWeight: "bolder",
  },
}));

// CUSTOM INPUT COMPONENT
const CustomInput = styled(MuiInput)(({ theme }) => ({
  // ROOT STYLES
  "&.MuiOutlinedInput-root": {
    borderRadius: "10px",
  },
  "&.MuiOutlinedInput-root:hover": {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
  },

  // SIZE STYLES
  "&MuiInputBase-sizeSmall": {
    padding: "5px",
  },

  // ADORNMENT STYLES
  "&.MuiInputBase-adornedStart .MuiSvgIcon-root": {
    marginLeft: "10px",
    marginRight: "10px",
  },
  "&.MuiInputBase-adornedEnd .MuiSvgIcon-root": {
    marginLeft: "10px",
    marginRight: "10px",
  },

  // ICON STYLES
  "&.MuiInputBase-colorPrimary.Mui-focused .MuiSvgIcon-root": {
    color: theme.palette.primary.main,
  },
  "&.MuiInputBase-colorSecondary.Mui-focused .MuiSvgIcon-root": {
    color: theme.palette.secondary.main,
  },
  "&.MuiInputBase-colorError.Mui-focused .MuiSvgIcon-root": {
    color: theme.palette.error.main,
  },
  "&.MuiInputBase-colorInfo.Mui-focused .MuiSvgIcon-root": {
    color: theme.palette.info.main,
  },
  "&.MuiInputBase-colorSuccess.Mui-focused .MuiSvgIcon-root": {
    color: theme.palette.success.main,
  },
  "&.Mui-error .MuiSvgIcon-root": {
    color: `${theme.palette.error.main}!important`,
  },

  // FOCUSED STYLES
  "&.MuiInputBase-colorPrimary.Mui-focused": {
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
  "&.MuiInputBase-colorSecondary.Mui-focused": {
    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
  },
  "&.MuiInputBase-colorInfo.Mui-focused": {
    boxShadow: `0 0 5px ${theme.palette.info.main}`,
  },
  "&.MuiInputBase-colorError.Mui-focused": {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
  },
  "&.MuiInputBase-colorSuccess.Mui-focused": {
    boxShadow: `0 0 5px ${theme.palette.success.main}`,
  },
  "&.MuiError.Mui-focused": {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
  },
}));

// CUSTOM FORM HELPER TEXT COMPONENT
const CustomFormHelperText = styled(MuiFormHelperText)(() => ({
  "&.MuiFormHelperText-root": {
    margin: "10px 0px",
    textAlign: "center",
  },
}));

const Input = ({ label, margin, errorText, formHelperText, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = "";
  if (margin === "small") marginClass = "MuiOutlinedInput-margin-small";
  else if (margin === "medium") marginClass = "MuiOutlinedInput-margin-medium";
  else if (margin === "large") marginClass = "MuiOutlinedInput-margin-large";

  return (
    <CustomBox className={marginClass}>
      {label && (
        <CustomInputLabel>
          <Typography variant="body2">
            {label}
            {props.required && (
              <Typography
                component="span"
                color="error"
                className="MuiInputLabel-required"
              >
                *
              </Typography>
            )}
          </Typography>
        </CustomInputLabel>
      )}
      <CustomInput {...props} notched={false} />
      {formHelperText && !errorText && (
        <CustomFormHelperText>
          <Typography variant="body2">{formHelperText}</Typography>
        </CustomFormHelperText>
      )}
      {errorText && (
        <CustomFormHelperText component="div">
          <Typography variant="body2" sx={{ color: "error.main" }}>
            {errorText}
          </Typography>
        </CustomFormHelperText>
      )}
    </CustomBox>
  );
};
export default Input;
