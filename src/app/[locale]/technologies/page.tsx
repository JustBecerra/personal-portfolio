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
      <Box className="md:w-[80%] min-[310px]:w-[100%] mt-[3%] md:gap-0 min-[310px]:gap-6 flex md:flex-row min-[310px]:flex-col md:justify-between md:items-baseline min-[310px]:justify-center min-[310px]:items-center">
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
