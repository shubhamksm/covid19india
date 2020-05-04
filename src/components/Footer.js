import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Box, Typography, Container, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  boxHeader: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  boxContainer: {
    // marginBottom: "1rem",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box justifyContent="center" borderTop={1} className={classes.boxHeader}>
      <Container className={classes.boxContainer}>
        <Typography variant="overline" align="center" gutterBottom>
          Created By - Shubham Khandelwal
          <Link
            href="https://github.com/shubhamksm/covid19india"
            color="inherit"
          >
            <Icon className="fa fa-github"></Icon>
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
