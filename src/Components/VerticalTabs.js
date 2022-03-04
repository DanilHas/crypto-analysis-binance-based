import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TotalBalanceContainer from "./TotalBalanceContainer";
import { ContainerForCurrencies } from "./ContainerForCurrencies";
import CurrencyOneContainer from "./CurrencyOneContainer";
import CurrencyTwoContainer from "./CurrencyTwoContainer";
import ConvertaionContainer from "./ConvertationContainer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Convert" {...a11yProps(0)} />
        <Tab label="History" {...a11yProps(1)} />
        <Tab label="Analysis" {...a11yProps(2)} />
        <Tab label="Compare" {...a11yProps(3)} />
        <Tab label="Account" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TotalBalanceContainer />
        <ContainerForCurrencies>
          <CurrencyOneContainer />
          <CurrencyTwoContainer />
        </ContainerForCurrencies>
        <ConvertaionContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}
