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
    <Card
      className="min-[310px]:h-auto md:h-[26rem] flex flex-col justify-between overflow-visible"
      variant="outlined"
    >
      <CardContent>
        <Image src={screenshot} alt="" />
        <Typography className="md:text-[1rem] min-[310px]:text-[0.75rem]">
          {title}
        </Typography>
        <Typography className="mt-4 md:text-[1rem] min-[310px]:text-[0.75rem]">
          {description}
        </Typography>
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
