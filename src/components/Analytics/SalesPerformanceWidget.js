import React, { Component } from "react";

import { Chart } from "react-google-charts";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

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

class TransporterCountWidget extends Component {
  constructor() {
    super();
    this.state = {
      numOfFarmers: 49,
    };
  }
  componentDidMount() {
    // Get Farmer count
    /* const farmersRef = firebase.database().ref("farmers");
    farmersRef.on("value", (snapshot) => {
      const farmerCount = snapshot.numChildren();
      this.setState({
        numOfFarmers: farmerCount,
      });
    }); */
  }
  render() {
    const { classes } = this.props;
    //const { numOfFarmers } = this.state;

    return (
      <div className={classes.root}>
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
                height={"397px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Product", "Sales by month"],
                  ["Cement", 11],
                  ["Paint", 2],
                  ["Pipes", 2],
                  ["Steel", 2],
                  ["Roofings", 7],
                ]}
                options={{
                  title: "Sales by product type",
                  // Just add this option
                  pieHole: 0.6,
                }}
                rootProps={{ "data-testid": "3" }}
              />
            </div>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

TransporterCountWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransporterCountWidget);
