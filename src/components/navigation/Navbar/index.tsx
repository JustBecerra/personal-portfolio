"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import britishflag from "../../../../public/britishflag.png";
import spanishflag from "../../../../public/spanishflag.png";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next-intl/link";

export const Navbar = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [isMounted, setIsMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const currentLocale = useLocale();
  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  React.useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: SelectChangeEvent) => {
    router.replace(pathname, { locale: event.target.value });
  };
  return (
    <AppBar position="static" className="!bg-transparent">
      <Toolbar disableGutters>
        {windowWidth > 620 ? (
          <Box className="ml-[3%] w-[100%] flex flex-row gap-x-2 items-center">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel
                sx={{
                  "&.Mui-focused": {
                    color: "white !important",
                  },
                }}
                className="!text-white"
              >
                {t("language")}
              </InputLabel>
              <Select
                onChange={handleChange}
                value={currentLocale}
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
              src={currentLocale === "en" ? britishflag : spanishflag}
              alt=""
              width={38}
              height={30}
            />
            <Link href="/">
              <Button className="!text-white !normal-case">
                {t("homenavbar")}
              </Button>
            </Link>
            <Link href="/technologies">
              <Button className="!text-white !normal-case">
                {t("technologiesnavbar")}
              </Button>
            </Link>
            <Link href="/projects">
              <Button className="!text-white !normal-case">
                {t("projectsnavbar")}
              </Button>
            </Link>
          </Box>
        ) : (
          isMounted && (
            <>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  className="flex flex-col bg-black h-[100%] gap-[1rem]"
                >
                  <Select
                    onChange={handleChange}
                    value={currentLocale}
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
              </Drawer>
            </>
          )
        )}
      </Toolbar>
    </AppBar>
  );
};
