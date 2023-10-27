import { ProjectCard } from "@/components/ProjectCard";
import { Box } from "@mui/material";
import React from "react";

export default function projects() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Box className="w-[80%] mt-[3%] flex flex-row justify-around">
        <ProjectCard title={"Huellitas"} />
        <ProjectCard title={"Crypto Tracker"} />
        <ProjectCard title={"Calorie Counter"} />
      </Box>
    </main>
  );
}
