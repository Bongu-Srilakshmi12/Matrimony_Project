// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import { FaBold } from "react-icons/fa";
// import Searcritiria from "../Searchs/Searcritiria";
// import Bycretiria from "../Bycriteria/Bycretiria";
// import Bysearch from "../BySearch/Bysearch";

// function Search() {
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "80%", typography: "body1", paddingLeft: 13}}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="By Criteria" value="1" sx={{
//                 textTransform: "none",
//                 "&.Mui-selected": {
//                   color: "green",
//                   fontSize: 14,
//                   fontWeight: "bold"
//                 }
//               }}/>
//             <Tab label="By Profile ID" value="2" sx={{
//                 textTransform: "none",
//                 "&.Mui-selected": {
//                   color: "green",
//                   fontSize: 14,
//                   fontWeight: "bold"
//                 }
//               }}/>
//             <Tab label="Saved Search" value="3"  sx={{
//                 textTransform: "none",
//                 "&.Mui-selected": {
//                   color: "green",
//                   fontSize: 14,
//                   fontWeight: "bold"
//                 }
//               }}/>
//           </TabList>
//         </Box>
//         <TabPanel value="1">
//           <Searcritiria />
//         </TabPanel>
//         <TabPanel value="2">
//             <Bycretiria />
//         </TabPanel>
//         <TabPanel value="3">
//             <Bysearch />
//         </TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

// export default Search;


import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Card } from "@mui/material"; // Import Card component
import { FaBold } from "react-icons/fa";
import Searcritiria from "../Searchcriteria/Searcritiria";
import Bycretiria from "../Bycriteria/Bycretiria";
import Bysearch from "../BySearch/Bysearch";

function Search() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card
      sx={{
        width: "80%",
        height: "auto",
        borderRadius: 8,
        marginTop:'140px',
        marginLeft: "auto", 
        marginRight: "auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
        backgroundColor: "#fff", 
        border: "1px solid #e0e0e0" 
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
                label="By Criteria"
                value="1"
                sx={{
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "green",
                    fontSize: 14,
                    fontWeight: "bold"
                  }
                }}
              />
              <Tab
                label="By Profile ID"
                value="2"
                sx={{
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "green",
                    fontSize: 14,
                    fontWeight: "bold"
                  }
                }}
              />
              <Tab
                label="Saved Search"
                value="3"
                sx={{
                  textTransform: "none",
                  "&.Mui-selected": {
                    color: "green",
                    fontSize: 14,
                    fontWeight: "bold"
                  }
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Searcritiria />
          </TabPanel>
          <TabPanel value="2">
            <Bycretiria />
          </TabPanel>
          <TabPanel value="3">
            <Bysearch />
          </TabPanel>
        </TabContext>
      </Box>
    </Card>
  );
}

export default Search;

