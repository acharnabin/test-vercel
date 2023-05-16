import { Box } from "@mui/system";
import React from "react";
import styles from "@/styles/components/card.module.scss";
import Image from "next/image";
import assest from "@/json/assest";
import { Button, List, ListItem, Popover, Typography } from "@mui/material";
import CustomButtonWithIcon from "@/ui/Buttons/CustomButtonWithIcon";
import CustomButtonOutline from "@/ui/Buttons/CustomButtonOutline";
import { IgetToolListQueryItem } from "@/interface/apiresponse.interface";
import { mediaUrl } from "@/api/endpoints";
import { Interface } from "readline";
import CustomNextImage from "@/ui/CustomImage/CustomNextImage";
import Link from "next/link";
import { useAppSelector } from "@/hooks/useAppSelector";
import useNotiStack from "@/hooks/useNotistack";
import validationText from "@/json/messages/validationText";

interface btnProps {
  text: string;
  icon: string;
}
interface typeProps {
  typeDetails: string;
}

interface ICardWhiteProps {
  item: IgetToolListQueryItem;
}
export default function CardWhite({ item }: ICardWhiteProps) {
  const {
    _id,
    image,
    isFeatured,
    like_count,
    price,
    price_duration,
    star,
    name,
    short_description,
    isVerified,
    toolFeatureTypes,
    toolFeatureTypesCount,
    toolPricingypes,
    toolCategories,
    website_link,
    recommended,
    favouriteCount,
    status,
    isDeleted,
    createdAt,slug
  } = item;

  const { isLoggedIn } = useAppSelector((s) => s.userSlice);
  const { toastError } = useNotiStack();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleAddToFavourite = () => {
    if (isLoggedIn) {
    } else {
      toastError(validationText.error.loginToContiue);
    }
  };

  return (
    <>
      <Box className={styles.card_block}>
        <a href={`/discover/${slug}`} target="_blank">
          <Box className={styles.card_uppr}>
            <figure>
              <CustomNextImage
                src={mediaUrl(`tool/${image}`)}
                alt="img"
                width={357}
                height={200}
              />
            </figure>
            {isFeatured && (
              <Button className={styles.setting_btn}>
                <span>
                  <Image
                    src={assest.settingIcon}
                    alt="icon"
                    width={12}
                    height={12}
                  />
                </span>
                Featured
              </Button>
            )}
          </Box>
        </a>

        <Box className={styles.card_btm}>
          <Box className={styles.card_btm_head}>
            <Box className={styles.card_btm_head_left}>
              <Box className={styles.rating}>
                <span>
                  <Image
                    src={assest.small_star}
                    alt="icon"
                    width={10}
                    height={10}
                  />
                </span>
                <Typography variant="body1">{star}</Typography>
              </Box>
              <Box className={styles.like_number}>
                <span>
                  <Image
                    src={assest.love_sign}
                    alt="icon"
                    width={10}
                    height={10}
                  />
                </span>
                <Typography variant="body1">{like_count}</Typography>
              </Box>
            </Box>
            <Box className={styles.card_btm_head_rgt}>
              {price ? (
                <Typography variant="body1">
                  ${price}/{price_duration}
                </Typography>
              ) : null}
            </Box>
          </Box>
          <Box className={styles.card_btm_body}>
            <a href={`/discover/${slug}`} target="_blank">
              <Typography variant="h3">
                {name}
                <span>
                  <Image
                    src={assest.deep_blue_tick}
                    alt="icon"
                    width={16}
                    height={16}
                  />
                </span>
              </Typography>
            </a>
            <Typography variant="body1">{short_description}</Typography>
            <Box className={styles.btn_list}>
              <List>
                {toolPricingypes?.map((data, index: number) => {
                  return (
                    <ListItem key={index}>
                      <Button className={styles.light_btn}>
                        <span>
                          <CustomNextImage
                            src={mediaUrl(`pricing_type/${data?.logo}`)}
                            alt={data?.logo}
                            width={15}
                            height={15}
                          />
                        </span>{" "}
                        {data?.name}
                      </Button>
                    </ListItem>
                  );
                })}
              </List>
              {toolFeatureTypesCount ? (
                <>
                  <Typography
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    variant="body1"
                    className={styles.blue_count}
                  >
                    <span>
                      <CustomNextImage
                        src={assest.twinkle}
                        alt="img"
                        width={20}
                        height={20}
                      />
                    </span>
                    {toolFeatureTypesCount}
                  </Typography>
                  <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <List>
                      {toolFeatureTypes?.map((data, index: number) => {
                        return (
                          <ListItem key={index}>
                            <Button className={styles.light_btn}>
                              <span>
                                <CustomNextImage
                                  src={mediaUrl(`feature_type/${data?.logo}`)}
                                  alt={data?.logo}
                                  width={15}
                                  height={15}
                                />
                              </span>{" "}
                              {data?.name}
                            </Button>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Popover>
                </>
              ) : null}
            </Box>
            <Box className={styles.type_list}>
              <List>
                {toolCategories?.map((data, index: number) => {
                  return <ListItem key={index}>#{data?.name}</ListItem>;
                })}
              </List>
            </Box>
            <Box className={styles.btn_list_btm}>
              <List>
                <ListItem>
                  <CustomButtonWithIcon type="button">
                    <a href={website_link} target="_blank">
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
                    </a>
                  </CustomButtonWithIcon>
                </ListItem>
                <ListItem>
                  <CustomButtonOutline
                    onClick={handleAddToFavourite}
                    type="button"
                  >
                    <Typography variant="body1">
                      <span>
                        <Image
                          src={assest.save_icon}
                          alt="img"
                          width={10}
                          height={10}
                        />
                      </span>
                      Save
                    </Typography>
                  </CustomButtonOutline>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
