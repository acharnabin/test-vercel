import Wrapper from "@/layout/wrapper/Wrapper";
import {
  Box,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import * as React from "react";
import styles from "@/styles/pages/ainews.module.scss";
import NewsCard from "@/components/NewsCard/NewsCard";
import Image from "next/image";
import assest from "@/json/assest";
import MainBanner from "@/components/MainBanner/MainBanner";
import styles1 from "@/styles/components/MainBanner.module.scss";
import Breadcrumbsec from "@/components/Breadcrumbs/Breadcrumbsec";
import DarkButton from "@/ui/Buttons/DarkButton";
import ClockIcon from "@/ui/Icons/ClockIcon";
import StarIcon from "@/ui/Icons/StarIcon";
import PopularIconV from "@/ui/Icons/PopularIconV";
import { useNewsList } from "@/hooks/api/useNews";
import { GetServerSideProps } from "next";
import { getNewsListQuery } from "@/api/functions/cms.api";
import {
  IgetNewsListQuery,
  IgetNewsListQueryItem,
} from "@/interface/apiresponse.interface";
import NoData from "@/components/NoData";

// === get serverside methods ===4
export const getServerSideProps: GetServerSideProps = async (context) => {
  const newsList = await getNewsListQuery();

  return {
    props: {
      newsList,
    },
  };
};

interface aiNewsProps {
  newsList: IgetNewsListQuery;
}

const Index = ({ newsList }: aiNewsProps) => {
  const [time, setTime] = React.useState("");
  const { data } = useNewsList(newsList);

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  const [category, setCategory] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [sortby, setSortby] = React.useState("");

  const handleChange2 = (event: SelectChangeEvent) => {
    setSortby(event.target.value);
  };

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
          <Breadcrumbsec link1="Home" link3="News" />
          <Stack direction="row" className="innerBannerContent">
            <Box className="contentLeftCol">
              <Typography variant="h1">Latest AI News | All Time</Typography>
              <Typography variant="body2">210 News</Typography>
            </Box>
            <Box className={styles.contentRightCol}>
              <DarkButton
                type="button"
                startIcon={
                  <Image src={assest.iconAdd} width={9} height={9} alt="icon" />
                }
              >
                <Typography variant="caption">Submit</Typography>
              </DarkButton>
            </Box>
          </Stack>
        </MainBanner>
      </Box>
      <Container fixed>
        <Stack direction="row" className={styles.innerTopFilter}>
          <Stack direction="row" className={styles.filterGroupLeft}>
            <Box className="formGroup">
              <Typography variant="caption">Filter by time</Typography>
              <Select
                value={time}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">All Time</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
            <Box className="formGroup">
              <Typography variant="caption">Filter by category</Typography>
              <Select
                value={category}
                onChange={handleChange1}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </Stack>
          <Box className={`formGroup ${styles.sortdropdown}`}>
            <Typography variant="caption">Sort by:</Typography>
            <Select
              value={sortby}
              onChange={handleChange2}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <ClockIcon /> New
              </MenuItem>
              <MenuItem value={10}>
                <StarIcon /> Featured
              </MenuItem>
              <MenuItem value={20}>
                <PopularIconV /> Popular
              </MenuItem>
            </Select>
          </Box>
        </Stack>
        <Box className={styles.newsCardWrapper}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 2, lg: 4 }}>
            {data?.data?.length ? (
              data?.data.map((item: IgetNewsListQueryItem, index: number) => {
                return (
                  <Grid item xs={12} lg={6}>
                    <NewsCard item={item} />
                  </Grid>
                );
              })
            ) : (
              <NoData />
            )}
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Index;
