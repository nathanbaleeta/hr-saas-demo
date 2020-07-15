import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "formik-material-fields/lib/TextField";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .matches(/^[A-Za-z]+$/, "Must be only text"),
  lastName: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Basic2 = () => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <Typography variant="h6" color="default" gutterBottom>
            Autobiography
          </Typography>

          <Grid container spacing={1}>
            <Grid item lg={6} xs={12} sm={12}>
              <Field
                name="firstName"
                component={TextField}
                placeholder="First Name"
                margin="normal"
                fullWidth
              />
            </Grid>

            <Grid item lg={6} xs={12} sm={12}>
              <Field
                name="lastName"
                component={TextField}
                placeholder="Last Name"
                margin="normal"
                fullWidth
              />
            </Grid>

            <Grid item lg={6} xs={12} sm={12}>
              <Field
                name="email"
                type="email"
                component={TextField}
                placeholder="Email"
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default withStyles(styles)(Basic2);
