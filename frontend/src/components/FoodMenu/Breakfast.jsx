import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "@nextui-org/react";
import { Box } from "@mui/material";
import FoodCard from "./FoodCard";

const Breakfast = (sortBy) => {
  const [breakfastData, setBreakfastData] = useState();
  const { sortValue } = sortBy;
  //console.log(sortValue);
  const sendRequest = async () => {
    if (sortValue === "default") {
      try {
        const res = await axios.get("http://localhost:8000/breakfast");
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "highTolow") {
      try {
        const res = await axios.get(
          "http://localhost:8000/breakfast/highTolow"
        );
        const data = res.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "lowTohigh") {
      try {
        const res = await axios.get(
          "http://localhost:8000/breakfast/lowTohigh"
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
      .then((data) => setBreakfastData(data.data))
      .catch((error) => console.log(error));
  }, [breakfastData]);
  //console.log(breakfastData);
  return (
    <>
      {breakfastData?.length ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gridGap: "7px",
          }}
        >
          {breakfastData.map((item) => (
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

export default Breakfast;
