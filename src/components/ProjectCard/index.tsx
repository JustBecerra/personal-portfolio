import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type props = {
  title: string;
  screenshot: StaticImageData;
  url?: string;
  github: string;
  description: string;
};

export const ProjectCard = ({
  title,
  screenshot,
  url,
  github,
  description,
}: props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Image src={screenshot} alt="" />
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        {url && (
          <Link href={url} target="_blank">
            <Button>Link</Button>
          </Link>
        )}
        <Link href={github} target="_blank">
          <Button>Github</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
