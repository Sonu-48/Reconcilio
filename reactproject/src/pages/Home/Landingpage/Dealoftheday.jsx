import React from "react";
import { Container, Box, Typography, Button, styled, Grid } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

const Wrapper = styled('div')({
    // background:'#f4f5f6',
    backgroundImage: 'url("/images/banner-02.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    padding: '50px 0px',
    display: 'flex',
    alignItems: 'center',
})

function Dealoftheday() {
    return (
        <Wrapper>
            <Container>

                <Box>
                    <Typography variant="h3">Hurry Up!</Typography>
                    <Typography variant="h2" pt={2} pb={2}>Deal of the Day!</Typography>
                    <Typography variant="h5">Buy This T-shirt At 20% Discount, Use Code Off20</Typography>
                    <Box pt={4}>
                        <Button variant="contained" color="primary" endIcon={<IoIosArrowForward />}>Shop Now</Button>
                    </Box>
                </Box>

            </Container>
        </Wrapper>
    );
}
export default Dealoftheday;