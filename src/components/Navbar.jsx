import {
  AppBar,
  Box,
  Button,
  Divider,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./HeroSection/HeroStyles";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Certificate", Id: "Certificate" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Him Port</Typography>
          <Hidden xsDown>
            <Box>
              {navlinks.map((eachNav) => {
                return (
                  <>
                    <Button
                      className={classes.navlinks}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      to={eachNav.Id}
                      duration={300}
                      component={Link}
                    >
                      {eachNav.label}
                    </Button>
                  </>
                );
              })}
            </Box>
          </Hidden>
          {/* show hamburger icon */}
          <Hidden only={["sm", "lg", "xl", "md"]}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuOpenIcon className={classes.navlinks} />
            </IconButton>
          </Hidden>

          <SwipeableDrawer
            open={open}
            anchor="right"
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <Box className={classes.drawerWrapper}>
              <IconButton onClick={() => setOpen(false)}>
                <ChevronRightIcon className={classes.navlinks} />
              </IconButton>
              <Divider />
              <List>
                {navlinks.map((eachNav) => (
                  <ListItem>
                    <Link
                      href="#"
                      variant="button"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      to={eachNav.Id}
                      duration={300}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {eachNav.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </>
  );
};
