import { Box, Typography } from "@mui/material";
import { Navbar } from "./components/navigation/Navbar";
import Image from "next/image";
import sonriente from "./imgs/sonriente.jpg";
import { Information } from "./components/Information";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Box
        className="bg-[url('../app/imgs/night-road.jpg')]"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        width="100vw"
        height="100vh"
      >
        <Navbar />
        <Information />
      </Box>
    </main>
  );
}
