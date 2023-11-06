"use client";
import { TechnologiesCards } from "@/components/TechnologiesCards";
import { TechnologiesList } from "@/misc";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function Technologies() {
  const t = useTranslations("technologies");
  const frontendTechnologies = TechnologiesList.filter(
    (tech) => tech.area === "frontend"
  );
  const backendTechnologies = TechnologiesList.filter(
    (tech) => tech.area === "backend"
  );
  return (
    <main className="flex flex-col items-center justify-center">
      <Box className="w-[80%] mt-[3%] flex flex-row justify-between">
        <TechnologiesCards
          technologies={frontendTechnologies}
          title={t("frontendtech")}
        />
        <TechnologiesCards
          technologies={backendTechnologies}
          title={t("backendtech")}
        />
      </Box>
    </main>
  );
}
