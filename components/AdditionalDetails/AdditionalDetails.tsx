import React from "react";
import styles from "@/styles/components/form.module.scss";
import { Box } from "@mui/system";
import {
  Chip,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assest from "@/json/assest";
import Link from "next/link";
import DarkButton from "@/ui/Buttons/DarkButton";
import dynamic from "next/dynamic";
import { Theme, useTheme } from "@mui/material/styles";
const TextEditor = dynamic(() => import("@/components/TextEditor/TextEditor"), {
  ssr: false,
});
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IgetCategoryListQueryItem } from "@/interface/apiresponse.interface";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = ["Art", "Audio editing"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface ICardSecProps {
  data : IgetCategoryListQueryItem
}

interface ISubmitData {
  title : string,
  url : string
}

const newSchema = yup
  .object({
    title: yup.string().required("Title is required"),
    url: yup.string().required("URL is required"),
  })
  .required();

export default function AdditionalDetails({ data }: ICardSecProps) {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const {
    register,
    handleSubmit,setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newSchema),
  });
  const onSubmit = (data : ISubmitData) => {
     if(personName.length > 0){
      console.log("submitted data", data, personName )
     } else {
      setError("selectedName", { type: 'custom', message: 'Please select the categories' })
     }
    
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    if (value.length <= 2) {
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
    
  };

  return (
    <>
      <Box className={styles.form_sec}>
        <Box className={styles.form_body}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item md={12} xs={12}>
                <Box className="frm_grp">
                  <FormControl variant="filled">
                    <label>Title</label>
                    <FilledInput
                      id="filled-adornment-weight"
                      placeholder="Please describe the content in 1-2 sentence"
                      {...register("title")}
                    />
                  </FormControl>
                  <Typography color="red" >{errors?.title?.message}</Typography>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box className="frm_grp">
                  <FormControl variant="filled">
                    <label>Link to the content</label>
                    <FilledInput 
                      id="filled-adornment-weight"
                      placeholder="https://copy.ai"
                      {...register('url')}
                    />
                    
                  </FormControl>
                  <Typography color="red" >{errors?.url?.message}</Typography>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box className="frm_grp">
                  <FormControl variant="filled">
                    <label>Select Categories (max 2)</label>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {data?.map((item : IgetCategoryListQueryItem, index: number) => (
                        <MenuItem
                          key={index}
                          value={item?.name}
                          style={getStyles(item?.name, personName, theme)}
                        >
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography color="red" >{errors?.selectedName?.message}</Typography>
                </Box>
              </Grid>
            </Grid>

            <Box className="input_submit_btn">
              <DarkButton type="submit">
                <Typography variant="caption">Submit</Typography>
              </DarkButton>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
