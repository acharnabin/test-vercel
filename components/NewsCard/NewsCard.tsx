import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import styles from "@/styles/pages/ainews.module.scss";
import assest from "@/json/assest";
import Image from "next/image";
import Link from "next/link";
import LightBlueButton from "@/ui/Buttons/LightBlueButton";
import { IgetNewsListQueryItem } from "@/interface/apiresponse.interface";
import { isTypeNode } from "typescript";
import { getAgoTime } from "@/lib/functions/_date.lib";
interface Inewsprops {
  item: IgetNewsListQueryItem;
}
const NewsCard = ({ item }: Inewsprops) => {
  return (
    <Paper elevation={0} className={styles.cardNews}>
      <Stack direction="row" className={styles.paperHeader}>
        <Typography variant="h3">{item?.name}</Typography>
        <Stack direction="row" className={styles.newsday}>
          <Image src={assest.iconClock} width={11} height={11} alt="icon" />
          <Typography variant="caption">{getAgoTime(item?.createdAt)}</Typography>
        </Stack>
      </Stack>
      <a
        href={item?.website_link}
        target="_blank"
        className={styles.openNewsLink}
      >
        <Image src={assest.iconLink} width={14} height={12} alt="icon" />
        {item?.website_link}
      </a>
      <Typography variant="body1" className={styles.postedBy}>
        submitted by {item?.creator||'---'}
      </Typography>
      <Box className={styles.cardBottomSec}>
        <Grid container spacing={{ xs: 2 }}>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" className={styles.btnGroupLeft}>
              {item?.newsCategories?.map((_item) => (
                <LightBlueButton
                  type="button"
                  startIcon={
                    <Image
                      src={assest.iconBulb}
                      width={11}
                      height={11}
                      alt="icon"
                    />
                  }
                >
                  <Typography variant="caption">{_item?.name}</Typography>
                </LightBlueButton>
              ))}
              {/* {button1 ? (
                <LightBlueButton
                  type="button"
                  startIcon={
                    <Image
                      src={assest.iconBulb}
                      width={11}
                      height={11}
                      alt="icon"
                    />
                  }
                >
                  <Typography variant="caption">Interesting</Typography>
                </LightBlueButton>
              ) : null}
              {button2 ? (
                <LightBlueButton
                  type="button"
                  startIcon={
                    <Image
                      src={assest.iconBook}
                      width={11}
                      height={11}
                      alt="icon"
                    />
                  }
                >
                  <Typography variant="caption">Updates</Typography>
                </LightBlueButton>
              ) : null}
              {button3 ? (
                <LightBlueButton
                  type="button"
                  startIcon={
                    <Image
                      src={assest.iconBulb}
                      width={11}
                      height={11}
                      alt="icon"
                    />
                  }
                >
                  <Typography variant="caption">Research</Typography>
                </LightBlueButton>
              ) : null} */}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List className={styles.btnGroupRight}>
              <ListItem className={styles.mediaLike}>
                <Button>
                  <Image
                    src={assest.iconLike}
                    width={15}
                    height={15}
                    alt="icon"
                  />
                  <Typography variant="caption">Like</Typography>
                </Button>
                <Button>
                  <Image
                    src={assest.iconDislike}
                    width={15}
                    height={15}
                    alt="icon"
                  />
                  <Typography variant="caption">Dislike</Typography>
                </Button>
              </ListItem>
              <ListItem className={styles.btnSaved}>
                <Button>
                  <Image
                    src={assest.iconBookmark}
                    width={9}
                    height={11}
                    alt="icon"
                  />
                  <Typography variant="caption">
                    Save {item?.favouriteCount ? item?.favouriteCount : ""}
                  </Typography>
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default NewsCard;
