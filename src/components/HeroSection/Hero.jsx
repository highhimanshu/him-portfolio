import { Box, Button, Typography } from "@material-ui/core";
import { useStyles } from "./HeroStyles";
import { Navbar } from "../Navbar";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ReactTyped from "react-typed";
// import Container from "@material-ui/core/Container";
import { Link } from "react-scroll";
import About from "../AboutSection/About";
const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.headerWrapper}>
        <Navbar />
        <Box className={classes.headerContainer}>
          <Typography
            variant="h6"
            component="h2"
            className={classes.headerTitle}
          >
            Himanshu Shekhar
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            className={classes.headerDescription}
          >
            <span style={{ marginRight: "5px" }}> I am</span>
            <ReactTyped
              style={{ color: "#143438" }}
              strings={[
                "Web Developer",
                "Software Engineer",
                "Digital Marketer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></ReactTyped>
          </Typography>

          <Box m={1} style={{ width: "80%" }}>
            <Button
              activeClass="active"
              spy={true}
              to={<About />}
              smooth={true}
              duration={300}
              component={Link}
              variant="contained"
              color="white"
              className={classes.herobutton}
              endIcon={<ArrowDownwardIcon className={classes.arrow} />}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
