import { Typography, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Roboto",
              fontWeight: "bold",
              color: "#EC6083",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Feature
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            News
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Menu
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Roboto",
              fontWeight: "bold",
              color: "#EC6083",
            }}
          >
            Company
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Why Burger King?
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Partner With Us
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Blog
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Roboto",
              fontWeight: "bold",
              color: "#EC6083",
            }}
          >
            Support
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Account
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Support Center
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Feedback
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Contact Us
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Roboto",
              fontWeight: "bold",
              color: "#EC6083",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Roboto",
            }}
          >
            Question Or Feedback?
            <br />
            We’d Love To Hear From You
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
