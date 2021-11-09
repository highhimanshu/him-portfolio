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
    // flexGrow: 1,
    backgroundColor: Theme.colors.primary,
    fontFamily: "Inherit",
    color: Theme.colors.base2,
    display: "block",
    // justifyContent: "center",
    // flexDirection: "column",
    alignItems: "center",
  },
  imageStyle: {
    padding: "0px",
    marginTop: "15px",
    marginBottom: "30px",
  },
  responsiveImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
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
    <div className={classes.root}>
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
        <Typography style={{ fontFamily: "inherit" }} variant="h4">
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
