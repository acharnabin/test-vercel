// import { NoSsr } from '@mui/material';
import { Box } from "@mui/system";
import React, { useState } from "react";
import RichTextEditor, { EditorValue } from "react-rte";
import styles from "@/styles/components/textEditor.module.scss";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomButton from "@/ui/Buttons/CustomButton";
import Image from "next/image";
import assest from "@/json/assest";



export default function TextEditor() {
  const [value, setValue] = useState<EditorValue>(
    RichTextEditor.createEmptyValue(),
  );
  const onChange = (val: EditorValue) => {
    setValue(val);
  };

  return (
    <>
      <Box className={styles.richTextSec}>
        
      <RichTextEditor value={value} onChange={onChange} className={styles.richEditor} />
        
      </Box>
    </>
  );
}