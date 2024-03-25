import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Breakfast from "./Breakfast";
import Launch from "./Launch";
import Dinner from "./Dinner";
import Snacks from "./Snacks";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography variant="h2" color={"black"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Menu = () => {
  const [value, setValue] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const handleChange2 = (event) => {
    setSortBy(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <FormControl
        sx={{
          width: "14%",
          float: "right",
          marginRight:'20px'
        }}
      >
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Age"
          onChange={handleChange2}
        >
          <MenuItem value="default">Default</MenuItem>
          <MenuItem value="highTolow">Price(HighToLow)</MenuItem>
          <MenuItem value="lowTohigh">Price(LowToHigh)</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ marginTop: "2%" }}>
        <Box
          sx={{
            marginTop: "20px",
          
            borderColor: "#EC6083",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Breakfast" {...a11yProps(0)} />
            <Tab label="Launch" {...a11yProps(1)} />
            <Tab label="Snacks" {...a11yProps(2)} />
            <Tab label="Dinner" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Breakfast sortValue={sortBy}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Launch sortValue={sortBy}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Snacks sortValue={sortBy}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Dinner sortValue={sortBy}/>
        </TabPanel>
      </Box>
    </>
  );
};

export default Menu;
