import React, { useState } from "react";

import CartItemsForPage from "./CartItems";

import masterCard from "../../assets/images/masterCard.png";
import visaCard from "../../assets/images/visaCard.png";
import rupaCard from "../../assets/images/rupaCard.png";
import userImage from "../../assets/images/userImage.png";
import { Box, Typography, Button, TextField } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { subtotal, shipping, total } = useSelector((state) => state.cart);
  console.log("cartItems = ", cartItems);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(user.email)
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Validation check
    if (!value.trim()) {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission if input is valid
    if (inputValue.trim()) {
      // Perform form submission
      console.log("Form submitted with value:", inputValue);
    } else {
      // Set error message if input is invalid
      setError("This field is required");
    }
  };

  const confirmOrder = async (orderData) => {
    try {
      const result = await axios.post(
        "http://localhost:8000/order",

        orderData
      );
      const data = result.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const checkOut = () => {
    if (user) {
      const orderData = {
        items: cartItems,
        totalPrice: total,
        location: inputValue,
        user_name: user.name,
        user_email: user.email,
      };
      if (inputValue.trim() !== "") {
        confirmOrder(orderData).then((data) =>
          window.location.replace(data.url)
        );
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {cartItems.length ? (
        <Box
          sx={{
            padding: "10px",
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "24",
                fontWeight: "bold",
              }}
            >
              Shopping Cart
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "14",
              }}
            >
              You have {cartItems.length} items in your cart
            </Typography>
            <Box sx={{ marginTop: "3%" }}>
              {cartItems.map((items) => (
                <CartItemsForPage item={items} />
              ))}
            </Box>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ position: "relative" }}>
              <TextField
                value={inputValue}
                onChange={handleChange}
                label="Street Name and City Name"
                helperText={error || "Enter street name and city name"}
                fullWidth
                error={!!error}
                sx={{ marginBottom: "5%" }}
              />

              <Box
                sx={{
                  height: "400px",
                  padding: "20px",
                  width: "388px",
                  background: "#565ABB",
                  borderRadius: "20px",
                  boxShadow: 12,
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
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "8px",
                    }}
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
                    marginTop: "13px",
                    width: "390px",
                    height: "60px",
                    background: "rgba(236, 96, 131, 1)",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      color: "white",
                      padding: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    ${total}
                  </Typography>
                  <Button
                    onClick={checkOut}
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                    type="submit"
                    variant="outlined"
                    sx={{
                      border: "none",
                      color: "white",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                    }}
                  >
                    CheckOut
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h1">No Item Found</Typography>
        </Box>
      )}
    </>
  );
};

export default CartPage;
