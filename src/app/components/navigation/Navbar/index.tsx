"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Switch, Toolbar } from "@mui/material";
import { ButtonNames } from "../../../misc";
import Image from "next/image";
import britishflag from "../../../imgs/britishflag.png";
import spanishflag from "../../../imgs/spanishflag.png";

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
          {ButtonNames.map((name, index) => (
            <Button className="text-white" key={index}>
              {name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
