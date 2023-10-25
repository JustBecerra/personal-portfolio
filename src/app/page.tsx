import { Box, Typography } from "@mui/material";
import { Navbar } from "./components/navigation/Navbar";
import Image from "next/image";
import sonriente from "./imgs/sonriente.jpg";

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
        <Box
          sx={{
            width: "85%",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "5%",
            gap: "10%",
          }}
        >
          <Box sx={{ width: "40%", height: "40%" }}>
            <Image src={sonriente} alt="" style={{ borderRadius: "1rem" }} />
          </Box>
          <Box
            sx={{
              width: "40%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Welcome, I&apos;m Justo Becerra
            </Typography>
            <Typography sx={{ fontSize: "1.25rem", textAlign: "center" }}>
              Software engineer with 2 years of experience in developing and
              maintaining web and mobile applications.
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
