import React, { useEffect, useState } from "react";
import { Container,Box,Typography,Button,Grid,styled } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../Homelayout/Header";
import Footer from "../../../Homelayout/Footer";
import { useDispatch } from "react-redux";
import { addtocart } from "../../../Redux/CartSlice";


const Wrapper= styled('div')({
    padding:'70px 0px 50px',
    background:'#f4f5f6',
    ".inner-box":{
        background:'#ffff',
        padding:'80px',
    }
})


function Singleproduct(){
const[ singleproduct,setSingleproduct]= useState({})
const {id}= useParams();
const dispatch= useDispatch();

    const getsingleproduct= async()=>{
        try{
            const res= await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            if(res.status===200){
                setSingleproduct(res.data);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getsingleproduct();
    },[])
    return(
       <>
       <Header/>
       <Wrapper>
            <Container>
                <Box className="inner-box">
                <Grid container spacing={4}>
                    <Grid item lg={6} md={6} sx={12}>
                        <Box>
                            <img src={singleproduct.images} alt={singleproduct.title} width="100%"/>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12}>
                        <Box pl={2}>
                                <Typography variant="h3">{singleproduct.title}</Typography>
                                <Typography variant="h3" pt={2} pb={2}>£{singleproduct.price}</Typography>
                                <Typography variant="body1">{singleproduct.description}</Typography>
                                <Box mt={3}>
                                    <Button variant="contained" color="primary" onClick={()=>dispatch(addtocart(singleproduct))}>ADD TO CART</Button>
                                </Box>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </Wrapper>
       <Footer/>
       </>
    );
}
export default Singleproduct;