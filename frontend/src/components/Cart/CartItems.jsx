import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Typography } from "@mui/material";
import FoodImage from "../../assets/images/foodimage.png";
import { useDispatch } from "react-redux";
const CartItemsForPage = (items) => {
  const { item } = items;
  const dispatch = useDispatch();
  //console.log(items);

  const increase = (id) => {
    dispatch({type:'addToCart',payload:{id}})
    dispatch({type:'calculation'});
  };
  const decrease = (id) => {
    dispatch({type:'decrease',payload:id})
    dispatch({type:'calculation'});
  };
  const deleteItem = (id) => {
    dispatch({type:'deleteFromCart',payload:id})
    dispatch({type:'calculation'});
  };
  return (
    <>
      <Box
        sx={{
          height: "100px",
          width: "608px",
          display: "flex",
          marginTop: "6px",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",

          borderRadius: "15px",
          boxShadow: 3,
        }}
      >
        <img
          style={{ height: "82.29px", width: "80px" }}
          src={item.imageLink}
          alt="foodImage"
        />
        <Box>
          <Typography sx={{ fontFamily: "Poppins", fontSize: "24px" }}>
            {item.name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontFamily: "Poppins", fontSize: "22px", marginRight: "7px" }}
          >
            {item.quantity}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <ArrowDropUpIcon onClick={()=>increase(item.id)} sx={{ cursor: "pointer" }}/>
            <ArrowDropDownIcon onClick={()=>decrease(item.id)} sx={{ cursor: "pointer" }} />
          </Box>
        </Box>
        <Typography
          sx={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: "bold" }}
        >
          ${item.price}
        </Typography>
        <DeleteOutlineIcon
        onClick={()=>deleteItem(item.id)}
          sx={{ cursor: "pointer", color: "rgba(236, 96, 131, 1)" }}
        />
      </Box>
    </>
  );
};

export default CartItemsForPage;
