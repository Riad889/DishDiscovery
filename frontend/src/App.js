import "./App.css";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import { Routes, Route } from "react-router-dom";
import Home from './components/HomePage/Home';
import { BrowserRouter } from "react-router-dom";
import Menu from './components/FoodMenu/Menu';
import CartPage from '../src/components/Cart/CartPage';
import Login from "./components/LoginPage/Login";
import UserInfo from "./components/UserInfo/UserInfo";
import ThankYou from "./components/ThankYouPage";
import Subscription from "./components/SubscriptionPage";
import VideoPage from "./components/VideoPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#E9F2FC", height: "100vh", width: "100vw", overflow: "auto", }}>
          <Heading />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/userInfo" element={<UserInfo/>}/>
            <Route path="/thankyou" element={<ThankYou/>}/>
            <Route path="/subscription" element={<Subscription/>}/>
            <Route path="/videos" element={<VideoPage/>}/>
           

          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
