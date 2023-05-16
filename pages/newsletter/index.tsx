import MainBanner from "@/components/MainBanner/MainBanner";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles1 from "@/styles/components/MainBanner.module.scss";
import Breadcrumbsec from "@/components/Breadcrumbs/Breadcrumbsec";
import styles from "@/styles/pages/newsletter.module.scss";
import SmallCardSec from "@/components/SmallCardSec/SmallCardSec";
const index = () => {
  return (
    <Wrapper>
      <Box className={`${styles1.container_otr} ${styles1.newsBanner}`}>
        <MainBanner>
          <Box className={styles1.banner_back}>
            <figure>
              <Image
                src={assest.banner_back}
                alt="img"
                width={1000}
                height={1000}
              />
            </figure>
          </Box>
          <Image
            src={assest.small_elp}
            alt="img"
            className={styles1.small_elps}
            width={133}
            height={133}
          />
          <Image
            src={assest.big_elp}
            alt="img"
            className={styles1.big_elps}
            width={133}
            height={133}
          />
          <Breadcrumbsec link1="Home" link3="Newsletter Issues" />

          <Stack direction="row" className="innerBannerContent">
            <Box className="contentLeftCol">
              <Typography variant="h1">Newsletter Archive.</Typography>
              <Typography variant="body2">
                Read all the past newsletters I have sent here.
              </Typography>
            </Box>
          </Stack>
        </MainBanner>
        <Box className={styles.newsletter_sec}>
            <Container fixed>
<SmallCardSec/>
    </Container>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default index;
