import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Burger from "../../assets/images/burger.png";
import {styled} from "@mui/system";

const WelcomeBoxed = styled(Box)(({ theme }) => ({
  marginLeft: "52px",
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down('md')]:{
    flexDirection: "column-reverse",
    
  }
}));

const Welcome = () => {
  return (
    <>
      <WelcomeBoxed>
        <Box>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "96px",
              fontWeight: "bolder",
              color: "#000000",
            }}
          >
            Be the fastest
            <br />
            In Delivering
            <br />
            Your <span style={{ color: "#EC6083" }}>Food</span>
          </Typography>

          <Typography
            sx={{
              fontSize: "24px",
            }}
          >
            We cook and deliver the tastiest food right
            <br /> away to your designated location
          </Typography>
          <Button
            sx={{
              background: "#EC6083",
              height: "65px",
              width: "230px",
              color: "black",
              marginTop: "30px",
              fontFamily: "Roboto",
              borderRadius: "40px",
              fontWeight: "700",
              fontSize: "24px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#EC6083", // Set the hover background color to transparent or any other color
              },
            }}
          >
            Get Started
          </Button>
        </Box>

        <img src={Burger} alt="burger" />
      </WelcomeBoxed>
    </>
  );
};

export default Welcome;
