import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Icon,
  Box,
  Typography,
  Container,
  Link,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

import profile from "../profileAvatar.jpg";

const useStyles = makeStyles((theme) => ({
  boxHeader: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  textContainer1: {
    marginRight: "1rem",
    textAlign: "right",
  },
  iconContainer: {
    minWidth: "0px",
    marginRight: "0.8%",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box justifyContent="center" borderTop={1} className={classes.boxHeader}>
      <Container className={classes.boxContainer}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Profile Pic" src={profile} />
            </ListItemAvatar>
            <ListItemText
              primary="Shubham Khandelwal"
              secondary="Created By "
            />
            <ListItemText
              secondary="Connect with me |"
              className={classes.textContainer1}
            />
            <ListItemAvatar className={classes.iconContainer}>
              <Link
                href="https://github.com/shubhamksm/covid19india"
                color="inherit"
              >
                <Icon className="fa fa-github"></Icon>
              </Link>
            </ListItemAvatar>
            <ListItemAvatar className={classes.iconContainer}>
              <Link
                href="https://www.facebook.com/shubham.khandelwal.1276"
                color="inherit"
              >
                <Icon className="fa fa-facebook"></Icon>
              </Link>
            </ListItemAvatar>
            <ListItemAvatar className={classes.iconContainer}>
              <Link
                href="https://www.instagram.com/shubham_ksm/?hl=en"
                color="inherit"
              >
                <Icon className="fa fa-instagram"></Icon>
              </Link>
            </ListItemAvatar>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Footer;
