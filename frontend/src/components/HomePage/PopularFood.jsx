import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-configurable-carousel";
import {styled} from '@mui/system';

const MyTypo=styled(Typography)(({theme})=>({
  color: '#EC6083',
  fontFamily: "Roboto",
  fontSize: "18px",
}))

const PopularFood = () => {
  return (
    <>
      <Box sx={{ marginTop: "50px", marginLeft: "30px" }}>
        <Box>
          <MyTypo>
            Our Menu
          </MyTypo>

          <Typography
            sx={{ fontSize: "48px", fontFamily: "Roboto", fontWeight: "bold" }}
          >
            Menu That Always <br />
            Make You Fall In Love
          </Typography>
        </Box>
        <Box>
          <Carousel
            
            dotsNavigation={true}
            dotsNavigationInside={true}
           autoScrollInterval={.11}
           autoScrollClickDelay={.5}
            height={"600px"}
            carouselStyle={"3d"}
          >
            <img src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg" />
            <img src="https://img.freepik.com/premium-photo/shawarma-sandwich-pita-with-beef-meat-vegetables-cheese_124507-28603.jpg?size=626&ext=jpg" />
            <img src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=996&t=st=1685779042~exp=1685779642~hmac=71b79b44fee7f106ddd0029e3f37c786502270ab0aa539370881f78e90797cce" />
            <img src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?size=626&ext=jpg" />
            <img src="https://img.freepik.com/premium-photo/bread-olive-oil-tomato-pepper-olives-knife-illustration_856795-3956.jpg?size=626&ext=jpg" />
          </Carousel>
          ;
        </Box>
      </Box>
    </>
  );
};

export default PopularFood;
