import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

import { titles } from "../common/titleList";
import { genders } from "../common/genderList";
import { maritalStatuses } from "../common/maritalStatusList";

import firebase from "../config/firebase";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },
});

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      firtname: "",
      lastname: "",
      title: "",
      sex: "",
      maritalStatus: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  capitalize(str) {
    let lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  // remove commas before saving to firebase
  removeCommas = (num) => {
    //Convert number to string before attempting string manipulation
    let str = num.toString();

    // Check if string contains comma before attempting to sanitize
    let result = str.includes(",") ? str.replace(/,/g, "") : str;
    return Number(result);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // get our form data out of state
    const employee = {
      firstname: this.capitalize(this.state.firstname),
      lastname: this.capitalize(this.state.lastname),
      title: this.state.title,
      sex: this.state.sex,
      maritalStatus: this.state.maritalStatus,
      created: new Date().toLocaleString("en-GB", {
        timeZone: "Africa/Nairobi",
      }),
    };

    console.log(employee);

    //Save Employee module
    const employeeRef = firebase.database().ref("employee");
    employeeRef.push(employee);

    //Clear the Employee form inputs
    this.setState({
      firstname: "",
      lastname: "",
      title: "",
      sex: "",
      maritalStatus: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { firstname, lastname, title, sex, maritalStatus } = this.state;

    return (
      <div className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Autobiography
          </Typography>
          <Grid container spacing={1}>
            <Grid item lg={6} xs={12} sm={12}>
              <TextField
                required
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={this.onChange}
                label="Firstname"
                fullWidth
                margin="normal"
                autoComplete="off"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>
            <Grid item lg={6} xs={12} sm={12}>
              <TextField
                required
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={this.onChange}
                label="Lastname"
                fullWidth
                margin="normal"
                autoComplete="off"
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </Grid>
            <Grid item lg={6} sm={6}>
              <TextField
                id="title"
                select
                name="title"
                value={title}
                onChange={this.onChange}
                label="Title*"
                fullWidth
                helperText="Please select title"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {titles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={6} sm={6}>
              <TextField
                id="sex"
                select
                name="sex"
                value={sex}
                onChange={this.onChange}
                label="Sex*"
                fullWidth
                helperText="Please select gender"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={6} sm={6}>
              <TextField
                id="maritalStatus"
                select
                name="maritalStatus"
                value={maritalStatus}
                onChange={this.onChange}
                label="Marital Status*"
                fullWidth
                helperText="Please select marital status"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {maritalStatuses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="medium"
                color="primary"
              >
                Save Employee
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ExpenseForm);
