import { Box, Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { Theme } from "../../Theme";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: Theme.colors.base2,
    backgroundColor: Theme.colors.primary1,
  },
  footerText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  iconButton: {
    position: "absolute",
    right: 20,
    top: 8,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    fontSize: 10,
    [theme.breakpoints.down("md")]: {
      right: 20,
      top: 15,
    },
    [theme.breakpoints.down("sm")]: {
      right: 20,
      top: 15,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  var date = new Date();

  //scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div>
      <Box className={classes.root}>
        <Grid
          className={classes.paper}
          container
          //   display="flex"
          //   direction="row"
          //   alignItems="center"
          //   justifyContent="center"
        >
          <Grid item xs={8} sm={10} className={classes.footerText}>
            Design and Developed by &nbsp;
            <span style={{ color: "#f9f9f9", whiteSpace: "pre-line" }}>
              <a href="https://google.com" alt="footer">
                Himanshu Shekhar
              </a>
            </span>
            {<br />}
            All right reserved &#169; {date.getFullYear()}
          </Grid>
          <Grid
            item
            xs={4}
            sm={2}
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <IconButton className={classes.iconButton} onClick={scrollToTop}>
              <ArrowUpwardIcon style={{ fontSize: 15 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
