import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Icon, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "0px",
    textAlign: "center",
  },
  boxHeader: {
    marginBottom: "1rem",
  },
  boxContainer: {
    // marginBottom: "1rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box justifyContent="center" borderBottom={1} className={classes.boxHeader}>
      <Container className={classes.boxContainer}>
        <Typography variant="h4" align="center" gutterBottom>
          COVID19 <Icon className="fa fa-biohazard"></Icon> INDIA
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
