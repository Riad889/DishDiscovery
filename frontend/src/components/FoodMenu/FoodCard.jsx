import React, { useState } from "react";
import {
  AccordionDetails,
  Accordion,
  Box,
  Button,
  Typography,
  AccordionSummary,
  Badge,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Cart from "../../assets/images/Cart.png";
import { useDispatch } from "react-redux";

const FoodCard = ({ items }) => {
  const [openWarning, setOpenWarning] = useState(false);
  const dispatch = useDispatch();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleCloseWarning = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenWarning(false);
  };

  const addToCart = (data) => {
    dispatch({ type: "addToCart", payload: data });
    dispatch({ type: "calculation" });
  };

  return (
    <div>
      <Box
        sx={{
          height: "400px",
          width: "300px",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: 7,
          marginTop: "20px",
          transition: "1s",
          "&:hover": {
            boxShadow: 24,
            transition: ".7s ",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "#EC6083", fontWeight: "bold", fontFamily: "Roboto" }}
          >
            {items.food_price}৳
          </Typography>

          <Button
            sx={{
              background: "rgba(161, 142, 229, 1)",
              borderRadius: "20px",
              height: "60px",
              width: "60px",
            }}
            onClick={() =>
              addToCart({
                price: items.food_price,
                imageLink: items.food_image_url,
                name: items.food_name,
                description: items.food_description,
                id: items._id,
                quantity: 1,
              })
            }
          >
            <img src={Cart} alt="cart" />
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{
              height: "200px",
              width: "200px",
              borderRadius: "50%",
            }}
            src={items.food_image_url}
            alt="foodpic"
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#ED1C2E",
            marginTop: "10px",
            fontWeight: "bold",
            padding: "2px",
            fontFamily: "Roboto",
          }}
        >
          {items.food_name}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "rgba(161, 142, 229, 1)",
            fontWeight: "bold",
          }}
        >
          {items.food_code}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "rgba(33, 33, 53, 1)",
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
          {items.food_catagory}
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Read More</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{items.food_description}</Typography>
          </AccordionDetails>
        </Accordion>

        <Snackbar
          open={openWarning}
          autoHideDuration={2000}
          onClose={handleCloseWarning}
        >
          <Alert
            onClose={handleCloseWarning}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Food item is deleted successfully
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default FoodCard;
