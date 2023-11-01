import {
  Box,
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
    <Card className="h-[100%] flex flex-col justify-between" variant="outlined">
      <CardContent>
        <Image src={screenshot} alt="" />
        <Box className="mt-2">
          <Typography>{title}</Typography>
          <Typography className="mt-4">{description}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        {url && (
          <Link href={url} target="_blank">
            <Button disableTouchRipple disableRipple disableFocusRipple>
              <Typography className="normal-case text-[#03680b]">
                Link
              </Typography>
            </Button>
          </Link>
        )}
        <Link href={github} target="_blank">
          <Button disableTouchRipple disableRipple disableFocusRipple>
            <Typography className="normal-case text-[#03680b]">
              Github
            </Typography>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
