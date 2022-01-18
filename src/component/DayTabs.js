import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

export default function DayTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons={false}
        >
          <Tab
            icon={
              <div>
                <h1 className={"text-white text-3xl text-left font-bold"}>
                  Day 01
                </h1>
                <p className={"text-white text-lg text-left opacity-40"}>
                  Wed, 20 May 2022
                </p>
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <div>
                <h1 className={"text-white text-3xl text-left font-bold"}>
                  Day 02
                </h1>
                <p className={"text-white text-lg text-left opacity-40"}>
                  Wed, 21 May 2022
                </p>
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <div>
                <h1 className={"text-white text-3xl text-left font-bold"}>
                  Day 03
                </h1>
                <p className={"text-white text-lg text-left opacity-40"}>
                  Wed, 22 May 2022
                </p>
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={"space-y-10"}>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={"space-y-10"}>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>HELLO WORLD</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={"space-y-10"}>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
          <div className={"flex flex-row space-x-10 text-white items-start"}>
            <Typography>07.00 - 09.00</Typography>
            <div>
              <h1 className={"text-2xl font-bold"}>REGISTRATION</h1>
              <h1 className={"text-sm text-gray-200"}>
                Prepare all participants so that they have registered
              </h1>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
