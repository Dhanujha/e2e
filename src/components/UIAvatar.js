import React from "react";
import {
  Typography,
  Avatar,
  makeStyles,
  createStyles,
  Divider,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function UIAvatar(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography
        style={{
          alignContent: "center",
          alignItems: "center",
          width: "100%",
          height: 60,
          display: "inline-flex",
        }}
        color="primary"
        variant="subtitle1"
      >
        <Avatar alt={props.username} style={{ margin: "5px 10px 5px 10px" }} />
        <div className={classes.address}>
          {"Remy Sharp"}
          <ArrowDropDownIcon className={classes.icon} />
        </div>
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    address: {
      display: "flex",
      alignItems: "center",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);
