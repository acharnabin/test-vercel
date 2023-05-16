import { Box, Container } from '@mui/material';
import React from 'react'
import styles from "@/styles/components/MainBanner.module.scss";
import useTheme from '@/hooks/useTheme';
import assest from '@/json/assest';
interface bodyprops {
  children: any
}
const MainBanner = (props: bodyprops) => {
  const { children } = props
  const { theme } = useTheme()
  return (
    <Box className={styles.BannerWrap}>
      <Box
        className={`mainBannerGlobal ${styles.mainBanner}`}
        sx={{
          backgroundImage:
            theme === "dark-mode"
              ? `url(${assest.darkBanner})`
              : `url(/assets/images/bannerbg.png)`,
        }}
      >
        <Container fixed>{children}</Container>
      </Box>
    </Box>
  );
}

export default MainBanner;