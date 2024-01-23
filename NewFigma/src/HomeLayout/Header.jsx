import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Button,
  Paper,
  ListItemButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";

const Wrapper = styled("div")({
  padding: "10px 0px",
  "& a": {
    color: "#000000",
    fontSize: "17px",
    fontWeight: "600",
    marginLeft: "19px",
    padding: "7px 0px",
    marginRight:'30px',
    fontFamily:"'Futura, sans-serif'"
  },
  "& a.active": {
    borderBottom: "2px solid #b4d56c",
  },
  "& a:hover": {
    borderBottom: "2px solid #b4d56c",
  },
  "& h5": {
    color: "#2175a9",
  },
});

function Header() {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <Wrapper>
      <Container>
        {/* Header */}
        <AppBar>
          <Toolbar sx={{justifyContent:'space-between'}}>
            <Link to="/">
              <Typography variant="h4" color="#000">Reconcilio</Typography>
            </Link>
          <Stack
          sx={{ display: { lg: "block", md: "none", sx: "block", xs: "none" } }}
        >
         
            <NavLink component={ReactRouterLink} to="/from">
             How it Works
            </NavLink>
            <NavLink component={ReactRouterLink} to="/">
              Features & Benefits  
            </NavLink>
            <NavLink component={ReactRouterLink} to="/about">
            FAQs
            </NavLink>
            <NavLink component={ReactRouterLink} to="/services">
            Request a Demo
            </NavLink>
          <Button variant="contained" color="primary">Sign Up</Button>
        </Stack>

          </Toolbar>
        </AppBar>
        {/* mobile menu */}
       <Stack sx={{display:{lg:'none',md:'block',sm:'block',xs:'block'}}}>
       <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            justifyContent: "start",
            borderBottom: "none",
            borderRadius: "0px",
            padding: "7px 15px",
          }}
          onClick={() => setShowmenu(!showmenu)}
        >
          Menu
        </Button>
        <Box sx={{display:showmenu? 'block':'none'}} component={Paper}>
          <List className="list">
            <ListItem>
              <Link to="">How it Works</Link>
            </ListItem>
            <ListItem>
              <Link to="">Features & Benefits</Link>
            </ListItem>
            <ListItem>
              <Link to="">FAQs</Link>
            </ListItem>
            <ListItem>
              <Link to="">Fequest a Demo</Link>
            </ListItem>
            <ListItem>
              <ListItemButton>
                Sign Up
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
       </Stack>
      </Container>
    </Wrapper>
  );
}
export default Header;
