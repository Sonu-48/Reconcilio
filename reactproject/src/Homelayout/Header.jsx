import { AppBar, Badge, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, Paper, Stack, TextField, Toolbar, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiShoppingBasketFill } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../Redux/CartSlice";
import Cartcomponent from "../components/Cartcomponent";
import axios from "axios";


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
    const [opencart, setOpencart] = useState(false);
    const dispatch = useDispatch();
    const cartdata = useSelector((state) => state.cart);
    // const [searchdata, setSearchdata] = useState("");
    // const [data, setData] = useState([]);
    // const [searchresult, setSearchresult] = useState([])

    // const cartcount=parseInt(cartdata.length);
    // const quantity = cartdata.length > 0 ? cartdata[0].quantity : 0;
    const quantity = cartdata.reduce((total, item) => total + item.quantity, 0);

    // search api
    // const searchapi = async () => {
    //     try {
    //         const res = await axios.get("https://demo.dataverse.org/api/search?q=trees");
    //         if (res.data.status === "OK") {
    //             const apiData = res.data.data.items.map(item => ({
    //                 id: item.id,
    //                 name: item.name,
    //                 imageUrl: item.image_url, // Replace with the actual property for image URL
    //                 description: item.description // Replace with the actual property for URL
    //             }));
    //             setData(apiData);
    //             console.log('data', apiData);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     searchapi();
    // }, []);

    // const handleSearch = (e) => {
    //     setSearchdata(e.target.value);

    //     // Fix the filtering logic
    //     const result = e.target.value
    //         ? data && data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    //         : []; // Show all data when the search field is empty
    //     setSearchresult(result);
    // }




    return (
        <Headersection>
            <Container>
                <AppBar sx={{ background: 'transparent', position: 'relative', boxShadow: 'none' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link to="/">
                            <img src="/images/logo.svg" alt="logo" />
                        </Link>
                        {/* <Stack>
                            <TextField variant='outlined' placeholder="Search..." size="small" fullWidth value={searchdata} onChange={handleSearch} />
                        </Stack> */}

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


                            <IconButton sx={{ background: 'transparent' }} onClick={() => setOpencart(true)}>
                                <Badge color="secondary" badgeContent={quantity}>
                                    <RiShoppingBasketFill color="#ff3f26" style={{ fontSize: '20px' }} />

                                </Badge>
                            </IconButton>


                        </LinkBox>
                        {/* add to cart */}
                        <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>

                            <IconButton sx={{ background: 'transparent' }} onClick={() => setOpencart(true)}>
                                <Badge color="secondary" badgeContent={quantity}>
                                    <RiShoppingBasketFill color="#ff3f26" style={{ fontSize: '20px' }} />

                                </Badge>
                            </IconButton>

                        </Box>
                        {/* mobile menu */}
                        <Box sx={{ display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' } }}>
                            <IconButton onClick={() => setOpen(true)}>
                                <FiMenu />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
               {/* Search Result section */}
               {/* <Box>
                    <List>
                        {searchresult.map((data) => (
                            <ListItem key={data.id}>
                                <Link to={data.url}>{data.name}</Link>
                                <img src={data.imageUrl} alt={data.name
                                } />
                                <Typography variant="body1">{data.description}</Typography>
                            </ListItem>
                        ))}


                    </List>
                </Box> */}




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
            <Cartcomponent opencart={opencart} setOpencart={setOpencart} />
        </Headersection>
    );
}

export default Header;