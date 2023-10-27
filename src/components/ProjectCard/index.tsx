import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type props = {
  title: string;
};

export const ProjectCard = ({ title }: props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
};
