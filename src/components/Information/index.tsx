"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import sonriente from "../../../public/sonriente.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useTranslations } from "next-intl";
export const Information = () => {
  const t = useTranslations("home");
  return (
    <Box className="flex w-[85%] h-auto flex-row justify-center items-center mt-[5%] gap-[10%]">
      <Box className="w-[40%] h-[40%]">
        <Image src={sonriente} alt="" style={{ borderRadius: "1rem" }} />
      </Box>
      <Box className="flex justify-center items-center w-[40%] h-[50%] flex-col gap-[1rem]">
        <Typography className="text-[2.5rem] font-medium text-center">
          {t("welcome")}
        </Typography>
        <Typography className="text-[1.25rem] text-center">
          {t("intro")}
        </Typography>
        <Typography className="text-[1.25rem] text-center">
          {t("ifyouwish")}
        </Typography>
        <Box className="flex flex-row items-center gap-[2rem]">
          <Link href="https://github.com/JustBecerra" target="_blank">
            <GitHubIcon className="w-[2rem] h-[2rem] rounded-full shadow-lg hover:shadow-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/justo-becerra-14868a1b4/"
            target="_blank"
          >
            <LinkedInIcon className="w-[2rem] h-[2rem] rounded-lg shadow-lg hover:shadow-cyan-500" />
          </Link>
          <Typography className="text-[1.25rem] font-medium">
            justj.becerra@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
