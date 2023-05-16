import MainBanner from "@/components/MainBanner/MainBanner";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import styles1 from "@/styles/components/MainBanner.module.scss";
import Breadcrumbsec from "@/components/Breadcrumbs/Breadcrumbsec";
import { Grid, Typography } from "@mui/material";
import FromWrapper from "@/components/FormWrapper/FromWrapper";
import StartupDetails from "@/components/StartupDetails/StartupDetails";
import AdditionalDetails from "@/components/AdditionalDetails/AdditionalDetails";

export default function index() {
  const [activeStep, setActiveStep] = useState(0);

  const stepChange = () => {
    setActiveStep(activeStep + 1);
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
          {activeStep === 0 ? (
            <Breadcrumbsec link1="Home" link3="Submit Tool" />
          ) : (
            <Breadcrumbsec link1="Home" link3="Submit News" />
          )}

          <Box className={styles1.catagory_ban}>
            <Typography variant="h1">
              Submit your tool.
              <span className={styles1.blue_span}>
                {" "}
                It's free and takes less than a minute.
              </span>
            </Typography>
            <Typography variant="body1">
              We try to review all tools within 7 days and add it to the
              directory.
            </Typography>
          </Box>
        </MainBanner>
      </Box>

      <FromWrapper>
        {activeStep === 0 && <StartupDetails buttonClick={stepChange} />}
        {activeStep === 1 && <AdditionalDetails />}
      </FromWrapper>
    </Wrapper>
  );
}
