import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import { useStyle as useBodyStyle } from "../BodyStyle";
import { useStyles as useHeaderStyle } from "../HeroSection/HeroStyles";
import him from "../../images/him.jpg";
import { ChipHeading, SkillCard } from "../common/commonComponents";
import CodeIcon from "@material-ui/icons/Code";
import ProgressBar from "../ProgressBar";

const About = () => {
  const classes1 = useBodyStyle(); //body style css
  const classes2 = useHeaderStyle(); // header style css

  const skills = [
    {
      title: "React Js",
      description: "Reactjs description",
      icon: <CodeIcon />,
      progressScore: 70,
    },
    {
      title: "HTML",
      description: "HTML description",
      icon: <CodeIcon />,
      progressScore: 90,
    },
    {
      title: "CSS",
      description: "CSS description",
      icon: <CodeIcon />,
      progressScore: 30,
    },
  ];

  return (
    <>
      <Box className={classes1.section} id="About">
        <Grid container spacing={4}>
          <Grid item sm={5} spacing={4}>
            <Hidden xsDown>
              <img
                src={him}
                alt="about us"
                className={classes1.responsiveImg}
              />
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={7}>
            {ChipHeading({
              title: "About me",
              color: classes2.navlinks,
              variant: "outlined",
            })}
            <Box mt={2}>
              <Typography variant="h4" style={{ fontFamily: "inherit" }}>
                Hello , I am Himanshu Shekhar
              </Typography>
            </Box>
            <Box my={1}>
              <Typography variant="body1" style={{ fontFamily: "inherit" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={4}>
              {SkillCard({
                title: skill.title,
                description: skill.description,
                icon: skill.icon,
                progress: skill.progressScore,
              })}
            </Grid>
          ))}
        </Grid>

        <ProgressBar />
      </Box>
    </>
  );
};

export default About;
