import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  LinearProgress,
} from "@material-ui/core";
import React from "react";

export const ChipHeading = ({ title, color, variant }) => {
  return (
    <>
      <Chip
        avatar={<Avatar>{title}</Avatar>}
        color={color}
        variant={variant}
        label={title}
        style={{ fontFamily: "inherit" }}
      />
    </>
  );
};

export const SkillCard = ({ title, description, icon, progress }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{icon}</Avatar>}
        title={title}
        subheader={description}
      />
      <CardContent>
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={progress}
          size={40}
          thickness={4}
        />
      </CardContent>
    </Card>
  );
};
