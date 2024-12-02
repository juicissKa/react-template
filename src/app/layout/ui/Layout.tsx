import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { styles } from "./styles";
export const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={styles.wrapper}></Box>
    </>
  );
};
