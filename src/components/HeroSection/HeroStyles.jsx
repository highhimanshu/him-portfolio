import { makeStyles } from "@material-ui/core";
import { Theme } from "../../Theme";
import hero from "../../images/hero.png";

export const useStyles = makeStyles((theme) => ({
  //hero section
  headerWrapper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    backgroundColor: Theme.colors.base1,
    background: `linear-gradient(to bottom right, #04303140, #00606479),url(${hero})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  //header
  navbar: {
    backgroundColor: Theme.colors.base1,
  },
  //styling navbar elements
  navlinks: {
    color: Theme.colors.base2,
  },

  drawerWrapper: {
    backgroundColor: Theme.colors.primary1,
    height: "100%",
  },

  //adjusting header
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "row wrap",
    backgroundColor: Theme.colors.base1,
  },
  //hero section main titles
  headerContainer: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: Theme.colors.base2,
  },
  headerTitle: {
    fontSize: "3rem",
    fontWeight: 700,
    fontFamily: "Inherit",
    width: "80%",
    // margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  headerDescription: {
    fontSize: "2rem",
    fontFamily: "Inherit",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      margin: theme.spacing(2, 0),
    },
  },

  herobutton: {
    paddingRight: "20px",
  },

  //syling arrow icon
  arrow: {
    lineHeight: " 20px",
    position: "absolute",
    left: "110px",
    top: "3px",
    animationName: "upDown",
    animationDuration: "0.9s",
    animationIterationCount: "infinite",
  },
  //creating the animations
  "@global": {
    "@keyframes upDown": {
      "0%": {
        transform: "scale(1,1)",
        paddingTop: "1px",
      },
      "100%": {
        transform: "scale(1,2)",
        paddingTop: "5px",
      },
    },
  },
}));
