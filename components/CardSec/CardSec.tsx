import React from "react";
import styles from "@/styles/components/card.module.scss";
import assest from "@/json/assest";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import CardWhite from "../CardWhite/CardWhite";
import CardBlue from "../CardBlue/CardBlue";
import {
  IgetToolListQuery,
  IgetToolListQueryItem,
} from "@/interface/apiresponse.interface";

interface ICardSecProps {
  data: IgetToolListQueryItem[];
}

export default function CardSec({ data }: ICardSecProps) {
  console.log(data,'data')
  return (
    <>
      <Box className={styles.card_sec}>
        <Grid container spacing={2}>
          {data?.map((item, index) => {
            return (
              <>
                {index === 2 ? (
                  <Grid item md={4} xs={12} key={index}>
                    <CardBlue />
                  </Grid>
                ) : (
                  <Grid item md={4} xs={12} key={index}>
                    <CardWhite item={item} />
                  </Grid>
                )}
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
