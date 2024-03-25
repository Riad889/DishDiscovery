import React from "react";
import masterCard from "../../assets/images/masterCard.png";
import visaCard from "../../assets/images/visaCard.png";
import rupaCard from "../../assets/images/rupaCard.png";
import userImage from "../../assets/images/userImage.png";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector } from "react-redux";
const CardDetails = () => {

  const {subtotal,shipping,total}=useSelector(state=>state.cart)
  return (
    <>
      <Box
        sx={{
          height: "400px",
          padding: "20px",
          width: "388px",
          background: "#565ABB",
          borderRadius: "20px",
          boxShadow:12
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "24px",
              color: "white",
            }}
          >
            Card Details
          </Typography>
          <img
            style={{ height: "50px", width: "50px", borderRadius: "8px" }}
            src={userImage}
            alt="userImage"
          />
        </Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Poppins",
            color: "white",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Card Type
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Button
            sx={{
              background: "transparent",
              opacity: "96%",
              height: "55px",
              width: "75px",
            }}
          >
            <img src={masterCard} />
          </Button>
          <Button
            sx={{
              background: "transparent",
              opacity: "96%",
              height: "55px",
              width: "75px",
            }}
          >
            <img src={visaCard} />
          </Button>
          <Button
            sx={{
              background: "transparent",
              opacity: "96%",
              height: "55px",
              width: "75px",
            }}
          >
            <img src={rupaCard} />
          </Button>
          <Button
            sx={{
              background: "#6D73C0",
              opacity: "96%",

              height: "55px",
              width: "75px",
              color: "white",
            }}
          >
            See All
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Subtotal
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {subtotal}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Shipping
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            ${shipping}
          </Typography>
        </Box>
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Total (Tax incl.)
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            ${total}
          </Typography>
        </Box>

        <Box
          sx={{
           marginTop:'13px',
            width: "390px",
            height: "60px",
            background: "rgba(236, 96, 131, 1)",
            borderRadius:'12px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            cursor:'pointer'
          }}
        >
            <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              padding:'10px',
              fontWeight: "bold",
            }}
          >
            ${total}
          </Typography>
          <Box sx={{display:'flex',alignItems:'center',padding:'10px'}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              color: "white",
              padding:'10px',
              fontWeight: "bold",
            }}
          >
            Checkout
          </Typography>
          <ArrowForwardIcon sx={{color:'white'}}/>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardDetails;
