import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import LoginImage from "../../assets/images/login.png";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "30%",

}));
const MainBox = styled(Box)(({ theme }) => ({
  padding: "40px",

  overflow: 'hidden',
  display: 'flex',

}));
const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "70%",
}));
const Login = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const navigate=useNavigate()

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),

  });

  const SendUserInfoToServer = async (datas) => {
    // console.log(datas)
    try {
      const res = await axios.post("https://dish-discovery-backend-red.vercel.app/adduser", {
        user_name: datas.name,
        user_email: datas.email,
        user_pic: datas.picture,
      })
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            SendUserInfoToServer(res.data);
            navigate('/');
            
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
 
  return (
    <>
      <MainBox>
        <LeftBox>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
          >
            Welcome Back!
          </Typography>
          <Box
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Typography
              variant="h5"
              sx={{ fontFamily: "Poppins", fontWeight: "bold", marginTop: "30px", }}
            >
              ................Continue with...............
            </Typography>
          </Box>





          <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '15px' }}>






            <Button sx={{fontWeight:'bold'}} variant="contained" onClick={() => login()}>Sign in with Google 🚀 </Button>
            


          </Box>
        </LeftBox>
        <RightBox>
          <img style={{ objectFit: 'cover', height: '50%' }} src={LoginImage} alt='ig' />
        </RightBox>
      </MainBox>
    </>
  );
};


export default Login;
