import { useToggle } from "@/hooks/useToggle";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import styles from '@/styles/components/loginmodal.module.scss';
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import assest from "@/json/assest";
import { LinkedIn } from "@mui/icons-material";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";

const LoginModalWrapper = ({ children }) => {
  const { state, toggle } = useToggle(false);
  const { theme } = useTheme();
  return (
    <>
      <Box onClick={toggle}>{children}</Box>
      <MuiModalWrapper open={state} onClose={toggle}>
        <Box className={styles.dialogBody}>
          {theme === "dark-mode" ? (
            <Image src={assest.logo} alt="img" width={99} height={34} />
          ) : (
            <Image src={assest.logo2} alt="img" width={99} height={34} />
          )}
          <Typography variant="h3">Create an Account</Typography>
          <Typography variant="body1">Join using your business email</Typography>
          <Link href='/signup' className={styles.businessEmail}>
            <span><Image src={assest.iconMsg} width={16} height={16} alt="icon" /></span>Business Email
          </Link>
          <Box className={styles.signupDivider}>
            <Typography variant="caption">or continue with</Typography>
          </Box>
          <Box className={styles.signBtnGroups}>
            <Link href='/' className={styles.linkdinBtn}><span><Image src={assest.iconLinkdin} width={32} height={32} alt="icon" /></span> Linkedin</Link>
            <Link href='/' className={styles.googleBtn}><span><Image src={assest.google_icon} width={32} height={32} alt="icon" /></span> Google</Link>
          </Box>
        </Box>
        <Box className={styles.dialogFooter}>
          <Typography variant="body1">Already have an account? <Link href='/login'>Sign in</Link></Typography>
          <Typography variant="body2">By proceeding, you agree to our <Link href='/'>Terms of Use</Link> and <Link href='/'>Privacy Policy</Link></Typography>
        </Box>
      </MuiModalWrapper>
    </>
  );
};

export default LoginModalWrapper;
