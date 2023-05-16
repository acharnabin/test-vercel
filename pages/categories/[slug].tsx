import Wrapper from "@/layout/wrapper/Wrapper";
import React from "react";
import styles1 from "@/styles/components/MainBanner.module.scss";
import styles2 from "@/styles/components/card.module.scss";
import MainBanner from "@/components/MainBanner/MainBanner";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import assest from "@/json/assest";
import Breadcrumbsec from "@/components/Breadcrumbs/Breadcrumbsec";
import styles from "@/styles/pages/catagories.module.scss";
import RelatedButton from "@/ui/Buttons/RelatedButton";
import SearchArea from "@/components/SearchArea/SearchArea";
import Chips from "@/components/Chips/Chips";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSec from "@/components/CardSec/CardSec";
import useTools, { useToolsWithFilters } from "@/hooks/api/useTools";
import { GetServerSideProps } from "next";
import {
  getCategoryListQuery,
  getToolListQuery,
} from "@/api/functions/cms.api";
import { IgetCategoryListQueryItem } from "@/interface/apiresponse.interface";
import { mediaUrl } from "@/api/endpoints";
import { useRouter } from "next/router";
import NoData from "@/components/NoData";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const toolList = await getCategoryListQuery();
  console.log(query?.slug)
  const cardList = await getToolListQuery({
    categorySlug: query?.slug,
  });

  return {
    props: {
      toolList,
      cardList,
    },
  };
};

const Index = ({ toolList, cardList }) => {
  const bannerloop = [
    {
      title: "Music composition:",
      para: "AI algorithms can generate original music or assist musicians in creating new compositions.",
    },
    {
      title: "Audio mastering",
      para: "AI tools can optimize audio quality, making the mastering process faster and more efficient.",
    },
    {
      title: "Music recommendation",
      para: "AI systems analyze listener preferences to curate personalized playlists and suggest new artists or songs.",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { isLoading, isFetching, data } = useTools(toolList);
  const router = useRouter();
  const { isLoading: isToolsLoading, data: ToolsData } = useToolsWithFilters(
    cardList,
    { categorySlug: router?.query?.slug }
  );

  console.log(router?.query?.slug )

  return (
    <Wrapper>
      <Box className={styles1.container_otr}>
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
          <Breadcrumbsec link1="Home" link2="Categories" link3="Music" />
          <Box className={styles1.catagory_ban}>
            <Typography variant="h1">Browse 33+ Best AI Music Tools</Typography>
            <Typography variant="body1">
              AI music tools provide numerous benefits in the music industry,
              such as enhanced creativity, personalized playlists, and efficient
              music production. Some use cases include:
            </Typography>
            <Box className={styles1.card_wrap}>
              {" "}
              <Grid
                container
                spacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {bannerloop.map((item, index) => {
                  return (
                    <Grid item md={4} sm={6}>
                      <Box className={styles1.ban_card}>
                        <Image
                          src={assest.catbanarrow}
                          alt="img"
                          width={12}
                          height={15}
                        />
                        <Typography variant="h3">{item.title}</Typography>
                        <Typography variant="body1">{item.para}</Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </MainBanner>
      </Box>
      <Container fixed>
        <Box className={styles.catagory_body}>
          <Box className={styles.relatedBox}>
            <span className={styles.sub_txt}>Related:</span>
            <RelatedButton type="button">
              <Typography variant="button">Text to speech</Typography>
            </RelatedButton>
            <RelatedButton type="button">
              <Typography variant="button">Video generator</Typography>
            </RelatedButton>
          </Box>
          <SearchArea />
          <Box className={styles1.slider_sec}>
            <Slider {...settings}>
              {data?.data?.map(
                (item: IgetCategoryListQueryItem, index: number) => (
                  <Chips
                    text={item.name}
                    img={mediaUrl(`tool_category/${item.logo}`)}
                    slug={item?.slug}
                  />
                )
              )}
            </Slider>
          </Box>
          <Box className={styles2.card_sec_wrapper}>
            {ToolsData?.status === 200 ? (
              <> {!!ToolsData && <CardSec data={ToolsData?.data} />}</>
            ) : (
              <NoData />
            )}
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Index;
