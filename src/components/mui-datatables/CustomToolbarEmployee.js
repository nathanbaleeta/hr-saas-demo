import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import { Route } from "react-router-dom";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { Typography } from "@material-ui/core";

import EmployeeForm from "../CVBank/EmployeeForm";

const styles = (theme) => ({
  iconButton: {},
  dialogPaper: {},
});

class CustomToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Tooltip title={"Add Loan"}>
          <IconButton className={classes.iconButton} onClick={this.handleOpen}>
            <AddIcon color="default" className={classes.addIcon} />
          </IconButton>
        </Tooltip>

        <Dialog
          id="myDialog"
          maxWidth="xs"
          open={this.state.open}
          aria-labelledby="form-dialog-title"
          onClose={this.handleClose}
        >
          <DialogTitle id="simple-dialog-title" color="primary">
            <Typography component="h1" variant="h5" align="center">
              Add Employee
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Route path="/cv-bank" component={EmployeeForm} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

CustomToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { name: "CustomToolbar" })(CustomToolbar);
