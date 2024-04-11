import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Card } from "@mui/material"; // Import Card component
import { FaBold } from "react-icons/fa";
// import Searcritiria from "../Searchcriteria/Searcritiria";
// import Bycretiria from "../Bycriteria/Bycretiria";
// import Bysearch from "../BySearch/Bysearch";
import Safepolices from '../../components/Safepolices/Safepolices';
import Homesafe from "../../components/Homesafe/Homesafe";
import Safeabuse from "../../components/Safeabuse/Safeabuse";

function Safematrimoney() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        // width: "100%",
        // height: "auto",
        borderRadius: 8,
        marginTop:'140px',
        marginLeft: "100px", 
        marginRight: "100px",
        marginBottom:'40px',
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
        backgroundColor: "white", 
        // border: "1px solid #e0e0e0" 
      }}
    >
      <Box sx={{ width: "100%", typography: "body1", paddingLeft:5}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
             
            >
              <Tab
                label="Home"
                value="1"
                sx={{
                  textTransform: "none",
                  backgroundColor:"#5E5D5D",
                  color:'#ffffff',
                  "&.Mui-selected": {
                    backgroundColor:"#f58220",
                    color: "White",
                    fontSize: 14,
                    fontWeight: "bold"
                  }
                }}
              />
              <Tab
                label="Contact Police"
                value="2"
                sx={{
                  textTransform: "none",
                  backgroundColor:"#5E5D5D",
                  color:'#ffffff',
                  "&.Mui-selected": {
                    color: "white",
                    backgroundColor:"#f58220",
                    fontSize: 14,
                    fontWeight: "bold"
                  }
                }}
              />
              <Tab
                label="Report Abuse"
                value="3"
                sx={{
                  textTransform: "none",
                  backgroundColor:"#5E5D5D",
                  color:'#ffffff',
                  "&.Mui-selected": {
                    color: "White",
                    backgroundColor:"#f58220",
                    fontSize: 14,
                    fontWeight: "bold"
                  }
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Homesafe/>
          </TabPanel>
          <TabPanel value="2">
            <Safepolices/>
          </TabPanel>
          <TabPanel value="3">
           <Safeabuse/>
          </TabPanel>
        </TabContext>
      </Box>
    </Card>
  );
}

export default Safematrimoney;