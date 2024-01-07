import React from "react";
import { Container, Box, Typography, styled, Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { productdata } from "../../../components/FeaturedData";

const Section = styled('div')({
    padding: '70px 0px 100px',
    ".price-box":{
        textAlign:'center',
        padding:'10px 0px',
        "& a":{
            textDecoration:'none',
            fontSize:'15px',
        fontWeight:'600',
        color:'#415161',
        fontFamily:"'Poppins',sans-serif",
        }
    }
})

function FeaturedProduct() {
    return (
        <Section>
            <Container>
                <Box align="center" pb={4}>
                    <Typography variant="h3">Our Featured Products</Typography>
                </Box>
                <Box pb={7}>
                    <Divider sx={{ width: '6%', height: '2px', background: '#ff3f26', margin: 'auto' }}></Divider>

                </Box>
                <Grid container spacing={3}>
                    {productdata.map((data, id) => {
                        return (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box>
                                    <Link to="">
                                        <img src={data.img} alt={data.heading} width="100%" />
                                    </Link>

                                    <Box className="price-box">
                                        <Typography variant="body1">{data.title}</Typography>
                                        <Link to="">{data.heading}</Link>
                                        <Typography variant="h5" pt={1}>£{data.price}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Section>
    );
}
export default FeaturedProduct;