import React from "react";
import { Container,Box,Typography,Grid, styled, Divider } from "@mui/material";
import Header from "../../../Homelayout/Header";
import Footer from "../../../Homelayout/Footer";

const Contactbox = styled('div')({
    padding:'90px 0px',
    ".hello-box":{
        maxWidth:'500px',
    },
    ".form-box":{
        background:'#ffff',
        border:'2px solid rgba(122,122,122,.22)',
        borderRadius:'7px',
        padding:'30px',
    },
})

function Contactus(){
    return(
        <>
        <Header/>
        <Contactbox>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12}>
                        <Box className="hello-box">
                            <Typography variant="h1">Say Hello.</Typography>
                            <Typography variant="body1" pt={2} pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </Typography>
                            <Divider sx={{width:'15%',height:'2px',background:'#ff5151'}}></Divider>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12}>
                        <Box className="form-box">
                            <Box>
                                <Typography variant="h3">Ask Your Queries</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Contactbox>
        <Footer/>
        </>
    );
}
export default Contactus;