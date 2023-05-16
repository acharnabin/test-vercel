import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "@/styles/components/breadcrumbs.module.scss";
import { Box } from "@mui/material";
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
interface breadprops {
  link1?: string;
  link2?: string;
  link3: string;
  link1_href?: string;
  link2_href?: string;
  link3_href: string;
}
const Breadcrumbsec = (props: breadprops) => {
  const { link1, link2, link3 ,link1_href,link2_href,link3_href} = props;
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      {link1}
    </Link>,
    link2 && (
      <Link
        underline="hover"
        key="2"
        color="inherit"
        href={link2_href||'/'}
      >
        {link2}
      </Link>
    ),
    <Typography key="3" color="text.primary">
      {link3}
    </Typography>,
  ];
  return (
    <Box className={styles.bread_sec}>
      <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
    </Box>
  );
};

export default Breadcrumbsec;
