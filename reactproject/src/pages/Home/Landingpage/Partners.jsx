import React from "react";
import { Container,Box,Typography, Grid,styled } from "@mui/material";


const Wrapper= styled('div')({
    padding:'50px 0px',
    "& img":{
        width:'60%',
        opacity:'45',
    }
})

function Partners(){
    return(
        <Wrapper>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={3} sm={6} xs={6} sx={{display:'flex',alignItems:'center'}}>
                        <Typography variant="h5">Featured In:</Typography>
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={6}>
                        <Box>
                            <img src="/images/logo-2.png" alt="Partner logo" />
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={6}>
                    <Box>
                            <img src="/images/logo-3.png" alt="Partner logo" />
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={6}>
                    <Box>
                            <img src="/images/logo-4.png" alt="Partner logo" />
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={6}>
                    <Box>
                            <img src="/images/logo-5.png" alt="Partner logo" />
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={6}>
                    <Box>
                            <img src="/images/logo-6.png" alt="Partner logo" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
}
export default Partners