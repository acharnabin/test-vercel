import styles from '@/styles/pages/favourites.module.scss';
import Breadcrumbsec from '@/components/Breadcrumbs/Breadcrumbsec';
import MainBanner from '@/components/MainBanner/MainBanner';
import assest from '@/json/assest';
import Wrapper from '@/layout/wrapper/Wrapper';
import styles1 from "@/styles/components/MainBanner.module.scss";
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

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
                    <Breadcrumbsec link1="Home" link3='Favourites' />
                    <Stack direction='row' className="innerBannerContent">
                        <Box className="contentLeftCol">
                            <Typography variant='h1'>Your Favorites</Typography>
                            <Typography variant='body2'>These are the tools and posts you have favourited. You can remove them from your favourites by clicking the bookmark icon.</Typography>
                        </Box>
                    </Stack>
                </MainBanner>
            </Box>
            <Box className={styles.pageFavouritesWrapper}>
                <Container fixed>
                    <Paper elevation={0}>
                        <Typography variant='body1'>Please sign up or login to view your favourited AI tools and posts.</Typography>
                        <Button>
                            <Image
                                src={assest.google_icon}
                                alt="icon"
                                width={22}
                                height={22}
                            /> Sign in with google
                        </Button>
                    </Paper>
                </Container>
            </Box>
        </Wrapper>
    )
}

export default index