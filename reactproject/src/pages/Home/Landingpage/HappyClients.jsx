import React from "react";
import { Container, Box, Typography, styled, Grid ,Divider} from "@mui/material";

const Wrapper= styled('div')({
    padding:'50px 0px',
    ".client-box":{
        background:'#ffffff',
        borderRadius:'20px',
        boxShadow:'0 0 15px 0 rgba(0,0,0,.07)',
        padding:'30px',
        minHeight:'150px',
        // height:'100%',
    },
    ".client-img-box":{
        display:'flex',
        alignItems:'center',
        gap:'20px',
        paddingTop:'20px',
    }
})

function HappyClients() {
    return (
        <Wrapper>
            <Container>
                <Box align="center" pb={4}>
                    <Typography variant="h3">Our Happy Clients!</Typography>
                </Box>
                <Box pb={7}>
                    <Divider sx={{ width: '6%', height: '2px', background: '#ff3f26', margin: 'auto' }}></Divider>

                </Box>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6} sm={12}>
                        <Box className="client-box">
                            <Typography variant="body1">"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."
                            </Typography>
                            <Box className="client-img-box">
                                <img src="/images/client-img1.jpg" alt="Client" />
                                <Typography variant="h5">
                                    Diana Burnwood</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12}>
                        <Box className="client-box">
                            <Typography variant="body1">"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."
                            </Typography>
                            <Box className="client-img-box">
                                <img src="/images/client-img2.png" alt="Client" />
                                <Typography variant="h5">
                                Jessica Foxx​</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12}>
                        <Box className="client-box">
                            <Typography variant="body1">"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."
                            </Typography>
                            <Box className="client-img-box">
                                <img src="/images/client-img3.png" alt="Client" />
                                <Typography variant="h5">
                                Lily Granger​</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
}
export default HappyClients;