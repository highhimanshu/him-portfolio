import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import SkillBar from "react-skillbars";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";

const ProgressBar = () => {
  const skillBar = [
    [
      {
        type: "HTML",
        level: 100,
        src1: html,
      },
    ],
    [
      {
        type: "CSS",
        level: 55,
        src1: css,
      },
    ],
    [
      {
        type: "JS",
        level: 75,
        src1: js,
      },
    ],
    [
      {
        type: "React",
        level: 70,
        src1: react,
      },
    ],
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9",
    },
  };

  return (
    <>
      {skillBar.map((s, i) => (
        <Grid container spacing={3}>
          <Grid item xs={2} sm={1}>
            <Avatar alt="hatt" variant="square" src={s[0].src1} />
          </Grid>
          <Grid item xs={10} sm={11}>
            <SkillBar skills={s} />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default ProgressBar;
