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
                height={"400px"}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Year", "Sales", "Expenses", "Profit"],
                  ["2014", 1000, 400, 200],
                  ["2015", 1170, 460, 250],
                  ["2016", 660, 1120, 300],
                  ["2017", 1030, 540, 350],
                ]}
                options={{
                  // Material design options
                  chart: {
                    title: "Company Performance",
                    subtitle: "Sales, Expenses, and Profit: 2014-2017",
                  },
                }}
                // For tests
                rootProps={{ "data-testid": "2" }}
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
