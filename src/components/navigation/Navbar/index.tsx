"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import britishflag from "../../../../public/britishflag.png";
import spanishflag from "../../../../public/spanishflag.png";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

export const Navbar = () => {
  const [language, setLanguage] = React.useState("en");
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    router.push(pathname, { locale: event.target.value });
  };
  return (
    <AppBar position="static" className="bg-transparent">
      <Toolbar disableGutters>
        <Box className="ml-[3%] w-[100%] flex flex-row gap-x-2 items-center">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel
              sx={{
                "&.Mui-focused": {
                  color: "white",
                },
              }}
              className="text-white focus:text-white"
            >
              Language
            </InputLabel>
            <Select
              onChange={handleChange}
              value={language}
              label="Language"
              sx={{
                "&& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                color: "white",
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
            </Select>
          </FormControl>
          <Image
            src={language === "en" ? britishflag : spanishflag}
            alt=""
            width={38}
            height={30}
          />
          <Link href="/">
            <Button className="text-white normal-case">
              {t("homenavbar")}
            </Button>
          </Link>
          <Link href="/technologies">
            <Button className="text-white normal-case">
              {t("technologiesnavbar")}
            </Button>
          </Link>
          <Link href="/projects">
            <Button className="text-white normal-case">
              {t("projectsnavbar")}
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
