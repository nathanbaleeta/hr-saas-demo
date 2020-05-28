import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import OrderCountWidget from "./OrderCountWidget";
import TransporterCountWidget from "./TransporterCountWidget";

import CustomerTrafficWidget from "./CustomerTrafficWidget";
import ServiceTypeWidget from "./ServiceTypeWidget";
import CompanyPerformanceWidget from "./CompanyPerformanceWidget";
import SalesPerformanceWidget from "./SalesPerformanceWidget";

const styles = (theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey",
    },
  },
  root: {
    flexGrow: 1,
    zoom: "70%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
    color: theme.palette.text.primary,
  },
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={7} sm={7} xs={12}>
              <CustomerTrafficWidget />
              <br />
              <Grid container spacing={3}>
                <Grid item lg={4} sm={12} xs={12}>
                  <OrderCountWidget />
                  <br />
                  <TransporterCountWidget />
                </Grid>
                <Grid item lg={8} sm={12} xs={12}>
                  <CompanyPerformanceWidget />
                </Grid>
              </Grid>
              <br />

              <Grid container spacing={3}>
                <Grid item lg={6} sm={12} xs={12}>
                  <SalesPerformanceWidget />
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                  <SalesPerformanceWidget />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} sm={5} xs={12}>
              <ServiceTypeWidget />
              <br />
              <Grid container spacing={3}>
                <Grid item lg={12} sm={12} xs={12}>
                  <SalesPerformanceWidget />
                </Grid>

                <Grid item lg={6} sm={12} xs={12}>
                  <SalesPerformanceWidget />
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                  <SalesPerformanceWidget />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
