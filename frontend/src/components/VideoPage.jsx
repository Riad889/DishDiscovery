import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import VideoPlayBack from "./VideoPlayBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VideoPage = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [hasSubscription, setHasSubscription] = useState();
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
  const currentDate = new Date().toISOString();
  const getUserData = async () => {
    try {
      if (user) {
        const result = await axios.get("http://localhost:8000/getuser", {
          params: {
            user_email: user.email,
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
  useEffect(() => {
    if (user) {
      getUserData().then((data) => {
        //   console.log(
        //     data.data.subscription,
        //   "sub data : " , data.data.subscriptionStartDate,
        //   "sub data end : ", data.data.subscriptionEndDate,
        //    "currentDate : ", currentDate
        //   );
        if (data.data.subscription == true) {
          if (
            currentDate >= data.data.subscriptionStartDate &&
            currentDate <= data.data.subscriptionEndDate
          ) {
            setHasSubscription(true);
          } else {
            setHasSubscription(false);
            navigate("/login");
          }
        } else {
          navigate("/userInfo");
        }
        setUserInfo(data.data);
      });
    }
    else{
        navigate('/login')
    }
  }, []);
  console.log("has subscription : ", hasSubscription);
  return (
    <>
      {hasSubscription ? (
        <Box sx={{ display: "flex", flexDirection: "column", padding: "5px" }}>
          <VideoPlayBack
            videoLink={
              "https://www.youtube.com/embed/ZuQu12vMQZM?si=Hxw_386m9-H41tln"
            }
          />
          <hr />
          <VideoPlayBack
            videoLink={
              "https://www.youtube.com/embed/Pw45LNlDym4?si=C9ky59eSXyJsz_HR" 
            }
          />
          <hr />
          <VideoPlayBack
            videoLink={
              "https://www.youtube.com/embed/ghqijx9lvl4?si=aaaBeGdmPKK4u5R7" 
            }
          />
        </Box>
      ) : null}
    </>
  );
};
export default VideoPage;
