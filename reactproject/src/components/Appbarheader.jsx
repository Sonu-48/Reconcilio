import React, { useState } from "react";
import { Container, Box, AppBar, Toolbar, styled, Typography, IconButton, List, ListItem, Paper, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";


const headerdata = [
    {
        name: 'Home',
        url: '/',
        id: '1',
    },
    {
        name: 'About',
        url: '/about',
        id: '2',
    },
    {
        name: 'Contact Us',
        url: '/contact',
        id: '3'
    },
    {
        name: 'Blog',
        url: '/blog',
        id: '4'
    },
]

const Wrapper = styled('div')({
    "& a": {
        marginLeft: '30px',
        textDecoration: 'none',
        color: '#fff',
    }
})


const Appbarheader = () => {
    // const [show,setShow] = useState(false);
    return (
        <Wrapper>
            <Container>
                <AppBar>
                    <Toolbar sx={{ justifyContent: 'space-around' }}>
                        <Typography variant="h2" color="#fff">Sonu</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {headerdata.map((data) => (

                                <Box >
                                    <Link to={data.url} sx={{ marginLeft: '30px' }}>{data.name}</Link>

                                </Box>

                            ))}
                            {/* <Box>
                                <IconButton onClick={()=>setShow(!show)}>
                                    <Typography variant="h4">Account</Typography>
                                </IconButton>
                                <Box component={Paper} sx={{display:show?'block':'none',transition:'0.105'}}>
                                <List open={show}>
                                    <ListItem>
                                        <ListItemButton>Account</ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>Logout</ListItemButton>
                                    </ListItem>
                                </List>
                                </Box>
                            </Box> */}
                        </Box>

                    </Toolbar>
                </AppBar>
            </Container>
        </Wrapper>
    )
}
export default Appbarheader;