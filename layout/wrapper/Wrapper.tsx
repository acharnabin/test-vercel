import dynamic from "next/dynamic";
import React, { Suspense, useEffect, useState } from "react";
import NextProgress from "next-progress";
import HeaderSkeleton from "@/ui/Skeletons/HeaderSkeleton";
import useOnlineStatus from "@/hooks/useDetectOnline";
import { Backdrop, CircularProgress } from "@mui/material";
import { checkWindow } from "@/lib/functions/_helpers.lib";

const Header = dynamic(() => import("../Header/Header"), { suspense: true });
const Footer = dynamic(() => import("../Footer/Footer"), { suspense: true });

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  useOnlineStatus();

  const [loader, setLoader] = useState(true);

  // useOnlineStatus();

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  if (loader && checkWindow()) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="primary" />
      </Backdrop>
    );
  }

  return (
    <>
      {/* <NextProgress height={8} color="green" /> */}
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>

      {children}

      <Suspense fallback={<HeaderSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Wrapper;
