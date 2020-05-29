import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import InputMask from "react-input-mask";

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
      dob: "",
      maritalStatus: "",
      phone: "",
      email: "",
      nin: "",
      nextOfKin: "",
      nextOfKinPhone: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  capitalize(str) {
    let lower = str.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

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
      dob: this.state.dob,
      maritalStatus: this.state.maritalStatus,
      phone: this.state.phone,
      email: this.state.email,
      nin: this.state.nin,
      nextOfKin: this.toTitleCase(this.state.nextOfKin),
      nextOfKinPhone: this.state.nextOfKinPhone,

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
      dob: "",
      maritalStatus: "",
      phone: "",
      email: "",
      nin: "",
      nextOfKin: "",
      nextOfKinPhone: "",
    });
  };

  render() {
    const { classes } = this.props;
    const {
      firstname,
      lastname,
      title,
      sex,
      dob,
      maritalStatus,
      phone,
      email,
      nin,
      nextOfKin,
      nextOfKinPhone,
    } = this.state;

    return (
      <div className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h6" color="primary" gutterBottom>
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

            <Grid item lg={12} sm={12}>
              <TextField
                required
                id="dob"
                name="dob"
                value={dob}
                onChange={this.onChange}
                label="Date"
                type="date"
                fullWidth
                margin="normal"
                autoComplete="off"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
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
            <Grid item lg={6} sm={6}>
              <InputMask
                required
                mask="256999999999"
                value={phone}
                onChange={this.onChange}
              >
                {() => (
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    helperText="For example: 772 123 456"
                    autoComplete="phone"
                  />
                )}
              </InputMask>
            </Grid>
            <Grid item lg={6} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                value={email}
                onChange={this.onChange}
                label="Email"
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
                id="nin"
                name="nin"
                value={nin}
                onChange={this.onChange}
                label="National ID number"
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

            <Grid item lg={12} sm={12}>
              <TextField
                required
                id="next-of-kin"
                name="nextOfKin"
                value={nextOfKin}
                onChange={this.onChange}
                label="Next of kin"
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
              <InputMask
                required
                mask="256999999999"
                value={nextOfKinPhone}
                onChange={this.onChange}
              >
                {() => (
                  <TextField
                    id="next-of-kin-phone"
                    name="nextOfKinPhone"
                    label="Next of kin phone"
                    fullWidth
                    helperText="For example: 772 123 456"
                    autoComplete="phone"
                  />
                )}
              </InputMask>
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
