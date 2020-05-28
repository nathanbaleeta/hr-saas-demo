import React, { Component, Fragment } from "react";
import { Chart } from "react-google-charts";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

//import firebase from "../common/firebase";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
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

class ServiceTypeWidget extends Component {
  state = {};

  componentDidMount() {}
  render() {
    const { classes } = this.props;
    //const {} = this.state;

    return (
      <Fragment>
        <Card className={classes.card}>
          <CardActionArea>
            <div
              style={{
                padding: "20px",
                background: "white",
                color: "black",
              }}
            >
              <Chart
                width={"100%"}
                height={"540px"}
                chartType="PieChart"
                loader={
                  <div>
                    <CircularProgress />
                  </div>
                }
                data={[
                  ["Service", "Sales by month"],
                  ["Consultation", 11],
                  ["Scan", 2],
                  ["Lab", 21],
                  ["Drugs", 12],
                ]}
                options={{
                  title: "Services by type",
                  // Just add this option
                  is3D: true,
                }}
                rootProps={{ "data-testid": "2" }}
              />
            </div>
          </CardActionArea>
        </Card>
      </Fragment>
    );
  }
}

ServiceTypeWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceTypeWidget);
