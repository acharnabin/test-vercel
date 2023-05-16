import { Box } from "@mui/system";
import React from "react";
import styles from "@/styles/components/card.module.scss";
import { Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import assest from "@/json/assest";
import Link from "next/link";

export default function CardBlue() {
  return (
    <>
      <Box className={styles.blue_card}>
        <Box className={styles.blue_card_wrap}>
        <Typography variant="h3">Discover useful new AI tools.</Typography>
        <Typography variant="body1">
          Join 90,000+ AI enthusiasts getting weekly updates on new tools.
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Enter email address" variant="outlined"/>
          <Button className={styles.submit_btn}>
          Subscribe <span><Image src={assest.send_icon} alt="icon" width={13} height={12}/></span>
          </Button>
        </Box>
        <Box className={styles.btm_portion} >
            <Typography variant="body1">
            Unsubscribe at any time.
            </Typography>
            <Link href={'/'}>{"Read past issues " + ">"}</Link>
        </Box>
        </Box>
      </Box>
    </>
  );
}
