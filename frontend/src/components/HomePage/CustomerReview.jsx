import React from "react";
import { Box, Typography } from "@mui/material";
import Clip4 from "../../assets/images/clip-4.png";
import Customer from "../../assets/images/customer.png";
const CustomerReview = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <img src={Clip4} alt="clip-4" />
        <Box>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "18px",
              color: "#EC6083",
              fontWeight: "bold",
            }}
          >
            What They Say
          </Typography>

          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "48px",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            What Our Customer <br /> Say About Us
          </Typography>

          <Typography
            sx={{
              fontFamily: "Roboto",
              fontSize: "18px",
              color: "#000000",
              fontWeight: "400",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Blandit varius eget pulvinar rhoncus eros, magna.
            <br /> Orci sed aenean scelerisque arcu.
            <br /> Venenatis odio etiam bibendum in nulla.
          </Typography>
          <Box sx={{ marginTop: "6px", display: "flex", alignItems: "center" }}>
            <img src={Customer} alt="customer" />
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                Alex
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Roboto",

                  marginLeft: "10px",
                }}
              >
                Customer
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomerReview;
