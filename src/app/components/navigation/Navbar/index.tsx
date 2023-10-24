import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Switch, Toolbar } from "@mui/material";
import { ButtonNames } from "../misc";
import Image from "next/image";
import britishflag from "../../../imgs/britishflag.png";

export const Navbar = () => {
  return (
    <AppBar position="static" className="bg-transparent bg-no-repeat">
      <Toolbar disableGutters>
        <Box className="ml-[3%] flex flex-row" width="100%">
          <Switch />
          <Image src={britishflag} alt="" width={30} height={30} />
          <Box className="ml-[3%] gap-x-2">
            {ButtonNames.map((name, index) => (
              <Button className="text-white" key={index}>
                {name}
              </Button>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
