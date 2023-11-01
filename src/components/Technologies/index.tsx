import { Box, Grid, Paper, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

type technologiesProps = {
  name: string;
  icon: StaticImageData;
  area: string;
  time: string;
};

export const Technologies = ({
  technologies,
  title,
}: {
  technologies: technologiesProps[];
  title: string;
}) => {
  return (
    <Box className="w-[40%] h-auto items-center justify-center">
      <Typography className="text-center">{title}</Typography>
      <Grid container spacing={8} className="justify-center items-center mt-4">
        {technologies.map((tech, i) => (
          <Grid key={i} item className="w-[30%]">
            <Paper
              sx={[
                {
                  boxShadow: "0px 0px 12px 2px white",
                  "&:hover": {
                    boxShadow: "0px 0px 12px 2px #03680b",
                  },
                },
              ]}
              className="flex flex-col justify-center items-center bg-white border-4 border-white hover:border-[#03680b]"
            >
              <Typography className="text-center mt-4">{tech.name}</Typography>
              <Typography className="text-center mb-4">{tech.time}</Typography>
              <Box className="w-[20%] h-[20%] mb-4">
                <Image src={tech.icon} alt="" />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
