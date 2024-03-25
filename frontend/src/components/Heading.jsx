import React from "react";
import { useState } from "react";
import { Box, Typography, Button, Badge } from "@mui/material";
import HeadingImage from "../assets/images/Burger King.png";
import SearchIcon from "../assets/images/Search.png";
import User from "../assets/images/User.png";
import Cart from "../assets/images/Cart.png";
import { styled } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from '@mui/material/Drawer';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { googleLogout } from '@react-oauth/google';

const HeadingText = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const DrawerArrow = styled(ArrowBackIosNewIcon)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
  },
}));

const Heading = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };


  const logOut = () => {
    googleLogout();
    localStorage.removeItem('userInfo');
    navigate('/');
    
};


  const navigate = useNavigate();

  
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  //console.log(userInfo.picture)
  const { cartItems } = useSelector(state => state.cart);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "static",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <DrawerArrow />
          <img
            style={{
              height: "96px",
              width: "96px",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            src={HeadingImage}
            alt="headingImage"
            onClick={() => navigate("/")}
          />
        </Box>

        <HeadingText>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bolder",
              cursor: "pointer",
              fontSize: "24px",
              marginRight: "20px",

              transition: ".2s",
              padding: "10px",
              borderRight: "2px solid  #EC6083",
              ":hover": {
                borderBottom: "5px solid #EC6083",
                color: "#EC6083",
                // paddingBottom: ".3rem",
              },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bolder",
              cursor: "pointer",
              fontSize: "24px",
              marginRight: "20px",
              color: "rgba(0, 0, 0, 1)",
              padding: "10px",
              borderRight: "2px solid  #EC6083",
              transition: ".2s",
              ":hover": {
                borderBottom: "5px solid #EC6083",
                color: "#EC6083",
                // paddingBottom: ".3rem",
              },
            }}
            onClick={() => navigate("/menu")}
          >
            Menu
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bolder",
              cursor: "pointer",
              fontSize: "24px",
              marginRight: "20px",
              color: "rgba(0, 0, 0, 1)",
              padding: "10px",
              borderRight: "2px solid  #EC6083",
              transition: ".2s",
              ":hover": {
                borderBottom: "5px solid #EC6083",
                color: "#EC6083",
                // paddingBottom: ".3rem",
              },
            }}
          >
            Popular Food
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bolder",
              cursor: "pointer",
              fontSize: "24px",
              marginRight: "20px",
              color: "rgba(0, 0, 0, 1)",
              padding: "10px",
              borderRight: "2px solid  #EC6083",
              transition: ".2s",
              ":hover": {
                borderBottom: "5px solid #EC6083",
                color: "#EC6083",
                transition: ".1s",
                // paddingBottom: ".3rem",
              },
            }}
          >
            Contact Us
          </Typography>
        </HeadingText>

        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Button
            sx={{
              background: "rgba(236, 96, 131, 1)",
              borderRadius: "20px",
              height: "60px",
              width: "60px",
              marginRight: "20px",
            }}
          >
            <img src={SearchIcon} alt="search" />
          </Button>

          <Button
            sx={{
              background: "rgba(161, 142, 229, 1)",
              borderRadius: "20px",
              height: "60px",
              width: "60px",
              marginRight: "20px",
            }}
            onClick={() => navigate("/cartpage")}
          >
            <Badge badgeContent={cartItems.length} color="success">
              <img src={Cart} alt="cart" />
            </Badge>

          </Button>

          {userInfo ? <Button
            sx={{
              padding: '0',
              border: 'none',
              overflow: 'hidden',
              borderRadius: "20px",
              height: "60px",
              width: "60px",
              marginRight: "20px",
            }}

            onClick={toggleDrawer(true)}
          >
            <img style={{ height: "100%", width: '100%', objectFit: 'cover', }} src={userInfo.picture} alt="user" />
          </Button>


            : <Button
              sx={{
                background: "rgba(33, 33, 53, 1)",
                borderRadius: "20px",
                height: "60px",
                width: "60px",
                marginRight: "20px",
              }}

              onClick={()=>navigate('/login')}
            >
              <img src={User} alt="user" />
            </Button>}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ height: '150px' }} // Adjust height as needed
          >
            <Box
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              sx={{ width: '330px', display: 'flex', marginTop: '50%', flexDirection: 'column' , backgroundColor: 'rgba(255, 255, 255, 0.5)',}}
            >
              <Button endIcon={<DoubleArrowIcon />}  onClick={()=>navigate('/userInfo')}>View Profile</Button>
              <Button endIcon={<DoubleArrowIcon />} onClick={logOut}>Logout</Button>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Heading;
