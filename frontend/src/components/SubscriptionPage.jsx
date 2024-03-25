import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Subscription = () => {
  const [value, setValue] = React.useState("monthly");
  let basicSub = 20;
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const sendSubscriptionData = async (basicSub, period) => {
    try {
      const currentDate = new Date();
      let SubscriptionEnd;
      if (period === "monthly") {
        SubscriptionEnd = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          currentDate.getDate()
        );
      } else if (period === "yearly") {
        SubscriptionEnd = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 12,
          currentDate.getDate()
        );
      }
      const result = await axios.post("http://localhost:8000/subscription", {
        user_email: user.email,
        subscriptionPrice: basicSub,
        subscriptionStart: currentDate,
        subscriptionEnd: SubscriptionEnd,
      });
      console.log("subscription Result : ",result)
      const data = result.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getSubscription = () => {
    if (user) {
      if (value !== "monthly") {
        basicSub = basicSub * 12 - basicSub * 12 * 0.3;
        sendSubscriptionData(basicSub, value).then((data) =>
          window.location.replace(data.url)
        );
        basicSub=20;
      } else {
        sendSubscriptionData(basicSub, value).then((data) =>
        window.location.replace(data.url)
        );
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3%",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontFamily: "Roboto" }}
        >
          Choose Your Plan
        </Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="monthly"
              control={<Radio />}
              label="Billing Monthly"
            />
            <FormControlLabel
              value="yearly"
              control={<Radio />}
              label="Billing Yearly"
            />
          </RadioGroup>
        </FormControl>

        <Box
          sx={{
            marginTop: "2%",
            padding: "10px",
            display: "flex",
            backgroundColor: "#EC6083",
            height: "400px",
            width: "400px",
            borderRadius: "20px",
            flexDirection: "column",
            boxShadow: 4,
            transition: ".4s",
            "&:hover": {
              boxShadow: 9,
            },
          }}
        >
          <Typography
            sx={{
              marginTop: "10px",
              marginLeft: "auto",
              padding: "5px",
              fontWeight: "bold",
              height: "25px",
              justifyContent: "center",
              width: "100px",
              borderRadius: "50px",
              background: "#A18EE5",
              color: "black",
              fontFamily: "Roboto",
            }}
          >
            Most Popular
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginLeft: "3px",
              color: "black",
              fontFamily: "Roboto",
            }}
          >
            Starter Plan
          </Typography>
          <Typography
            variant="h7"
            sx={{ marginLeft: "3px", color: "black", fontFamily: "Roboto" }}
          >
            For indivisuals
          </Typography>

          {value === "monthly" ? (
            <Typography
              sx={{ fontWeight: "bold", marginTop: "5%", fontFamily: "Roboto" }}
              variant="h4"
            >
              {basicSub} ৳ / <span style={{ fontSize: "20px" }}>mo</span>
            </Typography>
          ) : (
            <Typography
              sx={{ fontWeight: "bold", marginTop: "5%", fontFamily: "Roboto" }}
              variant="h4"
            >
              {basicSub * 12 - basicSub * 12 * 0.3} ৳ /{" "}
              <span style={{ fontSize: "20px" }}>yr</span>{" "}
            </Typography>
          )}

          <Typography
            sx={{ fontWeight: "bold", marginTop: "5%", fontFamily: "Roboto" }}
          >
            Features/Benefits
          </Typography>

          <Box sx={{ marginTop: "5px", display: "flex", padding: "4px" }}>
            <CheckCircleRoundedIcon />
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                marginLeft: "2px",
              }}
            >
              Get Recipe Video
            </Typography>
          </Box>
          <Box sx={{ marginTop: "5px", display: "flex", padding: "4px" }}>
            <CheckCircleRoundedIcon />
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "Roboto",
                marginLeft: "2px",
              }}
            >
              Get More Offer
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            marginTop: "1%",
            backgroundColor: "orange",
            color: "black",
            "&:hover": {
              backgroundColor: "orange", // Set the hover background color to transparent or any other color
            },
            width: "400px",
            fontWeight: "bold",
          }}
          endIcon={<DoubleArrowIcon />}
          onClick={getSubscription}
        >
          Get Subscription
        </Button>
      </Box>
    </>
  );
};

export default Subscription;
