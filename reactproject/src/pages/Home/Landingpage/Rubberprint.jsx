import React from "react";
import { Container, Box, Typography, Grid, styled } from "@mui/material";

const Wrapper = styled('div')({
    padding: '100px 0px',
    "& img": {
        width: '100%',
    }
})


function Rubberprint() {
    return (
        <Wrapper>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={4} md={6} sm={12}>
                        <Box>
                            <img src="/images/image-1.jpg" alt="T-shirt" />
                            <Box align="center"  pt={2}>
                                <Typography variant="body1" pb={1}>Most Loved Designs</Typography>
                                <Typography variant="h5">Customize Your T-Shirts</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12}>
                        <Box>
                            <Box align="center" >
                                <Typography variant="body1">Design of the Week</Typography>
                                <Typography variant="h5" pt={1} pb={3}>Rubber Print Your T-Shirt</Typography>
                            </Box>
                            <img src="/images/image-2.jpg" alt="T-shirt" />
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12}>
                    <Box>
                            <img src="/images/image-3.jpg" alt="T-shirt" />
                            <Box align="center"  pt ={2}>
                                <Typography variant="body1" pb={1}>New T-shirt Edition</Typography>
                                <Typography variant="h5">Customize Plain Colors</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
}
export default Rubberprint;