import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Cooking from "../assets/LottieAnimation/cooking.json";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
const ThankYou = () => {


    const navigate=useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Cooking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Box
        sx={{
          padding: "60px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around",
           
          }}
        >
          <Typography variant="h1" sx={{fontWeight:'bold'}}>
            Thank you <br />
            for your purchasing{" "}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "start", width: "100%" }}>
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
              endIcon={<HomeRoundedIcon style={{ fontSize: 30 }} />}
              onClick={()=>navigate('/')}
            >
              Goto Home
            </Button>

            <Button
              sx={{
                background: "#EC6083",
                height: "65px",
                width: "230px",
                color: "black",
                marginTop: "30px",
                marginLeft: "30px",
                fontFamily: "Roboto",
                borderRadius: "40px",
                fontWeight: "700",
                fontSize: "24px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#EC6083", // Set the hover background color to transparent or any other color
                },
              }}
              endIcon={<RestaurantMenuRoundedIcon style={{ fontSize: 30 }} />}
              onClick={()=>navigate('/menu')}
            >
              Order More
            </Button>
          </Box>
        </Box>
        <Box >
          <Lottie options={defaultOptions} height={600} width={600} />
        </Box>
      </Box>
    </>
  );
};

export default ThankYou;
