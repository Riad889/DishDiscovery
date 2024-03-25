import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import FoodCard from './FoodCard';
import { Box } from '@mui/material';
const Snacks = (sortBy) => {
  const [snackData, setSnackData] = useState();
  const { sortValue } = sortBy;
  console.log(sortValue);
  const sendRequest = async () => {
    var data;
    if (sortValue === "default") {
      try {
        const res = await axios.get("http://localhost:8000/snack");
        data = res.data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "highTolow") {
      try {
        const res = await axios.get(
          "http://localhost:8000/snacks/highTolow"
        );
        data = res.data;
      } catch (error) {
        console.log(error);
      }
    } else if (sortValue === "lowTohigh") {
      try {
        const res = await axios.get(
          "http://localhost:8000/snacks/lowTohigh"
        );
        data = res.data;
      } catch (error) {
        console.log(error);
      }
    }
    return data;
  };

  useEffect(() => {
    sendRequest()
      .then((data) => setSnackData(data.data))
      .catch((error) => console.log(error));
  }, [snackData]);
  return (
    <>
      {snackData?.length ? (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gridGap: "7px",
        }}
      >
       { snackData.map((item) => (
        <FoodCard items={item} />
        ))
       }
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
  
 
  
}

export default Snacks