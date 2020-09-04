import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  createStyles,
  Avatar,
  Typography,
} from "@material-ui/core";
import { Navigate } from "../routes/RouteHelper";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { PANEL_ROUTES, Route } from "../routes/RouterConfig";
import { useLocation } from "react-router";
import ChatIcon from "@material-ui/icons/Chat";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Cancel";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MailIcon from "@material-ui/icons/Mail";
import UIAvatar from "./UIAvatar";

const useStyles = makeStyles((theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  })
);

function SideBarItem(props) {
  let location = useLocation();
  return (
    <>
      {/* <AlertModal isOpen={modalIsOpen} closeModal={closeModal} /> */}
      <ListItem
        onClick={() => {
          if (props.link) {
            Navigate(props.link);
          }
        }}
        selected={props.link?.path === location.pathname}
        button
        key={props.text}
      >
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </>
  );
}

export function SideBar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar}>
        <UIAvatar username={"Remy Sharp"} />
      </div>
      <Divider />
      <List>
        <SideBarItem
          link={PANEL_ROUTES.DueToday}
          icon={<AllInboxIcon />}
          text="Due Today"
        />
        <SideBarItem
          icon={<CheckIcon />}
          text="All tasks"
          link={PANEL_ROUTES.AllTasks}
        />
        <SideBarItem
          icon={<CheckCircleIcon />}
          text="Starred"
          link={PANEL_ROUTES.Important}
        />
        <SideBarItem
          icon={<DoneAllIcon />}
          text="Completed"
          link={PANEL_ROUTES.Completed}
        />
        <SideBarItem
          icon={<CancelIcon />}
          text="Trash"
          link={PANEL_ROUTES.Trash}
        />
      </List>
      <Divider />
      <Divider />
      <List>
        <SideBarItem
          //   link={PANEL_ROUTES.OffersFromNotary}
          icon={<AllInboxIcon />}
          text="Logout"
        />
      </List>
    </div>
  );
}
