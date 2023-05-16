import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import styles1 from "@/styles/components/MainBanner.module.scss";
import assest from "@/json/assest";
import SearchIcon from "@/ui/Icons/SearchIcon";
import FilterIcon from "@/ui/Icons/FilterIcon";
import NewIconV from "@/ui/Icons/NewIconV";
import PopularIconV from "@/ui/Icons/PopularIconV";
import VarifiedIcon from "@/ui/Icons/VarifiedIcon";
import { useToggle } from "@/hooks/useToggle";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import { usegetPriceListQuery, useToolFeatureList } from "@/hooks/api/useTools";
import { mediaUrl } from "@/api/endpoints";
import CustomNextImage from "@/ui/CustomImage/CustomNextImage";

const modalContent = [
  {
    title: "pricing",
    children: [
      {
        name: "Free",
        icon: assest.iconCheck,
      },
      {
        name: "Freemium",
        icon: assest.iconOpenlock,
      },
      {
        name: "Free Trial",
        icon: assest.iconOpenlock,
      },
      {
        name: "Paid",
        icon: assest.iconDollar,
      },
      {
        name: "Contact for Pricing",
        icon: assest.iconDollar,
      },
      {
        name: "Deals",
        icon: assest.iconTag,
      },
    ],
  },
  {
    title: "Features",
    children: [
      {
        name: "Waitlist",
        icon: assest.iconMsg,
      },
      {
        name: "Open Source",
        icon: assest.iconSource,
      },
      {
        name: "Mobile App",
        icon: assest.iconApp,
      },
      {
        name: "Discord Community",
        icon: assest.iconDiscord,
      },
      {
        name: "API",
        icon: assest.iconApi,
      },
      {
        name: "No Signup Required",
        icon: assest.iconRequire,
      },
      {
        name: "Browser Extension",
        icon: assest.iconExtenstion,
      },
    ],
  },
];
const SearchArea = () => {
  const [time, setTime] = useState("");
  const { state, toggle } = useToggle(false);
  const { data: toolFeaturedata } = useToolFeatureList();
  const { data: priceListData } = usegetPriceListQuery();

  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  return (
    <Box className={styles1.search_area}>
      <Box className="search_field">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <Button>
                  <SearchIcon />
                </Button>
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="Search 1584 AI tools and 50 categories"
          />
        </FormControl>
      </Box>
      <Box className={styles1.filter_btn}>
        <Button onClick={toggle}>
          <FilterIcon />
          Filter
        </Button>
        <MuiModalWrapper
          title="Select Filters to Apply"
          open={state}
          onClose={toggle}
          maxWidth='md'
          fullWidth
        >
          <Box className={styles1.filterContentRow}>
            {/* {modalContent?.map((item) => (
              <Box className={styles1.filterContentInner} sx={{ flexGrow: 1 }}>
                <Typography>{item?.title}</Typography>
                <Grid container spacing={0}>
                  {item?.children?.map((child) => (
                    <Grid item xs={12} sm={6}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        color="var(--bannermaintxt)"
                        fontSize="14px"
                      >
                        <Checkbox />
                        <Image
                          src={child.icon}
                          alt={child.icon}
                          height={16}
                          width={16}
                        />
                        {child.name}
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))} */}

            <Box className={styles1.filterContentInner} sx={{ flexGrow: 1 }}>
              <Typography>Pricing</Typography>
              <Grid container spacing={0}>
                {priceListData?.data?.map((child) => (
                  <Grid item xs={12} sm={6}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      color="var(--bannermaintxt)"
                      fontSize="14px"
                    >
                      <Checkbox />
                      <CustomNextImage
                        src={mediaUrl(`pricing_type/${child?.logo}`)}
                        alt={child.name}
                        height={16}
                        width={16}
                      />
                      {child.name}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box className={styles1.filterContentInner} sx={{ flexGrow: 1 }}>
              <Typography>Features</Typography>
              <Grid container spacing={0}>
                {toolFeaturedata?.data?.map((child) => (
                  <Grid item xs={12} sm={6}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      color="var(--bannermaintxt)"
                      fontSize="14px"
                    >
                      <Checkbox />
                      <CustomNextImage
                        src={mediaUrl(`feature_type/${child?.logo}`)}
                        alt={child.name}
                        height={16}
                        width={16}
                      />
                      {child.name}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              className={styles1.dialogFooter}
            >
              <Button className={styles1.btnclear}>Clear</Button>
              <Button className={styles1.btnapply}>Apply Filter</Button>
            </Stack>
          </Box>
        </MuiModalWrapper>
      </Box>
      <Box className={`backThemeDrop ${styles1.verified_btn}`}>
        <Box
          className="formGroup_verified"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Select
            value={time}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <VarifiedIcon /> <span>Verified</span>
            </MenuItem>
            <MenuItem value={10}>
              <NewIconV />
              New
            </MenuItem>
            <MenuItem value={20}>
              <PopularIconV />
              Popular
            </MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchArea;
