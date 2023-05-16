import { Stack, Typography } from "@mui/material";
import React from "react";

const NoData = () => {
  return (
    <Stack direction="row" justifyContent="center" p={2}>
      <Typography color='inherit' variant="h4">
        Sorry we could not find any tools matching your search.
      </Typography>
    </Stack>
  );
};

export default NoData;
