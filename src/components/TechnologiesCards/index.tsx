import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React from "react";

type technologiesProps = {
  name: string;
  icon: StaticImageData;
  area: string;
  time: number;
};

export const TechnologiesCards = ({
  technologies,
  title,
}: {
  technologies: technologiesProps[];
  title: string;
}) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const t = useTranslations("technologies");
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box className="md:w-[40%] md:h-[70%] min-[310px]:w-[90%] h-auto items-center justify-center">
      <Typography className="text-center">{title}</Typography>
      <Grid
        container
        spacing={8}
        className="justify-center items-center md:mt-4 min-[310px]:mt-1 md:gap-[2rem] min-[310px]:gap-[1rem]"
      >
        {technologies.map((tech, i) => (
          <Grid
            key={i}
            sx={{
              "&&.MuiGrid-item": {
                paddingTop: "1rem",
                paddingLeft: windowWidth > 1024 ? "64px" : "3rem",
              },
            }}
            item
            className="md:w-[30%] min-[310px]:w-[30%]"
          >
            <Paper
              sx={[
                {
                  boxShadow: "0px 0px 12px 2px white",
                  "&:hover": {
                    boxShadow: "0px 0px 12px 2px #03680b",
                  },
                },
              ]}
              className="flex min-[310px]:w-[5rem] md:w-[8rem] md:h-[7rem] min-[310px]:h-[5rem] flex-col justify-center items-center bg-white border-4 border-white hover:border-[#03680b]"
            >
              <Typography className="text-center md:mt-4 min-[310px]:mt-1 md:text-[1rem] min-[310px]:text-[0.75rem]">
                {tech.name}
              </Typography>
              <Typography className="text-center md:mb-4 min-[310px]:mb-1 md:text-[1rem] min-[310px]:text-xs">
                {tech.time} {tech.time == 1 ? t("year") : t("years")}
              </Typography>
              <Box className="w-[20%] h-[20%] md:mb-4 min-[310px]:mb-0">
                <Image src={tech.icon} alt="" />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
