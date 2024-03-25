import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import { useNavigate } from "react-router-dom";
import ScrollButton from "../custom-component/Scroll_to_top_button";
const UserInfo = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const LocalUser = JSON.parse(localStorage.getItem("userInfo"));
  const [orderData, setOrderData] = useState();
  const getUser = async () => {
    try {
      if (LocalUser) {
        const result = await axios.get("http://localhost:8000/getuser", {
          params: {
            user_email: LocalUser.email,
          },
        });
        const data = result.data;
        return data;
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllOrders = async () => {
    try {
      const result = await axios.get("http://localhost:8000/getallorders", {
        params: {
          user_email: LocalUser.email,
        },
      });
      const data = result.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser().then((data) => setUser(data?.data));
    getAllOrders().then((data) => setOrderData(data?.data));
  }, []);
  const gotoVideos = () => {
    navigate("/videos");
  };
  console.log("order data : ", orderData);
  return (
    <>
      {user && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5%",
            height: "100%",
          }}
        >
          <img
            src={user.user_pic}
            style={{ borderRadius: "50%" }}
            alt="user_picture"
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginTop: "30px" }}
            >
              {user.user_name}
            </Typography>
            {user.subscription ? (
              <Button
                sx={{ marginLeft: "10px", fontWeight: "bold" }}
                variant="contained"
                endIcon={<SmartDisplayIcon />}
                onClick={gotoVideos}
              >
                CheckOut Videos
              </Button>
            ) : (
              <Button
                sx={{ marginLeft: "10px", fontWeight: "bold" }}
                variant="contained"
                endIcon={<AddIcon />}
                onClick={() => navigate("/subscription")}
              >
                Get Subcription
              </Button>
            )}
          </Box>

          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: "30px" }}
          >
            {user.user_email}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", marginTop: "50px" }}
          >
            <u>Previous Orders</u>:
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "90%",
              flexDirection: "column",
              padding: "30px",
            }}
          >
            {orderData?.map((order) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                  transition: ".4s",
                  borderRadius: "30px",
                  padding: "30px",
                  backgroundColor: "#EC6083",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "&:hover": {
                    boxShadow: 9,
                  },
                }}
                key={order.id}
              >
                {" "}
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    <u>Orders</u>:
                  </Typography>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          {item.name}
                        </Typography>
                        <ul>
                          <li>
                            <Typography
                              variant="h7"
                              sx={{ fontWeight: "bold" }}
                            >
                              price : {item.price}
                            </Typography>
                          </li>
                          <li>
                            <Typography
                              variant="h7"
                              sx={{ fontWeight: "bold" }}
                            >
                              Quantity : {item.quantity}
                            </Typography>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    <u>Location</u>
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {order.location}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    <u>Total Amount</u>
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {order.totalPrice}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    <u>Transection Id</u>
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {order.user_transection_id}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    <u>Status</u>
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {order.status}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default UserInfo;
