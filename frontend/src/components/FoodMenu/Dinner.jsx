import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
import { Box } from "@mui/material";
import { Loading } from "@nextui-org/react";

const Dinner = (sortBy) => {
  const [dinnerData, setDinnerData] = useState();
  const { sortValue } = sortBy;
  const sendRequest = async () => {
    if (sortValue === "default") {
      try {
        const res = await axios.get("https://dish-discovery-backend-red.vercel.app/dinner");
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "highTolow") {
      try {
        const res = await axios.get("https://dish-discovery-backend-red.vercel.app/dinner/highTolow");
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "lowTohigh") {
      try {
        const res = await axios.get("https://dish-discovery-backend-red.vercel.app/dinner/lowTohigh");
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    sendRequest()
      .then((data) => setDinnerData(data.data))
      .catch((error) => console.log(error));
  }, [dinnerData]);
  return (
    <>
      {dinnerData?.length ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gridGap: "7px",
          }}
        >
          {dinnerData.map((item) => (
            <FoodCard items={item} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "80vh",
            justifyContent: "center",
          }}
        >
          <Loading type="points" size="xl" />
        </Box>
      )}
    </>
  );
};

export default Dinner;
