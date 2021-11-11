import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyle = makeStyles((theme) => ({
  section: {
    backgroundColor: Theme.colors.base1,
    minHeight: "90vh",
    height: "auto",
    color: Theme.colors.base2,
    padding: theme.spacing(5, 5),
    fontFamily: "Inherit",
  },
  responsiveImg: {
    display: "flex",
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  textboxDesign: {
    color: "white",
  },
}));
