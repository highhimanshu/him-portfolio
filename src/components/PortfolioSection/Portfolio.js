import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ChipHeading } from "../common/commonComponents";
import { useStyle } from "./PortfolioStyle";
import port1 from "../../images/port1.jpg";
import port2 from "../../images/port2.jpg";
import port3 from "../../images/port3.png";
import port4 from "../../images/port4.jpg";
import port5 from "../../images/port5.jpg";
import port6 from "../../images/port6.jpg";
import { useStyle as BodyStyle } from "../BodyStyle";

const Portfolio = () => {
  const classes = useStyle();
  const classes1 = BodyStyle();

  const portfolioImages = [
    { url: port1, title: "portfolio 1", link: "#" },
    { url: port2, title: "portfolio 2", link: "#" },
    { url: port3, title: "portfolio 3", link: "#" },
    { url: port4, title: "portfolio 4", link: "#" },
    { url: port5, title: "portfolio 5", link: "#" },
    { url: port6, title: "portfolio 6", link: "#" },
  ];
  return (
    <Box className={classes.portfolioBackground} py={4} id="Portfolio">
      {ChipHeading({
        title: "Portfolio",
        color: "default",
        variant: "default",
      })}

      <Typography style={{ fontFamily: "inherit" }} variant="h4">
        Let's see my work
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
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {portfolioImages.map((eachImg, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box m={2} className={classes.imageContainer}>
                <img
                  src={eachImg.url}
                  alt={eachImg.title}
                  className={classes1.responsiveImg}
                />
                <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>
                    {eachImg.title}
                  </Typography>
                  <Button color="secondary" variant="contained" my={2}>
                    Visit
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
