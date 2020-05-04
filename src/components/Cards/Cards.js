import React from "react";

// UI imports
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Icon, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperBox1: {
    margin: "2%",
    backgroundColor: "#ffcdd2",
    color: "#b71c1c",
    borderBottom: "10px solid #b71c1c",
    textAlign: "center !important",
  },
  paperBox2: {
    margin: "2%",
    backgroundColor: "#bbdefb",
    color: "#0d47a1",
    borderBottom: "10px solid #0d47a1",
    textAlign: "center !important",
  },
  paperBox3: {
    margin: "2%",
    backgroundColor: "#c8e6c9",
    color: "#1b5e20",
    borderBottom: "10px solid #1b5e20",
    textAlign: "center !important",
  },
  paperBox4: {
    margin: "2%",
    backgroundColor: "#cfd8dc",
    color: "#263238",
    borderBottom: "10px solid #263238",
    textAlign: "center !important",
  },
}));

const Cards = ({ data }) => {
  const classes = useStyles();

  if (!data) {
    return null;
  }

  return (
    <React.Fragment>
      <Grid container spacing={2} justify="center">
        <Grid
          item
          component={Card}
          xs={5}
          lg={5}
          md={5}
          className={classes.paperBox1}
        >
          <CardContent>
            {/* <CountUp end={100} /> */}
            <Typography variant="h5">Confirmed</Typography>
            <Icon className="fa fa-virus" fontSize="large"></Icon>
            <Typography variant="h5">{data.confirmed}</Typography>
            <Typography variant="body2">+{data.deltaconfirmed}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={5}
          lg={5}
          md={5}
          className={classes.paperBox2}
        >
          <CardContent>
            <Typography variant="h5">Active</Typography>
            <Icon className="fa fa-hospital-user" fontSize="large"></Icon>
            <Typography variant="h5">{data.active}</Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid
          item
          component={Card}
          xs={5}
          lg={5}
          md={5}
          className={classes.paperBox3}
        >
          <CardContent>
            <Typography variant="h5">Recovered</Typography>
            <Icon className="fa fa-shield-virus" fontSize="large"></Icon>
            <Typography variant="h5">{data.recovered}</Typography>
            <Typography variant="body2">+{data.deltarecovered}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={5}
          lg={5}
          md={5}
          className={classes.paperBox4}
        >
          <CardContent>
            <Typography variant="h5">Deaths</Typography>
            <Icon className="fa fa-skull-crossbones" fontSize="large"></Icon>
            <Typography variant="h5">{data.deaths}</Typography>
            <Typography variant="body2">+{data.deltadeaths}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Cards;
