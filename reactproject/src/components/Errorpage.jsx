import React from "react";
import { Container,Box,Typography,Button } from "@mui/material";   
import { useNavigate } from "react-router-dom";


export const Errorpage=()=>{
    const navigate=useNavigate();
    return(
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',textAlign:'center'}}>
            <Container>
                <Box>
                    <Typography variant="h2">So Sorry</Typography>
                    <Typography variant="h5">You have entered wrong URL</Typography>
                   <Box mt={2}>
                   <Button variant="contained" color="primary" onClick={()=>navigate('/')}>Back To Home</Button>
                   </Box>
                </Box>
            </Container>
        </Box>
    )
}