import { Box, Grid } from "@mui/material";
import React from "react";
import CardBlue from "../CardBlue/CardBlue";
import SmallCard from "../SmallCard/SmallCard";
import styles from "@/styles/components/smallcard.module.scss";
import assest from "@/json/assest";
const SmallCardSec = () => {
  const cardloop = [
    {
      time: "08 Apr 2023",
      title: "Cool AI Tools of the Week - Prompt Manager & More!",
      img: `${assest.smallcard2}`,
    },
    {
      time: "01 Apr 2023",
      title: "Cool AI Tools of the Week - Meeting Builder & More!",
      img: `${assest.smallcard1}`,
    },
    {
      time: "24 Mar 2023",
      title: "Cool AI Tools of the Week - ChatGPT Website Builder & More!",
      img: `${assest.smallcard3}`,
    },
    {
        time: "24 Mar 2023",
        title: "Cool AI Tools of the Week - ChatGPT Website Builder & More!",
        img: `${assest.smallcard3}`,
      },
    {
      time: "17 Mar 2023",
      title: "Cool AI Tools of the Week - Midjourney Prompt Builder & More!",
      img: `${assest.smallcard3}`,
    },
    {
      time: "10 Mar 2023",
      title: "Cool AI Tools of the Week - Travel Assistant & More!",
      img: `${assest.smallcard4}`,
    },
    {
      time: "03 Mar 2023",
      title: "Cool AI Tools of the Week - Image Colorizer & More!",
      img: `${assest.smallcard5}`,
    },

    {
      time: "24 Feb 2023",
      title: "Cool AI Tools of the Week - Scribble Diffusion & More!",
      img: `${assest.smallcard6}`,
    },
    {
      time: "10 Feb 2023",
      title: "Cool AI Tools of the Week - AI Workout Generator & More",
      img: `${assest.smallcard7}`,
    },
  ];
  return (
    <Box className={styles.small_card_sec}>
      <Grid container rowSpacing={4} columnSpacing={2}>
       
        {cardloop.map(
          (item: { time: string; title: string; img: string }, index: any) => {
            return (
              <>
                {" "}
                {index == 2 ? (
                  <Grid item md={4} xs={12}>
                    <CardBlue />
                  </Grid>
                ) : (
                  <Grid item md={4} xs={12}>
                    <SmallCard
                      time={item.time}
                      title={item.title}
                      img={item.img}
                    />
                  </Grid>
                )}
              </>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default SmallCardSec;
