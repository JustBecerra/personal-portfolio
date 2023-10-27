import { Technologies } from "@/components/Technologies";
import { TechnologiesList } from "@/misc";
import { Box } from "@mui/material";
import React from "react";

export default function technologies() {
  const frontendTechnologies = TechnologiesList.filter(
    (tech) => tech.area === "frontend"
  );
  const backendTechnologies = TechnologiesList.filter(
    (tech) => tech.area === "backend"
  );
  return (
    <main className="flex flex-col items-center justify-center">
      <Box className="w-[80%] mt-[3%] flex flex-row justify-between">
        <Technologies
          technologies={frontendTechnologies}
          title="Frontend Technologies"
        />
        <Technologies
          technologies={backendTechnologies}
          title="Backend Technologies"
        />
      </Box>
    </main>
  );
}
