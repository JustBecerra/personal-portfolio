"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Switch, Toolbar } from "@mui/material";
import Image from "next/image";
import britishflag from "../../../../public/britishflag.png";
import spanishflag from "../../../../public/spanishflag.png";
import Link from "next/link";

export const Navbar = () => {
  const [translate, setTranslate] = useState(false);
  return (
    <AppBar position="static" className="bg-transparent">
      <Toolbar disableGutters>
        <Box className="ml-[3%] w-[100%] flex flex-row gap-x-2">
          <Switch onClick={() => setTranslate((prev) => !prev)} />
          <Image
            src={!translate ? britishflag : spanishflag}
            alt=""
            width={38}
            height={30}
          />
          <Link href="/">
            <Button className="text-white normal-case">Home</Button>
          </Link>
          <Link href="/technologies">
            <Button className="text-white normal-case">Technologies</Button>
          </Link>
          <Link href="/projects">
            <Button className="text-white normal-case">Projects</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
