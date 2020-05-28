import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GroupIcon from "@material-ui/icons/Group";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import InsertChartIcon from "@material-ui/icons/InsertChart";

import ComputerIcon from "@material-ui/icons/Computer";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import StorageIcon from "@material-ui/icons/Storage";

import BarChartIcon from "@material-ui/icons/BarChart";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zoom: "80%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontSize: "12px",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    left: false,
  });
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/" className={classes.link}>
        <ListItem button key={"Dataclan HR"}>
          <ListItemIcon>
            <MenuIcon style={{ color: "#212F3D" }} />
          </ListItemIcon>
          <Typography variant="subtitle1" gutterBottom>
            Dataclan HR
          </Typography>
        </ListItem>
      </Link>

      <Divider />
      <Link to="/" className={classes.link}>
        <ListItem button key={"Dashboard"}>
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Analytics & Reporting
          </Typography>
        </ListItem>
      </Link>
      <Divider />

      <Link to="/cv-bank" className={classes.link}>
        <ListItem button key={"CV Bank"}>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            CV Bank
          </Typography>
        </ListItem>
      </Link>

      <Link to="/recruitment" className={classes.link}>
        <ListItem button key={"Recruitment"}>
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Recruitment
          </Typography>
        </ListItem>
      </Link>
      <Divider />

      <Link to="/appraisal" className={classes.link}>
        <ListItem button key={"Appraisal"}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Appraisal
          </Typography>
        </ListItem>
      </Link>

      <Link to="/attendance" className={classes.link}>
        <ListItem button key={"Attendance"}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Attendance
          </Typography>
        </ListItem>
      </Link>

      <Link to="/exit-process" className={classes.link}>
        <ListItem button key={"Exit process"}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Exit process
          </Typography>
        </ListItem>
      </Link>
      <Divider />

      <Link to="/learning-training" className={classes.link}>
        <ListItem button key={"Learning & Training"}>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Learning & Training
          </Typography>
        </ListItem>
      </Link>

      <Link to="/succession-planning" className={classes.link}>
        <ListItem button key={"Succesion Planning"}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Succession Planning
          </Typography>
        </ListItem>
      </Link>

      <Link to="/csr" className={classes.link}>
        <ListItem button key={"csr"}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Corporate Social Responsibility
          </Typography>
        </ListItem>
      </Link>

      <Divider />

      <Link to="/users" className={classes.link}>
        <ListItem button key={"Users"}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Users
          </Typography>
        </ListItem>
      </Link>
      <Link to="/settings" className={classes.link}>
        <ListItem button key={"Settings"}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Settings
          </Typography>
        </ListItem>
      </Link>
      <Link to="/sign-out" className={classes.link}>
        <ListItem button key={"Sign out"}>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <Typography variant="body2" gutterBottom>
            Sign out
          </Typography>
        </ListItem>
      </Link>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "#212F3D" }}>
        <Toolbar>
          {["left"].map((anchor) => (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
          ))}
          <Typography variant="h5" className={classes.title}>
            Dataclan HR
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
