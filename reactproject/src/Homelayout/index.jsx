import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import Bannerpage from "../pages/Home/Landingpage/Bannerpage";
import Rubberprint from "../pages/Home/Landingpage/Rubberprint";
import FeaturedProduct from "../pages/Home/Landingpage/FeaturedProduct";
import Dealoftheday from "../pages/Home/Landingpage/Dealoftheday";
import Mostlovedproduct from "../pages/Home/Landingpage/Mostlovedproduct";
import HappyClients from "../pages/Home/Landingpage/HappyClients";
import Partners from "../pages/Home/Landingpage/Partners";


export const Homelayout=()=>{
    return(
        <Box>
            <Header/>
            <Bannerpage/>
            <Rubberprint/>
            <FeaturedProduct/>
            <Dealoftheday/>
            <Mostlovedproduct/>
            <HappyClients/>
            <Partners/>
            <Footer/>
        </Box>
    )
}