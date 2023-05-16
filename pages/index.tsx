import {
  fetchAboutUs,
  getCategoryListQuery,
  getToolListQuery,
} from "@/api/functions/cms.api";
import AllAssets from "@/components/AllAssets";
import CardSec from "@/components/CardSec/CardSec";
import MainBanner from "@/components/MainBanner/MainBanner";
import Wrapper from "@/layout/wrapper/Wrapper";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { GetServerSideProps } from "next";
import { useState } from "react";
import styles1 from "@/styles/components/MainBanner.module.scss";
import Image from "next/image";
import assest from "@/json/assest";
import { SelectChangeEvent } from "@mui/material/Select";
import Chips from "@/components/Chips/Chips";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchArea from "@/components/SearchArea/SearchArea";
import useTools, { useToolsWithFilters } from "@/hooks/api/useTools";
import {
  IgetCategoryListQuery,
  IgetCategoryListQueryItem,
  IgetToolListQuery,
} from "@/interface/apiresponse.interface";
import { mediaUrl } from "@/api/endpoints";
import ArrowDownIcon from "@/ui/Icons/ArrowDownIcon";
import BatchIcon from "@/ui/Icons/BatchIcon";
import GroupUser from "@/ui/Icons/GroupUser";
import { useRouter } from "next/router";

// === get serverside methods ===4
export const getServerSideProps: GetServerSideProps = async (context) => {
  const toolList = await getCategoryListQuery();
  const cardList = await getToolListQuery();

  return {
    props: {
      toolList,
      cardList,
    },
  };
};

interface HomeProps {
  toolList: IgetCategoryListQuery;
  cardList: IgetToolListQuery;
}

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

const filterOption = [
  {
    name: "Today",
    value: "today",
  },
  {
    name: "This week",
    value: "this_week",
  },
  {
    name: "This month",
    value: "this_month",
  },
  {
    name: "All time",
    value: "all_time",
  },
];

export default function Home({ toolList, cardList }: HomeProps) {
  const [time, setTime] = useState("");
  const { isLoading, isFetching, data } = useTools(toolList);
  const router = useRouter();
  const { isLoading: isToolsLoading, data: ToolsData } = useToolsWithFilters(
    cardList,
    {}
  );
  const [filterState, setFilterState] = useState({
    tools_added: "all_time",
    news_added: "all_time",
  });

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  const handleSelectFilters = (event: SelectChangeEvent, key: string) => {
    setFilterState({
      ...filterState,
      [key]: event.target.value,
    });
    


  };

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

          <Box className={styles1.home_banner}>
            <Box className={styles1.heading_sec}>
              <Typography variant="h2">FUTUREPEDIA</Typography>
              <span>
                <BatchIcon />
                190,000+
              </span>
              <span>
                <GroupUser />
                90,000+
              </span>
            </Box>

            <Typography variant="h1">The Largest AI Tools Directory</Typography>
            <Typography variant="body1">
              Browse 1500+ AI tools in 50+ categories like copywriting, image
              generation and video editing. Search and filter the tools by
              categories, pricing and features.
            </Typography>
            <Box className={styles1.drop_area}>
              <Box
                className="formGroup"
                sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
              >
                <Typography variant="caption">Tools Added</Typography>
                <Select
                  value={filterState?.tools_added}
                  onChange={(e)=>handleSelectFilters(e,'tools_added')}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {filterOption?.map((item) => (
                    <MenuItem value={item.value}>{item?.name}</MenuItem>
                  ))}
                </Select>
              </Box>
              <Box
                className="formGroup"
                sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
              >
                <Typography variant="caption">News Added </Typography>
                <Select
                  value={filterState?.news_added}
                  onChange={(e)=>handleSelectFilters(e,'news_added')}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {filterOption?.map((item) => (
                    <MenuItem value={item.value}>{item?.name}</MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
            <SearchArea />
            <Box className={styles1.slider_sec}>
              <Slider {...settings}>
                {/* {chiploop.map(
                  (item: { txt: string; image: string }, index: any) => {
                    return <Chips text={item.txt} img={item.image} />;
                  }
                )} */}
                {data?.data?.map(
                  (item: IgetCategoryListQueryItem, index: number) => (
                    <Chips
                      text={item.name}
                      img={mediaUrl(`tool_category/${item?.logo}`)}
                      slug={item?.slug}
                      darkImage={mediaUrl(`tool_category/${item?.logo_inverse}`)}
                    />
                  )
                )}
              </Slider>
            </Box>
          </Box>
        </MainBanner>
        <Button className={styles1.down_arr}>
          <ArrowDownIcon />
        </Button>
      </Box>
      <Container fixed>
        {!!ToolsData && <CardSec data={ToolsData?.data} />}
      </Container>
    </Wrapper>
  );
}
