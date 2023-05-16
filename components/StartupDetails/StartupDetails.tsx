import React from "react";
import styles from "@/styles/components/form.module.scss";
import { Box } from "@mui/system";
import { FilledInput, FormControl, FormHelperText, Grid, List, ListItem, TextareaAutosize, Typography } from "@mui/material";
import Image from "next/image";
import assest from "@/json/assest";
import Link from "next/link";
import DarkButton from "@/ui/Buttons/DarkButton";
import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("@/components/TextEditor/TextEditor"), { ssr: false });
interface buttonClickProps{
    buttonClick:any;
}

export default function StartupDetails(props:buttonClickProps) {
    
    const {buttonClick} = props
  return (
    <>
      <Box className={styles.form_sec}>
        <Box className={styles.form_head_sec}>
          <List>
            <ListItem>
              <span>01</span>
              <Typography>Startup Details</Typography>
            </ListItem>
            <ListItem>
              <span>02</span>
              <Typography>Additional Details</Typography>
            </ListItem>
          </List>
        </Box>
        <Box className={styles.warning_title}>
          <Typography variant="body1">
            <span className={styles.warning_icon}>
              <Image
                src={assest.warning_icon}
                alt="img"
                width={14}
                height={12}
              />
            </span>
            <span className={styles.bold_span}>Info:</span>
            Please login before filling the form. Alternatively please email me
            at{" "}
            <Link href="mailto:contact@futurepedia.io">
              contact@futurepedia.io
            </Link>{" "}
            to submit your tool.
          </Typography>
        </Box>
        <Box className={styles.form_body}>
          <form>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Box className="frm_grp">
                <FormControl variant="filled">
                    <label>Tool name</label>
                  <FilledInput id="filled-adornment-weight" placeholder="Copy AI"/>

                </FormControl>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="frm_grp">
                <FormControl variant="filled">
                    <label>Website URL</label>
                  <FilledInput id="filled-adornment-weight" placeholder="https://copy.ai"/>

                </FormControl>
              </Box>
            </Grid>
            <Grid item md={12} xs={12}>
              <Box className="frm_grp">
                <FormControl variant="filled">
                    <label>Please provide a short description</label>
                  <TextareaAutosize placeholder="Please provide a short description"/>

                </FormControl>
              </Box>
            </Grid>
            <Grid item md={12} xs={12}>
              <Box className="frm_grp">
                <FormControl variant="filled">
                    <label>Tool description</label>
                    <TextEditor />

                </FormControl>
              </Box>
            </Grid>
          </Grid>
          
          <Box className="input_submit_btn">
            <DarkButton type="button" onClick={buttonClick}>
                <Typography variant="caption">
                     Next
                </Typography>
            </DarkButton>
          </Box>
          </form>
            
            
         
        </Box>
      </Box>
    </>
  );
}
