import Wrapper from "@/layout/wrapper/Wrapper";
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import Image from "next/image";
import assest from "@/json/assest";
import MainBanner from "@/components/MainBanner/MainBanner";
import styles1 from "@/styles/components/MainBanner.module.scss";
import Breadcrumbsec from "@/components/Breadcrumbs/Breadcrumbsec";
import styles from "@/styles/pages/discover.module.scss";
import CustomButtonWithIcon from "@/ui/Buttons/CustomButtonWithIcon";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@/ui/Icons/EditIcon";
import CopyIcon from "@/ui/Icons/CopyIcon";
import Link from "next/link";
import CardWhite from "@/components/CardWhite/CardWhite";
import { GetServerSideProps } from "next";
import Popover from "@mui/material/Popover";
import {
  getCategoryListQuery,
  getToolDetails,
  getToolListQuery,
} from "@/api/functions/cms.api";
import { useToolsDetails, useToolsWithFilters } from "@/hooks/api/useTools";
import useTheme from "@/hooks/useTheme";
import {
  IgetToolListQuery,
  ItoolDetails,
} from "@/interface/apiresponse.interface";
import { useRouter } from "next/router";
import moment from "moment";
import { mediaUrl } from "@/api/endpoints";
import CustomNextImage from "@/ui/CustomImage/CustomNextImage";
import { NextSeo } from "next-seo";
import NoData from "@/components/NoData";
import CopytoclipWrapper from "@/components/CopytoclipWrapper";
import {

  FacebookShareButton,

  LineShareButton,
  LinkedinShareButton,

  TwitterShareButton,

} from "react-share";
import { checkWindow } from "@/lib/functions/_helpers.lib";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const toolList = await getCategoryListQuery();
  const details = await getToolDetails({ slug: query?.slug || "" });
  const cardList = await getToolListQuery();

  return {
    props: {
      toolList,
      cardList,
      details,
    },
  };
};

interface IdiscoverProps {
  details: ItoolDetails;
  cardList: IgetToolListQuery;
}

const Index = ({ cardList, details }: IdiscoverProps) => {
  const router = useRouter();
  const { data } = useToolsDetails(details, {
    slug: router?.query?.slug || "",
  });

  const { theme } = useTheme();
  console.log(data, details, "details");

  if (data?.status === 500) {
    return (
      <Wrapper>
        <NextSeo title={"Not found"} />
        <NoData />
      </Wrapper>
    );
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const currentUrl = checkWindow() ? window.location.href : null;

  const open = Boolean(anchorEl);

  return (
    <>
      <NextSeo title={data?.data?.name} />
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
            <Breadcrumbsec
              link1="Home"
              link2={data?.data?.toolCategories[0].slug}
              link3={data?.data?.name}
            />
            <Stack direction="row" className="innerBannerContent">
              <Box className="contentLeftCol discoverContentLeftCol">
                <Typography variant="h1">{data?.data?.name}</Typography>
                <a href={data?.data?.website_link} target="_blank">
                  <CustomButtonWithIcon type="button">
                    <Typography variant="body1">
                      <span>
                        <Image
                          src={assest.visit_icon}
                          alt="img"
                          width={10}
                          height={10}
                        />
                      </span>
                      Visit site
                    </Typography>
                  </CustomButtonWithIcon>
                </a>
              </Box>
              <Box className={styles.discoverContentRightCol}>
                <Stack direction="row" className={styles.shareGroup}>
                  <Button className={styles.saveBtn}>
                    <Image
                      src={assest.iconBookmark}
                      width={9}
                      height={11}
                      alt="icon"
                    />
                    <Typography variant="caption">
                      Save ({data?.data?.favouriteCount})
                    </Typography>
                  </Button>
                  <Button
                    className={styles.shareBtn}
                    onClick={handlePopoverOpen}
                  >
                    <ShareIcon />
                  </Button>
                  <Popover
                    id="mouse-over-popover"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <List>
                      <ListItem className="socialLinks">
                        <FacebookShareButton url={currentUrl}>
                          <Image
                            src={assest.iconFacebook}
                            width={32}
                            height={32}
                            alt="Facebook"
                          />
                        </FacebookShareButton>
                        {/* <Link href="/" title="Facebook">
                         
                        </Link> */}
                        {/* <Link href="/" title="Twitter"> */}
                        <TwitterShareButton url={currentUrl}>
                          <Image
                            src={assest.iconTwitter}
                            width={32}
                            height={32}
                            alt="Twitter"
                          />
                        </TwitterShareButton>

                        <LinkedinShareButton url={currentUrl}>
                          <Image
                            src={assest.iconLinkdin}
                            width={32}
                            height={32}
                            alt="Linkdin"
                          />
                        </LinkedinShareButton>
                      </ListItem>
                      <ListItem className="listCopyLink">
                        <CopytoclipWrapper value={currentUrl}>
                          <Button>
                            <CopyIcon /> Copy Link
                          </Button>
                        </CopytoclipWrapper>
                      </ListItem>
                    </List>
                  </Popover>
                </Stack>
              </Box>
            </Stack>
          </MainBanner>
        </Box>
        <Box className={styles.pageDiscoverWrap}>
          <Container fixed>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 2, lg: 6 }}>
                <Grid item xs={12} md={6}>
                  <Box className={styles.productInformation}>
                    <Typography variant="h2">Product Information</Typography>
                    <figure className={styles.productImgFig}>
                      <CustomNextImage
                        src={mediaUrl(`tool/${data?.data?.image}`)}
                        width={537}
                        height={431}
                        layout="responsive"
                        alt="productimage"
                      />
                    </figure>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className={styles.productDetails}>
                    <Typography variant="h4">
                      {data?.data?.short_description}
                    </Typography>
                    <Stack direction="row" className={styles.addDate}>
                      <Image
                        src={assest.iconClock}
                        width={12}
                        height={12}
                        alt="icon"
                      />
                      <Typography variant="caption">
                        Added on{" "}
                        {moment(data?.data?.createdAt).format("MMMM DD")}
                      </Typography>
                    </Stack>
                    {data?.data?.toolPricingypes?.map((_item) => (
                      <Button className={styles.light_btn}>
                        <span>
                          <CustomNextImage
                            src={mediaUrl(`pricing_type/${_item?.logo}`)}
                            alt={_item?.name}
                            width={15}
                            height={15}
                          />
                        </span>{" "}
                        {_item?.name}
                      </Button>
                    ))}

                    <Typography variant="body2">
                      Paid plans start from{" "}
                      <span>
                        ${data?.data?.price}/{data?.data?.price_duration}
                      </span>
                    </Typography>
                    <Button className={styles.suggestEdit}>
                      Suggest edit <EditIcon />
                    </Button>
                    <Stack direction="row" className={styles.embedCodeSec}>
                      <Box className={styles.setLogo}>
                        {theme === "dark-mode" ? (
                          <Image
                            src={assest.logo}
                            width={132}
                            height={45}
                            alt="logo"
                          />
                        ) : (
                          <Image
                            src={assest.logo2}
                            width={132}
                            height={45}
                            alt="logo"
                          />
                        )}

                        <Box className={styles.bookmarkIcon}>
                          <Image
                            src={assest.iconBookFilles}
                            width={14}
                            height={14}
                            alt="icon"
                          />
                          <Typography variant="overline">
                            {data?.data?.like_count}
                          </Typography>
                        </Box>
                      </Box>
                      <CopytoclipWrapper value={data?.data?.embaded_code || ""}>
                        <Button className={styles.copyCode}>
                          <CopyIcon />
                          <Typography variant="caption">
                            COPY EMBED CODE
                          </Typography>
                        </Button>
                      </CopytoclipWrapper>
                    </Stack>
                    <Link href="/" className={styles.promoteLink}>
                      Promote your Tool
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* <Box className={styles.features}>
                  <Typography variant="h3">WhatTheDiff Features</Typography>
                  <Typography variant="body1">
                    Your AI-powered code review assistant. Save costly developer
                    time by automating pull request summaries. Open a pull
                    request and get a summary of the changes in seconds.
                    Instantly understand the implications of small pull requests
                    and get a huge headstart on big ones.
                  </Typography>
                </Box> */}
                  <div
                    className={styles.features}
                    dangerouslySetInnerHTML={{
                      __html: data?.data?.description,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className={`${styles.features} ${styles.browseTools}`}>
                    <Typography variant="h3">
                      Browse AI Tools Similar to WhatTheDiff
                    </Typography>
                    <List>
                      {data?.topThreeCategory?.map((_item) => (
                        <ListItem>
                          <Link href={`/categories/${_item.slug}`}>
                            {" "}
                            Browse {_item?.toolCount} {_item?.name} tools.
                          </Link>
                        </ListItem>
                      ))}
                      {/* <ListItem>Browse 50 AI code assistant tools.</ListItem>
                      <ListItem>Browse 115 AI developer tools.</ListItem>
                      <ListItem>Browse 95 AI low-code/no-code tools.</ListItem> */}
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={styles.toolsCardSec}>
              <Typography variant="h2">
                Alternative AI Tools for {data?.data?.name}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, lg: 4 }}>
                  {data?.related?.map((_data, index) => {
                    return (
                      <Grid item lg={4} md={6} xs={12} key={index}>
                        <CardWhite item={_data} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
};

export default Index;
