import { ProjectCard } from "@/components/ProjectCard";
import { Box } from "@mui/material";
import huellitasSH from "../../../../public/huellitasSH.png";
import caloriecounterSH from "../../../../public/caloriecounterSH.png";
import React from "react";
import {
  calorieCounterDescription,
  calorieCounterGitHubURL,
  calorieCounterURL,
  cryptoTrackerDescription,
  cryptoTrackerGithubURL,
  huellitasDescription,
  huellitasGithubURL,
  huellitasURL,
} from "@/misc";

export default function projects() {
  return (
    <main className="flex flex-col h-[90%] items-center justify-center">
      <Box className="w-[80%] flex flex-row justify-center items-center gap-[1rem]">
        <ProjectCard
          title={"Huellitas"}
          screenshot={huellitasSH}
          url={huellitasURL}
          description={huellitasDescription}
          github={huellitasGithubURL}
        />
        <ProjectCard
          title={"Crypto Tracker"}
          screenshot={caloriecounterSH}
          github={cryptoTrackerGithubURL}
          description={cryptoTrackerDescription}
        />
        <ProjectCard
          title={"Calorie Counter"}
          screenshot={caloriecounterSH}
          url={calorieCounterURL}
          github={calorieCounterGitHubURL}
          description={calorieCounterDescription}
        />
      </Box>
    </main>
  );
}
