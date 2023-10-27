import { TechnologiesList } from "@/misc";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function technologies() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Box className="w-[60%] mt-[3%]">
        <Grid container spacing={8}>
          {TechnologiesList.map((tech, i) => (
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
                className="flex flex-col justify-center items-center bg-transparent border-4 border-white hover:border-[#03680b]"
              >
                <Typography className="text-center text-white m-4">
                  {tech.name}
                </Typography>
                <Box className="w-[20%] h-[20%] mb-4">
                  <Image src={tech.icon} alt="" />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
