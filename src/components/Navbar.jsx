import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";
import Search from "./Search.jsx";
import Toggle from "./Toggle";
import './Navbar.css'

export default function Navbar() {
  const [value, setValue] = useState(0);
  const [navElements, setNavElements] = useState({
    today: true,
    hourly: false,
    daily: false,
  });

  const handleChange2 = (e, duration) => {
    setNavElements((navElements) => {
      const updated = {};
      for (let key in navElements) {
        if (key === duration) {
          updated[key] = true;
        } else {
          updated[key] = false;
        }
      }
      return updated;
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        className="navbar-tabs"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(0, 32, 63)",
          borderBottom: "1px solid #4888ffff",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          "& .MuiTabs-indicator": {
            bgcolor: "#4888ffff",
            height: 3,
          },
        //   "& .MuiTab-root": {color: "white"}, // default tab text color
          "& .MuiTab-root.Mui-selected": {
            color: "#4888ffff", // selected tab text color (use hex, rgb, etc.)
          },
          "& .MuiTabs-scrollButtons": {
            color: "#1976d2", // 👈 Change button color
          },
        }}>
        <Tab label="Today" style={{flex: "1"}} duration="today" onClick={(e) => handleChange2(e, "today")} className="tab" />
        <Tab label="Hourly" style={{flex: "1"}} duration="hourly" onClick={(e) => handleChange2(e, "hourly")} className="tab" />
        <Tab label="Daily" style={{flex: "1"}} duration="daily" onClick={(e) => handleChange2(e, "daily")} className="tab" />
      </Tabs>
      <Toggle />
      <Search navElements={navElements} />
    </div>
  );
}
