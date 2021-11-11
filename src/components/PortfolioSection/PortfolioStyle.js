import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../Theme";

export const useStyle = makeStyles((theme) => ({
  portfolioBackground: {
    backgroundColor: Theme.colors.primary1,
    // width: "100%",
    minHeight: "90vh",
    height: "auto",
    fontFamily: "Inherit",
    color: Theme.colors.base2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  sectionHeading: {
    fontFamily: "Inherit",
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      margin: theme.spacing(2, 0),
    },
  },
  imageContainer: {
    position: "relative",
    "&:hover $imageOverlay": {
      opacity: 0.8,
    },
  },

  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    flexDirection: "column",
    transition: "0.7s",
  },
  overlayTitle: {
    fontSize: "1.2rem",
    margin: "10px",
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: "1.2rem",
    // },
  },
}));
