import assest from "@/json/assest";
import Image from "next/image";
import React from "react";
import styles from "@/styles/layout/_footer.module.scss";
import { Typography } from "@mui/material";
import Link from "next/link";
import { Box, Container } from "@mui/system";
const Footer = () => {
  return (
    <footer className={styles.ftr_sec}>
      <Container fixed>
        <Box className={styles.ftr_wrap} >
        <Typography variant="body1">
     © 2023 <Link href={'/'}>Futurepedia</Link>, Inc. All rights reserved
     </Typography>
        </Box>
      </Container>
    
    </footer>
  );
};

export default Footer;
