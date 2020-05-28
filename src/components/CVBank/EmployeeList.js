import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import MUIDataTable from "mui-datatables";
import CustomToolbar from "../mui-datatables/CustomToolbarEmployee";

import { titles } from "../common/titleList";
import { genders } from "../common/genderList";
import { maritalStatuses } from "../common/maritalStatusList";

import firebase from "../config/firebase";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    zoom: "80%",
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },
});

class ExpensesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,

      key: "",
      firstname: "",
      lastname: "",
      title: "",
      sex: "",
      maritalStatus: "",
    };
  }

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const employeeRef = firebase.database().ref("employee");

    employeeRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          firstname: items[item].firstname,
          lastname: items[item].lastname,
          title: items[item].title,
          sex: items[item].sex,
          maritalStatus: items[item].maritalStatus,
        });
      }

      //console.log(newState);
      this.setState({
        data: newState,
      });
      console.log(this.state.data);
    });
  }

  // remove commas before saving to firebase
  removeCommas = (num) => {
    //Convert number to string before attempting string manipulation
    let str = num.toString();

    // Check if string contains comma before attempting to sanitize
    let result = str.includes(",") ? str.replace(/,/g, "") : str;
    return Number(result);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  updateEmployee(id) {
    //const recordToEdit = this.state.data.find(item => item.id === id);
    //console.log(recordToEdit);
    this.openDialog();

    const key = id;
    const employeeRef = firebase.database().ref(`employee/${key}`);
    employeeRef.on("value", (snapshot) => {
      this.setState({
        key: snapshot.key,
        firstname: snapshot.child("firstname").val(),
        lastname: snapshot.child("lastname").val(),
        title: snapshot.child("title").val(),
        sex: snapshot.child("sex").val(),
        maritalStatus: snapshot.child("maritalStatus").val(),
      });
    });
    console.log(
      "############### Veryfing state is working ###################"
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // get our form data out of state
    const employee = {
      firstname: this.toTitleCase(this.state.firstname),
      lastname: this.removeCommas(this.state.lastname),
      title: this.state.title,
      sex: this.state.sex,
      maritalStatus: this.state.maritalStatus,
    };

    //Update expense module
    const key = this.state.key;
    const employeeRef = firebase.database().ref(`employee/${key}`);
    employeeRef
      .update(employee)
      .then(function () {
        console.log("Synchronization succeeded");
      })
      .catch(function (error) {
        console.log("Synchronization failed");
      });
  };

  render() {
    const { data } = this.state;
    const { classes } = this.props;

    const columns = [
      {
        name: "Firstname",
        options: {
          filter: false,
          sort: true,
        },
      },

      {
        name: "Lastname",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "Title",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "Gender",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "Marital Status",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "Actions",
        options: {
          filter: false,
          sort: false,
        },
      },
    ];

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll",
      serverSide: false,
      rowsPerPage: 10,
      pagination: true,
      customToolbar: () => {
        return <CustomToolbar />;
      },

      onRowsDelete: (rowsDeleted) => {
        // get the corresponding id in state
        const row = rowsDeleted.data[0].index;
        const id = this.state.data[row]["id"];
        console.log(id);

        // Perform client deletion
        firebase.database().ref("employee").child(id).remove();
      },
    };

    return (
      <Fragment>
        <div className={classes.root}>
          <MUIDataTable
            title={"Employee list"}
            data={data.map((e) => {
              return [
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  {e.firstname}
                </div>,
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  {e.lastname}
                </div>,
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  {e.title}
                </div>,
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  {e.sex}
                </div>,
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  {e.maritalStatus}
                </div>,

                <IconButton
                  color="primary"
                  //onClick={() => this.updateFarmer(index)}
                  // The bind method also works
                  onClick={this.updateEmployee.bind(this, e.id)}
                >
                  <EditIcon color="primary" />
                </IconButton>,
              ];
            })}
            columns={columns}
            options={options}
          />

          <Dialog
            open={this.state.open}
            maxWidth="xs"
            onClose={this.closeDialog}
            aria-labelledby="form-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="simple-dialog-title" color="default">
              <Typography component="h1" variant="h5" align="center">
                Edit Employee
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" color="primary">
                <form onSubmit={this.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item lg={6} xs={12} sm={12}>
                      <TextField
                        required
                        id="firstname"
                        name="firstname"
                        value={this.state.firstname}
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
                        value={this.state.lastname}
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
                        value={this.state.title}
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
                        value={this.state.sex}
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
                        value={this.state.maritalStatus}
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
                      <br />
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        color="primary"
                      >
                        Update Employee
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <br />
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

ExpensesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpensesList);
