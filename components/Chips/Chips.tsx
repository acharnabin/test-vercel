import useTheme from "@/hooks/useTheme";
import CustomNextImage from "@/ui/CustomImage/CustomNextImage";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface chipsprops {
  text: string;
  img: string;
  slug: string;
  darkImage?: string;
}
const Chips = (props: chipsprops) => {
  const { text, img, slug, darkImage } = props;
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <Link href={`/categories/${slug}`}>
      <Button
        variant={router.query.slug === slug ? "outlined" : "contained"}
        className="chips_box"
      >
        <CustomNextImage
          src={theme === "dark-mode" ? darkImage : img}
          alt=""
          width={15}
          height={15}
        />
        <span>{text}</span>
      </Button>
    </Link>
  );
};

export default Chips;
