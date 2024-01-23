import { Box, Container, Grid, Typography, styled, Link, Button } from "@mui/material";
import React from "react";

const FooterWrapper = styled("div")({
  background: "#1b2a6b",
  padding: "3rem 0 2rem",
  "& a": {
    textDecoration: "none",
  },

  ".footer-link": {
    marginTop: "20px",
    "& P": {
      color: "#fff",
    },
    "& a": {
      display: "block",
      textDecoration: "none",
      color: "#fff",
      padding: "5px 0px",
    },
  },
  ".img-link": {
    width: "192px",
  },
  ".bark-review": {
    background: "rgb(33, 51, 68)",
    borderTop: "4px solid rgb(28, 44, 59)",
    padding: "10px",
    textAlign: "center",
  },
  ".review-outer": {
    width: "192px",
    border: "4px solid rgb(28, 44, 59)",
    marginTop: "20px",
  },
  ".address-box":{
    maxWidth:'300px'
  }
});

function Footer() {
  return (
    <Box>
      <FooterWrapper>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={5} md={4} sm={6} xs={12}>
              <Typography variant="h4">Find Us</Typography>
              <Box className="footer-link address-box">
                <Typography variant="body1">
                  Find Us Out of Hour Cleaning Services 
                  152 - 160 City Road,<br />
                 
                  London <br /> EC1V 2NX
                </Typography>
              </Box>
              <Link href="">
                <Box className="review-outer">
                  <img
                    src="/images/cert-excellence-medium.png"
                    alt="Cert"
                    width="100%"
                  />

                  <Box className="bark-review">
                    <Typography variant="body1">
                      Out of Hour Cleaning Services
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Typography variant="h4">Contact Us</Typography>
              <Box className="footer-link">
                <Typography variant="body1">By Phone</Typography>
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  0203 815 7968
                </Typography>
              </Box>
              <Box className="footer-link">
                <Typography variant="body1">By Email</Typography>
                <Link href="mailto:info@outofhour.co.uk">
                  info@outofhour.co.uk
                </Link>
              </Box>
              <Box mt={3} mb={2}>
                <Button variant="contained" color="primary" component={Link} href="https://www.youtube.com/watch?v=CnJINUEeS3U" target="_blank">Watch 1 min video tour</Button>
              </Box>
              <Link href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" target='_blank'>See our reviews * on trustpilot</Link>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Link href="https://twitter.com/OutofHour">
                Tweets by @OutofHour
              </Link>
            </Grid>
          </Grid>
          <Box pt={2}>
            <Typography variant="body1" color="#fff">© 2022 Copyright Out of Hour | Sitemap | Articles</Typography>
          </Box>
        </Container>
      </FooterWrapper>
      {/* <CopyrightSection>
        <Typography variant="h6">
          Copyright © 2023 TradePlumbing . All Rights Reserved.
        </Typography>
      </CopyrightSection> */}
    </Box>
  );
}
export default Footer;
