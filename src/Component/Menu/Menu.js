// IMPORTING PACKAGES/MODULES
import {
  styled,
  Menu as MuiMenu,
  Paper,
  MenuItem as MuiMenuItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Typography,
} from "@mui/material";

// CUSTOM COMPONENTS
// CUSTOM MENU COMPONENT
const CustomMenu = styled(MuiMenu)(() => ({
  "& .MuiList-root": {
    minWidth: "100px",
    padding: "5px",
  },
  "& .MuiMenu-paper": {
    borderRadius: "10px",
  },
}));
// CUSTOM MENU ITEM COMPONENT
const CustomMenuItem = styled(MuiMenuItem)(() => ({
  "&.MuiMenuItem-root": {
    borderRadius: "5px",
    padding: "5px",
    display: "flex",
    minWidth: "unset",
    minHeight: "20px",
  },
}));
// CUSTOM LIST ITEM COMPONENT
const CustomListItemIcon = styled(MuiListItemIcon)(() => ({
  "&.MuiListItemIcon-root": {
    minWidth: "unset",
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiSvgIcon-root": {
    height: "20px",
    width: "20px",
  },
}));
// CUSTOM LIST ITEM TEXT COMPONENT
const CustomListItemText = styled(MuiListItemText)(() => ({
  "&.MuiListItemText-root": {
    flexGrow: 1,
    textAlign: "left",
    borderRadius: "5px",
  },
}));

const Menu = ({ anchorEl, open, onClose, menuItems, ...props }) => {
  return (
    <Paper>
      <CustomMenu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        {...props}
        className={(props.className ? props.className : "") + " menu"}
      >
        {menuItems &&
          menuItems.map((menuItem, index) => {
            return (
              <CustomMenuItem onClick={menuItem.onClick} key={index}>
                {menuItem.icon && (
                  <CustomListItemIcon>{menuItem.icon}</CustomListItemIcon>
                )}
                {menuItem.label && (
                  <CustomListItemText>
                    <Typography variant="body2">{menuItem.label}</Typography>
                  </CustomListItemText>
                )}
              </CustomMenuItem>
            );
          })}
      </CustomMenu>
    </Paper>
  );
};

export default Menu;
