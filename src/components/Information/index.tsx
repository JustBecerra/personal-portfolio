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
    <Box className="flex w-[85%] h-auto lg:flex-row min-[310px]:flex-col sm:flex-col justify-center items-center gap-[10%] my-auto">
      <Box className="w-[40%] h-[40%]">
        <Image src={sonriente} alt="" style={{ borderRadius: "1rem" }} />
      </Box>
      <Box className="flex justify-center items-center md:w-[40%] h-[50%] min-[310px]:w-[80%] flex-col gap-[1rem] min-[310px]:gap-[2rem]">
        <Typography className="md:!text-[2.5rem] min-[310px]:!text-[1.25rem] md:!whitespace-normal min-[310px]:!whitespace-nowrap !font-medium text-center min-[310px]:mt-[1rem]">
          {t("welcome")}
        </Typography>
        <Typography className="md:!text-[1.25rem] min-[310px]:!text-[0.75rem] min-[310px]:w-[100%] text-center">
          {t("intro")}
        </Typography>
        <Typography className="md:!text-[1.25rem] min-[310px]:!text-[0.75rem] min-[310px]:w-[100%] text-center">
          {t("ifyouwish")}
        </Typography>
        <Box className="flex flex-row items-center gap-[2rem] max-[600px]:w-[100%]">
          <Link href="https://github.com/JustBecerra" target="_blank">
            <GitHubIcon className="w-[2rem] h-[2rem] rounded-full shadow-lg hover:shadow-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/justo-becerra-14868a1b4/"
            target="_blank"
          >
            <LinkedInIcon className="w-[2rem] h-[2rem] rounded-lg shadow-lg hover:shadow-cyan-500" />
          </Link>
          <Typography className="md:!text-[1.5rem] min-[310px]:!text-[0.75rem] !font-medium">
            justj.becerra@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
