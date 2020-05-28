import React, { Component, Fragment } from "react";
import { Chart } from "react-google-charts";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

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

class CustomerTrafficWidget extends Component {
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
                chartType="Line"
                loader={
                  <div>
                    <CircularProgress />
                  </div>
                }
                data={[
                  ["Day", "Customers"],
                  [1, 37.8],
                  [2, 30.9],
                  [3, 25.4],
                  [4, 11.7],
                  [5, 11.9],
                  [6, 8.8],
                  [7, 7.6],
                  [8, 12.3],
                  [9, 16.9],
                  [10, 12.8],
                  [11, 5.3],
                  [12, 6.6],
                  [13, 4.8],
                  [14, 4.2],
                  [15, 11.9],
                  [16, 8.3],
                ]}
                options={{
                  chart: {
                    title: "Monthly Customer performance",
                    subtitle: "Patients",
                  },
                }}
                rootProps={{ "data-testid": "3" }}
              />
            </div>
          </CardActionArea>
        </Card>
      </Fragment>
    );
  }
}

CustomerTrafficWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerTrafficWidget);
