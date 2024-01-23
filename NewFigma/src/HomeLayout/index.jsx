import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bannerpage from "../pages/Home/Bannerpage";

const HomeLayout=()=>{
    return(
            <Box>
                <Header/>
                <Bannerpage/>
                <Footer/>
            </Box>
    );   
}
export default HomeLayout