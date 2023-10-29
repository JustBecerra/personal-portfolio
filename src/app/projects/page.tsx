import { ProjectCard } from "@/components/ProjectCard";
import { Box } from "@mui/material";
import huellitasSH from "../../../public/huellitasSH.png";
import caloriecounterSH from "../../../public/caloriecounterSH.png";
import React from "react";

export default function projects() {
  const huellitasURL = "https://huellitas.vercel.app/home";
  const huellitasGithubURL = "https://github.com/cdwenz/huellitas-pg";
  const calorieCounterURL = "https://calorie-counter-xi.vercel.app";
  const calorieCounterGitHubURL =
    "https://github.com/JustBecerra/calorie-counter";
  const cryptoTrackerGithubURL =
    "https://github.com/JustBecerra/crypto-tracker";
  return (
    <main className="flex flex-col items-center justify-center">
      <Box className="w-[80%] mt-[3%] flex flex-row justify-center items-center gap-[1rem]">
        <ProjectCard
          title={"Huellitas"}
          screenshot={huellitasSH}
          url={huellitasURL}
          github={huellitasGithubURL}
        />
        <ProjectCard
          title={"Crypto Tracker"}
          screenshot={caloriecounterSH}
          github={cryptoTrackerGithubURL}
        />
        <ProjectCard
          title={"Calorie Counter"}
          screenshot={caloriecounterSH}
          url={calorieCounterURL}
          github={calorieCounterGitHubURL}
        />
      </Box>
    </main>
  );
}
