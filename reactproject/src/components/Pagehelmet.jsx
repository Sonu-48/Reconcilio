import { Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ title, children }) => {
  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
};

export default PageHelmet;
