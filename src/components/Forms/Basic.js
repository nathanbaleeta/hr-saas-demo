import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import {
  FormikTextField,
  FormikRadioGroupField,
  FormikSelectField,
} from "formik-material-fields";
import TextField from "formik-material-fields/lib/TextField";

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

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  gender: "",
  country: "",
};

class Basic extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.props.onSubmit}
      >
        {({ isValid }) => (
          <Form autoComplete="off">
            <Typography variant="h6" color="default" gutterBottom>
              Autobiography
            </Typography>
            <Grid container spacing={1}>
              <Grid item lg={6} xs={12} sm={12}>
                <FormikTextField
                  name="firstname"
                  label="Firstname"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} xs={12} sm={12}>
                <FormikTextField
                  name="lastname"
                  label="Lastname"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12} sm={12}>
                <FormikRadioGroupField
                  name="gender"
                  label="Gender"
                  margin="normal"
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12}>
                <FormikSelectField
                  name="country"
                  label="Country"
                  margin="normal"
                  options={[
                    { label: "China", value: 0 },
                    { label: "United States", value: 1 },
                  ]}
                  fullWidth
                  //native
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12}>
                <Field
                  name="firstName"
                  component={TextField}
                  placeholder="First Name"
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    );
  }
}

export default withStyles(styles)(Basic);
