import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputMask from "react-input-mask";

import { titles } from "../common/titleList";
import { genders } from "../common/genderList";

import { maritalStatuses } from "../common/maritalStatusList";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const form = (props) => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" color="default" gutterBottom>
          Autobiography
        </Typography>
        <Grid container spacing={1}>
          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="firstName"
              label="First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.firstName ? errors.firstName : ""}
              error={touched.firstName && Boolean(errors.firstName)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="lastName"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.lastName ? errors.lastName : ""}
              error={touched.lastName && Boolean(errors.lastName)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              select
              id="title"
              label="Title"
              value={values.title}
              onChange={handleChange("title")}
              helperText={touched.title ? errors.title : ""}
              error={touched.title && Boolean(errors.title)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            >
              {titles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              select
              id="sex"
              label="Sex"
              value={values.sex}
              onChange={handleChange("sex")}
              helperText={touched.sex ? errors.sex : ""}
              error={touched.sex && Boolean(errors.sex)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="dob"
              label="Date of birth"
              type="date"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.dob ? errors.dob : ""}
              error={touched.dob && Boolean(errors.dob)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              select
              id="maritalStatus"
              label="Marital Status"
              value={values.maritalStatus}
              onChange={handleChange("maritalStatus")}
              helperText={touched.maritalStatus ? errors.maritalStatus : ""}
              error={touched.maritalStatus && Boolean(errors.maritalStatus)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            >
              {maritalStatuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="phone"
              label="Phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.phone ? errors.phone : "For example: 256772123456"
              }
              error={touched.phone && Boolean(errors.phone)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="nin"
              label="National ID Number"
              value={values.nin}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.nin ? errors.nin : ""}
              error={touched.nin && Boolean(errors.nin)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="nextOfKin"
              label="Next of Kin"
              value={values.nextOfKin}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.nextOfKin ? errors.nextOfKin : ""}
              error={touched.nextOfKin && Boolean(errors.nextOfKin)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Grid>

          <Grid item lg={6} xs={12} sm={12}>
            <TextField
              id="nextOfKinPhone"
              label="Next of Kin Phone"
              value={values.nextOfKinPhone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.nextOfKinPhone
                  ? errors.nextOfKinPhone
                  : "For example: 256772123456"
              }
              error={touched.nextOfKinPhone && Boolean(errors.nextOfKinPhone)}
              margin="dense"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

const EmployeeForm = withFormik({
  mapPropsToValues: ({
    firstName,
    lastName,
    title,
    sex,
    dob,
    maritalStatus,
    phone,
    email,
    nin,
    nextOfKin,
    nextOfKinPhone,
  }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      title: title || "",
      sex: sex || "",
      dob: dob || "",
      maritalStatus: maritalStatus || "",
      phone: phone || "",
      email: email || "",
      nin: nin || "",
      nextOfKin: nextOfKin || "",
      nextOfKinPhone: nextOfKinPhone || "",
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required("Required")
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Must be only text"),
    lastName: Yup.string()
      .required("Required")
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .matches(/^[A-Za-z]+$/, "Must be only text"),
    title: Yup.string().required("Select your title"),
    sex: Yup.string().required("Select your gender"),
    dob: Yup.string().required("Required"),
    maritalStatus: Yup.string().required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must only be digits")
      .matches(/^[256][0-9]+$/, "Must possess a Ugandan country code prefix")
      .min(12, "Too Short!")
      .max(12, "Too Long!"),
    email: Yup.string().required("Required").email("Invalid email address"),
    nin: Yup.string()
      .required("Required")
      .matches(/^[0-9A-Z]+$/, "Invalid NIN")
      .min(13, "Too Short!")
      .max(14, "Too Long!"),
    nextOfKin: Yup.string()
      .required("Required")
      .min(2, "Too Short!")
      .max(40, "Too Long!")
      .matches(/^[A-Z a-z]+$/, "Must be only text"),
    nextOfKinPhone: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must only be digits")
      .matches(/^[256][0-9]+$/, "Must possess a Ugandan country code prefix")
      .min(12, "Too Short!")
      .max(12, "Too Long!"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(form);

export default withStyles(styles)(EmployeeForm);
