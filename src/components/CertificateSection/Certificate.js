import Slider from "react-slick";
import port1 from "../../images/port1.jpg";
import port2 from "../../images/port2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Divider, Typography } from "@material-ui/core";
import { ChipHeading } from "../common/commonComponents";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../../Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Theme.colors.primary,
    minHeight: "60vh",
    height: "auto",
    color: Theme.colors.base2,
    padding: theme.spacing(5, 5),
    fontFamily: "Inherit",
  },
  responsiveImg: {
    display: "flex",
    width: "60%",
    // objectFit: "contain",
    borderRadius: 20,
    margin: "auto",
  },
  sectionHeading: {
    fontFamily: "Inherit",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      margin: theme.spacing(2, 0),
    },
  },
}));

export const Certificate = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={classes.root} id="Certificate">
      <Box
        container
        py={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {ChipHeading({
          title: "Certificate",
          label: "basic",
          //   variant: "outlined",
        })}
        <Typography className={classes.sectionHeading} variant="h4">
          Some Bragging
        </Typography>
        <Divider
          variant="middle"
          color="secondary"
          style={{
            width: "10%",
            height: "0.5vh",
            backgroundColor: "white",
            marginTop: "15px",
          }}
        />
      </Box>

      <Slider {...settings}>
        <div className={classes.imageStyle}>
          <img
            src={port1}
            alt="certificate 1"
            className={classes.responsiveImg}
          />
        </div>
        <div className={classes.imageStyle}>
          <img
            src={port2}
            alt="certificate 1"
            className={classes.responsiveImg}
          />
        </div>
        <div className={classes.imageStyle}>
          <img
            src={port1}
            alt="certificate 1"
            className={classes.responsiveImg}
          />
        </div>
        <div className={classes.imageStyle}>
          <img
            src={port1}
            alt="certificate 1"
            className={classes.responsiveImg}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Certificate;
