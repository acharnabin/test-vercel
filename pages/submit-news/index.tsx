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
import { GetServerSideProps } from "next";
import { getCategoryListQuery, getToolListQuery } from "@/api/functions/cms.api";
import { IgetCategoryListQuery, IgetToolListQuery } from "@/interface/apiresponse.interface";
import useTools, { useToolsWithFilters } from "@/hooks/api/useTools";


export const getServerSideProps: GetServerSideProps = async (context) => {
  // const cardList = await getToolListQuery();
  const toolList = await getCategoryListQuery();

  return {
    props: {
      toolList,
    },
  };
};

interface SubmitNewProps {
  // cardList: IgetToolListQuery;
  toolList: IgetCategoryListQuery;

}

export default function index({toolList} : SubmitNewProps) {
  const [activeStep, setActiveStep] = useState(0);
  const { isLoading, isFetching, data } = useTools(toolList);

  // const { isLoading: isToolsLoading, data: ToolsData } = useToolsWithFilters(
  //   cardList,
  //   {}
  // );

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

          <Breadcrumbsec link1="Home" link3="Submit News" />

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
       {!! data &&  <AdditionalDetails data={data?.data} /> }
      </FromWrapper>
    </Wrapper>
  );
}
