import { Typography, Box } from "@mui/material";
import React from "react";
import Clip1 from "../../assets/images/Clip-1.png";
import Clip2 from "../../assets/images/clip-2.png";
import Clip3 from "../../assets/images/clip-3.png";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  [theme.breakpoints.down('md')]:{
    flexDirection:'column',
    marginTop:'50px'
  }
}));

const WhatWeServer = () => {
  return (
    <>
      <Typography
        sx={{
          color: "#EC6083",
          fontFamily: "Roboto",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        What we serve
      </Typography>
      <Typography
        sx={{
          color: "#000000",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        Your Favourite Food <br />
        Delivery Partner
      </Typography>

      <Container sx={{}}>
        <Box>
          <img src={Clip1} alt="clip1" />
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            Easy To Order
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: "18px", textAlign: "center" }}
          >
            You only need a few steps in <br />
            ordering food
          </Typography>
        </Box>
        <Box>
          <img src={Clip2} alt="clip2" />
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            fastest delivery
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: "18px", textAlign: "center" }}
          >
            Delivery that is always ontime
            <br />
            even faster
          </Typography>
        </Box>
        <Box>
          <img src={Clip3} alt="clip3" />
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "36px",
              textAlign: "center",
            }}
          >
            Best quality
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: "18px", textAlign: "center" }}
          >
            Not only fast for us quality is also <br />
            number one
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default WhatWeServer;
