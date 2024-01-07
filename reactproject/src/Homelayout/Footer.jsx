import { Box, Container, Divider, Grid, Link, Typography, styled } from "@mui/material";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaInstagram ,FaTwitter,FaLinkedin,FaFacebookSquare} from "react-icons/fa";


const Footersection = styled('div')({
    background: '#415161',
    padding: '80px 0px 50px',
    "@media screen and (max-width:600px)":{
        padding:'50px 0px 0px',  
    },
    "& a":{
        fontFamily:"'Poppins',sans-serif",
        color:'#fff',
        cursor:'pointer',
        display:'block',
        fontSize:'15px',
        paddingBottom:'10px',
    },
    "& a:hover":{
        color:'#ff3f26'
    },
    ".copyright-box":{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'20px 0px',
        flexWrap:'wrap',
        "@media screen and (max-width:600px)":{
            justifyContent:'center!important',
            gap:'20px',
           
        }
    }
})

function Footer() {
    return (
       <>
        <Footersection>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box >
                            <Typography variant="h4">Custom Pring Store</Typography>
                            <Box sx={{display:'flex',alignItems:'center',gap:'20px',paddingTop:'20px'}}>
                                <Link href="">
                                <FaInstagram/>
                                </Link>
                                <Link href="">
                                <FaTwitter/>
                                </Link>
                               <Link href="">
                               <FaLinkedin/>
                               </Link>
                               <Link href="">
                               <FaFacebookSquare/>
                               </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <Typography variant="h4">Get in Touch with Us for the Best Quality Custom Prints & Supplies.</Typography>
                            <Typography variant="body1" color="#fff" pt={3} fontWeight="500">Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box>
                            <Typography variant="h4" pb={3}>Quick Links</Typography>
                            <ScrollLink
                                to="homesection"  // The ID of the target element to scroll to
                                spy={true}
                                smooth={true}
                                offset={-70}         // Optional offset to adjust scroll position (e.g., to accommodate a fixed navbar)
                                duration={500}       // Duration of the scroll animation in milliseconds
                            >
                               Know More About Us
                            </ScrollLink>
                            <ScrollLink
                                to="homesection"  
                                spy={true}
                                smooth={true}
                                offset={-70}         
                                duration={500}       
                            >
                               Visit Store
                            </ScrollLink>
                            <ScrollLink
                                to="homesection"  
                                spy={true}
                                smooth={true}
                                offset={-70}         
                                duration={500}       
                            >
                              Let's Connect
                            </ScrollLink>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box>
                            <Typography variant="h4" pb={3}>Important Links</Typography>
                            <ScrollLink
                                to="homesection"  // The ID of the target element to scroll to
                                spy={true}
                                smooth={true}
                                offset={-70}         // Optional offset to adjust scroll position (e.g., to accommodate a fixed navbar)
                                duration={500}       // Duration of the scroll animation in milliseconds
                            >
                               Privacy Policy
                            </ScrollLink>
                            <ScrollLink
                                to="homesection"  
                                spy={true}
                                smooth={true}
                                offset={-70}         
                                duration={500}       
                            >
                              Shipping Details
                            </ScrollLink>
                            <ScrollLink
                                to="homesection"  
                                spy={true}
                                smooth={true}
                                offset={-70}         
                                duration={500}       
                            >
                              Terms & Conditions
                            </ScrollLink>
                        </Box>
                    </Grid>
                </Grid>
                 
            </Container>
            {/* Copyright section */}
           <Box pt={6}>
           <Divider></Divider>
                     <Container>
                     <Box className="copyright-box">
                        <Typography variant="body1" color="#fff" fontWeight="500">Copyright © 2024 | Custom Printing</Typography>
                        <Typography variant="body1" color="#fff" fontWeight="500">Powered By Sonu K.</Typography>
                     </Box>
                     </Container>
           </Box>
        </Footersection>
      
       </>
    );
}

export default Footer;