"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { Box } from "@mui/material";
import huellitasSH from "../../../../public/huellitasSH.png";
import caloriecounterSH from "../../../../public/caloriecounterSH.png";
import CryptoTrackerSH from "../../../../public/CryptoTrackerSH.png";
import React from "react";
import {
  calorieCounterGitHubURL,
  calorieCounterURL,
  cryptoTrackerGithubURL,
  huellitasGithubURL,
  huellitasURL,
} from "@/misc";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  return (
    <main className="flex flex-col h-[90%] items-center justify-center">
      <Box className="w-[80%] flex flex-row justify-center items-center gap-[1rem]">
        <ProjectCard
          title={"Huellitas"}
          screenshot={huellitasSH}
          url={huellitasURL}
          description={t("huellitasdescription")}
          github={huellitasGithubURL}
        />
        <ProjectCard
          title={"Crypto Tracker"}
          screenshot={CryptoTrackerSH}
          github={cryptoTrackerGithubURL}
          description={t("cryptotrackerdescription")}
        />
        <ProjectCard
          title={"Calorie Counter"}
          screenshot={caloriecounterSH}
          url={calorieCounterURL}
          github={calorieCounterGitHubURL}
          description={t("caloriecounterdescription")}
        />
      </Box>
    </main>
  );
}
