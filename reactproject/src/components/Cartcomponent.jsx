import React, { useEffect, useState } from "react";
import {Box, styled, Typography,Drawer, IconButton, Divider, Button, Stack } from "@mui/material";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removecart } from "../Redux/CartSlice";


const Cartouterbox= styled('div')({
    height:'60vh',
    overflowY:'scroll',
    marginTop:'20px',
   ".cartouter-box":{
    padding:'10px 20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottom:'1px solid #dddddd',
   },
    

".details-innerbox":{
    display:'flex',
    alignItems:'center',
    gap:'10px',
    "& img":{
        width:'60px',
    },
    ".price-box":{
        display:'flex',
        alignItems:'center',
        gap:'10px',
    }
}
})
const CartFooter= styled('div')({
    position:'absolute',
    bottom:'15px',
    left:'0px',
    right:'0px',
    zIndex:'20',
    ".total-price":{
        borderTop:'1px solid #dddddd',
        borderBottom:'1px solid #dddddd',
        padding:'10px 20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    ".btn":{
        padding:'10px 20px',
        marginTop:'10px',
    }
})
const drawerWidth=480;
function Cartcomponent({opencart,setOpencart}) {

    const cartdata = useSelector((state)=>state.cart);
    // const quantity = cartdata.length > 0 ? cartdata[0].quantity : 0;

    const dispatch= useDispatch();
      // Calculate overall subtotal
      const overallSubtotal = cartdata.reduce(
        (subtotal, item) => subtotal + item.quantity * item.price,
        0
    );
    return (
        <Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    position:'relative',
                   
                   
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        
                    },
                }}
                variant="temporary"
                anchor="right"
                open={opencart}
                // onClose={setOpencart}
            >
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'5px 20px'}}>
                    <Typography variant="h5">Shopping Cart</Typography>
                    <IconButton sx={{background:'transparent'}} onClick={()=>setOpencart(false)}>
                        <MdClose style={{color:'#000'}}/>
                    </IconButton>
                </Box>
                <Divider></Divider>
                {/* Cart section */}
                <Cartouterbox>
                    
                       {cartdata.length===0?<>
                       <Stack sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'50vh'}}>
                       <Typography variant="h5">Cart Empty</Typography>
                       </Stack>
                       </>:
                       <>
                        {cartdata.map((data)=>(
                             <Box className="cartouter-box">
                                <Box className="details-innerbox">
                                    <img src={data.images} alt={data.title}/>
                                    <Box>
                                        <Typography variant="h5">{data.title}</Typography>
                                        <Box className="price-box">
                                            <Typography variant="h5">{data.quantity}x</Typography>
                                            <Typography variant="h5">£{data.price}.00</Typography>
                                        </Box>  
                                    </Box>
                                </Box>
                                <IconButton sx={{background:'transparent'}} onClick={()=>dispatch(removecart(data.id))}>
                                    <MdClose color="#000"/>
                                </IconButton>

                             </Box>
                        ))}
                       </>
                       }
                         
                </Cartouterbox>
                <CartFooter>
                        <Box className="total-price">
                            <Typography variant="h5">Subtotal:</Typography>
                            <Typography variant="h5">£{overallSubtotal.toFixed(2)}</Typography>

                        </Box>
                        <Box className="btn">
                            <Button variant="contained" fullWidth>VIEW CART</Button>
                            <Button variant="contained" fullWidth sx={{marginTop:'20px'}}>CHECKOUT</Button>
                        </Box>
                        </CartFooter>
                    
            </Drawer>
        </Box>
    );
}
export default Cartcomponent;