import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Badge, Container } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { SideBar } from "../components/SideBar";
import { Switch } from "react-router";
import Page from "../routes/Page";
import { PANEL_ROUTES } from "../routes/RouterConfig";
import { AppBarContext } from "../context/AppBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    grow: {
      flexGrow: 1,
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      zIndex: 1101,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
      },
    },
    typography: {
      padding: theme.spacing(2),
      color: "#000000",
      fontSize: 16,
      letterSpacing: -0.5,
      wordSpacing: -0.3,
    },
    date: {
      fontSize: 14,
      color: "rgba(0, 0, 0, 0.54)",
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const { title } = useContext(AppBarContext);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event) => {
    setPopupOpen(event.currentTarget);
  };

  const handleClose = () => {
    setPopupOpen(null);
  };

  const open = Boolean(popupOpen);

  return (
    <Container style={{ padding: 0 }}>
      <div className={classes.root}>
        <CssBaseline />

        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <SideBar />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <SideBar />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {Object.values(PANEL_ROUTES).map((route) => {
              return (
                <Page
                  title={route.title}
                  key={route.path}
                  exact={route.exact}
                  component={route.component}
                  path={route.path}
                />
              );
            })}
          </Switch>
        </main>
      </div>
    </Container>
  );
}
