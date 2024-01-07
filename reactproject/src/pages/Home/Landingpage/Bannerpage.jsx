import React from "react";
import { Container,Box,Typography, Grid, Button, styled } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import PageHelmet from "../../../components/Pagehelmet";


const Bannersection= styled('div')({
    background:'linear-gradient(140deg,#FFFFFF00 0%,#EBEDEFDE 100%)',
    padding:'60px 0px 0px',
    ".best-quality-outer":{
        maxWidth:'440px',
        "& h5":{
            position:'relative',
            "&::before":{
                position:'absolute',
                content:"''",
                top:'-40px',
                left:'0px',
                width:'60px',
                height:'3px',
                background:'#ff5151',
                "@media screen and (max-width:600px)":{
                    top:'-10px'
                }
            }
        }
    }
})

function Bannerpage(){
    return(
        <>
        <PageHelmet title="Home - Custome Printing">
        <Bannersection id="homesection">
            <Container>
               <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} sx={{display:'flex',alignItems:'center'}}>
                    <Box className="best-quality-outer">
                        <Typography variant="h5">Best Quality Products</Typography>
                        <Typography variant="h1" pt={2} pb={2}>We Print What You Want!</Typography>
                        <Typography variant="body1" pb={5}>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</Typography>
                        <Box>
                            <Button variant="contained" color="primary" endIcon={<IoIosArrowForward/>}>get started</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                    <Box>
                        <img src="/images/banner-img.png" alt="Banner" width="100%"/>    
                    </Box>
                </Grid>
               </Grid>
            </Container>
        </Bannersection>
        </PageHelmet>
        </>
        
    );
}
export default Bannerpage;