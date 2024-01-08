import { AppBar, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, Paper, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";


const Headersection = styled('div')({
    background: 'linear-gradient(140deg,#FFFFFF00 0%,#EBEDEFDE 100%)',

})
const LinkBox = styled('div')({
    "& a": {
        textDecoration: 'none',
        marginRight: '30px',
        fontSize: '15px',
        color: '#415161',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '400',
        textTransform: 'uppercase',
        position: 'relative',
        transition: '0.10s',
        padding: '10px 0px',
    },
    "& a:hover": {
        color: '#ff3f26',
    },
    "& a.active": {
        color: '#ff3f26',
    },
    ".account-box": {
        display: 'none',
        position: 'absolute',
        right: '0px',
        top: '20px',
        width: '200px',
        transition: '0.10s'

    },
    ".account-link:hover .account-box": {
        display: 'block!important',

    },
    ".cart-count": {
        background: '#ff3f26',
        borderRadisu: '50%',
        width: '30px',
        height: '30px',
        padding: '2px',
    }

})
const drawerWidth = 240;
function Header() {
    const [open, setOpen] = useState(false);
    const [openaccount, setOpenaccount] = useState(false);
    const cartdata= useSelector((state)=>state.cart)
    return (
        <Headersection>
            <Container>
                <AppBar sx={{ background: 'transparent', position: 'relative', boxShadow: 'none' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <img src="/images/logo.svg" alt="logo" />
                        </Box>

                        <LinkBox sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}>
                            <NavLink to="/" >Home</NavLink>
                            <NavLink to="/allproducts">AllProducts</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <Link component={Box} className="account-link" sx={{ display: 'flex', alignItems: 'center' }}>Account
                                <RiArrowDownSLine />
                                <Box className="account-box" component={Paper}>
                                    <List>
                                        <ListItem sx={{ padding: '0px' }}>
                                            <ListItemButton component={Link} to="/myaccount" >My Account</ListItemButton>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0px' }}>
                                            <ListItemButton component={Link} to="/cart">CART</ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Link>


                            <NavLink to="/cart">
                                <BsCart2 color="#ff3f26" />
                                <span>{cartdata.length}</span>
                            </NavLink>

                        </LinkBox>
                       {/* add to cart */}
                       <Box sx={{display:{lg:'none',md:'none',sm:'block',xs:'block'}}}>
                       <NavLink to="/cart">
                            <BsCart2 color="#ff3f26" />
                            <span >0</span>
                        </NavLink>
                       </Box>
                        {/* mobile menu */}
                        <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
                            <IconButton onClick={() => setOpen(true)}>
                                <FiMenu />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>


                {/* mobile drawer */}
                <Drawer
                    sx={{
                        // width: drawerWidth,
                        flexShrink: 0,
                        // '& .MuiDrawer-paper': {
                        //     width: drawerWidth,
                        // },
                    }}
                    variant="temporary"
                    anchor="top"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box align="end">
                        <IconButton onClick={() => setOpen(false)}>
                            <IoClose />
                        </IconButton>
                    </Box>
                    <Box>
                        <List component={Paper}>
                            <ListItem sx={{ borderBottom: '1px solid #f4f5f6' }}>
                                <ListItemButton component={Link} to="/">
                                    Home
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ borderBottom: '1px solid #f4f5f6' }}>
                                <ListItemButton component={Link} to="/allproduct">
                                    All Products
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ borderBottom: '1px solid #f4f5f6' }}>
                                <ListItemButton component={Link} to="/about">
                                    About
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ borderBottom: '1px solid #f4f5f6' }}>
                                <ListItemButton component={Link} to="/contact">
                                    Contact
                                </ListItemButton>
                            </ListItem>
                            <ListItem>

                                <ListItemButton className="account-link" sx={{ display: 'flex', alignItems: 'center' }} onClick={() => setOpenaccount(!openaccount)}>
                                    Account
                                    <RiArrowDownSLine />

                                </ListItemButton>
                                <Box className="account-box" component={Paper} sx={{ display: openaccount ? 'block' : 'none' }}>
                                    <List>
                                        <ListItem sx={{ padding: '0px' }}>
                                            <ListItemButton component={Link} to="/myaccount" onClick={() => setOpenaccount(false)}>My Account</ListItemButton>
                                        </ListItem>
                                        <ListItem sx={{ padding: '0px' }}>
                                            <ListItemButton component={Link} to="/cart" onClick={() => setOpenaccount(false)}>CART</ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>



                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Container>
        </Headersection>
    );
}

export default Header;