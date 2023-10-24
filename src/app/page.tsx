import { Box } from "@mui/material";
import { Navbar } from "./components/navigation/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Box
        className="bg-[url('../app/imgs/night-road.jpg')]"
        width="100vw"
        height="100vh"
      >
        <Navbar />
      </Box>
    </main>
  );
}
