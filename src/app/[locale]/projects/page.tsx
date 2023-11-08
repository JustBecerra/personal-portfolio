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
    <main className="flex justify-center w-screen">
      <Box className="w-[80%] min-[310px]:h-[100%] min-[310px]:mt-8 md:mt-[8%] min-[310px]:pb-6 flex md:flex-row min-[310px]:flex-col gap-[1rem]">
        <ProjectCard
          title={"Huellitas"}
          screenshot={huellitasSH}
          url={huellitasURL}
          description={t("huellitasdescription")}
          github={huellitasGithubURL}
        />
        <ProjectCard
          title={"Calorie Counter"}
          screenshot={caloriecounterSH}
          url={calorieCounterURL}
          github={calorieCounterGitHubURL}
          description={t("caloriecounterdescription")}
        />
        <ProjectCard
          title={"Crypto Tracker"}
          screenshot={CryptoTrackerSH}
          github={cryptoTrackerGithubURL}
          description={t("cryptotrackerdescription")}
        />
      </Box>
    </main>
  );
}
