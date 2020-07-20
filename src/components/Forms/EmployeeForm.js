import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

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
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

const EmployeeForm = withFormik({
  mapPropsToValues: ({ firstName, lastName }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
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
