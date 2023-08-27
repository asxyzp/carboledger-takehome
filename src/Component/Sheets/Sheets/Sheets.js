// IMPORTING MODULES/PACKAGES
import React, { useState } from "react";
import EmptyImg from "../../../Asset/empty.svg";
import { StateCard } from "../../StateCard/StateCard";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { BackupTable, MoreVert, Visibility } from "@mui/icons-material";
import IconButton from "../../IconButton/IconButton";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useNavigate } from "react-router-dom";
import Menu from "../../Menu/Menu";

// INSTANTIATING TIME AGO DEFAULT LOCALE
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

// CUSTOM COMPONENTS
// EMPTY SHEETS COMPONENT
const Empty = () => {
  return (
    <StateCard>
      <img src={EmptyImg} alt="Empty" className="state-card-image" />
      <Typography variant="h4" className="state-card-title">
        No Sheets found
      </Typography>
      <Typography variant="body2" className="state-card-subtitle">
        Please upload a sheet to continue
      </Typography>
    </StateCard>
  );
};

const Data = ({ sheets }) => {
  // SETTING LOCAL STATES
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const open = Boolean(menuAnchorEl);

  // SETTING LOCAL VARIABLES
  const navigate = useNavigate();
  const menuItems = [
    {
      label: "View",
      icon: <Visibility />,
    },
  ];

  // METHODS
  /**
   * @name openMenu
   * @description METHOD TO OPEN MENU
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const openMenu = (event) => setMenuAnchorEl(event.currentTarget);

  /**
   * @name closeMenu
   * @description METHOD TO CLOSE MENU
   * @returns {undefined} undefined
   */
  const closeMenu = () => setMenuAnchorEl(null);

  return (
    <List component={Paper} elevation={3} sx={{ borderRadius: "10px" }}>
      {sheets.map((sheet) => {
        return (
          <ListItem
            secondaryAction={
              <>
                <IconButton edge="end" onClick={openMenu}>
                  <MoreVert />
                </IconButton>
                <Menu
                  open={open}
                  anchorEl={menuAnchorEl}
                  onClose={closeMenu}
                  menuItems={menuItems.map((menuItem) => {
                    if (menuItem.label === "View")
                      return {
                        ...menuItem,
                        onClick: () => navigate(`/sheets/${sheet.id}`),
                      };
                    else {
                      return <></>;
                    }
                  })}
                  className="user-menu"
                />
              </>
            }
          >
            <ListItemAvatar>
              <Avatar variant="square" sx={{ borderRadius: "5px" }}>
                <BackupTable />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={sheet.displayName}
              secondary={timeAgo.format(new Date(sheet.uploadAt))}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

const Sheets = ({ sheets }) => {
  if (sheets.length === 0) return <Empty />;
  else return <Data sheets={sheets} />;
};

export default Sheets;
