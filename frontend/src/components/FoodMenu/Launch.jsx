import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import FoodCard from "./FoodCard";
import { Box, Typography } from "@mui/material";
const Launch = (sortBy) => {
  const [launchData, setLaunchData] = useState();
  const { sortValue } = sortBy;
  //console.log(sortValue);
  const sendRequest = async () => {
    if (sortValue === "default") {
      try {
        const res = await axios.get("https://dish-discovery-backend-red.vercel.app/launch");
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "highTolow") {
      try {
        const res = await axios.get(
          "https://dish-discovery-backend-red.vercel.app/launch/highTolow"
        );
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "lowTohigh") {
      try {
        const res = await axios.get(
          "https://dish-discovery-backend-red.vercel.app/launch/lowTohigh"
        );
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    sendRequest()
      .then((data) => setLaunchData(data.data))
      .catch((error) => console.log(error));
  }, [launchData]);
  return (
    <>
      {launchData?.length ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gridGap: "7px",
          }}
        >
          {launchData.map((item) => (
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

export default Launch;
