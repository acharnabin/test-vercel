import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/components/smallcard.module.scss";
import Image from "next/image";
import assest from "@/json/assest";
import CustomButtonWithIcon from "@/ui/Buttons/CustomButtonWithIcon";
interface cardprops{
    time:string;
    title:string;
    img:string;
   
}
const SmallCard = (props:cardprops) => {
    const {time,title,img}=props;
  return (
    <Box className={styles.small_card}>
      <figure>
        <Image src={img} alt="img" width={357} height={195} />
      </figure>
      <Box className={styles.small_card_body}>
        <Typography variant="h5">
          <Image src={assest.iconClock} alt="" width={12} height={12} />
          {time}
        </Typography>
        <Typography variant="h3">
          {title}
        </Typography>
        <CustomButtonWithIcon type="button">
          <Typography variant="body1">
            <span>
              <Image src={assest.visit_icon} alt="img" width={10} height={10} />
            </span>
            Visit site
          </Typography>
        </CustomButtonWithIcon>
      </Box>
    </Box>
  );
};

export default SmallCard;
