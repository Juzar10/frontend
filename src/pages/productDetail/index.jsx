import { useLocation } from "react-router-dom";

import "./style/index.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useGetBookDetailQuery } from "../../reduxStore/api-slice";

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

function ProductDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();

  const { data } = useGetBookDetailQuery(location.state.id);

  return (
    <>
      {data && (
        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <div className="grid grid-cols-12 ">
                <div className="col-span-9 col-start-3">
                  <div className="bookImgWrapper">
                    <img
                      src={data.data.coverImg}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 pl-4">
              <div className="bookTitle">{data.data.title}</div>
              <div className="grid grid-cols-12 mt-4">
                <div className="col-span-7">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <div className="authorAvatar"></div>
                    </div>
                    <div className="col-span-4">
                      <div className="grid content-between authorNameWrapper">
                        <div className="authorDetailTitle">Written By</div>
                        <div className="authorDetailDesc">
                          {data.data.author}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="grid content-between authorNameWrapper">
                        <div className="authorDetailTitle">Publisher</div>
                        <div className="authorDetailDesc">
                          {data.data.publisher}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="grid content-between authorNameWrapper">
                        <div className="authorDetailTitle">Year</div>
                        <div className="authorDetailDesc">
                          {data.data.publishDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="grid grid-cols-12">
                    <div className="grid content-center col-span-5 statusWrapper">
                      <div className="statusBox">Free Shiping</div>
                    </div>
                    <div className="grid content-center col-span-6 ml-4 statusWrapper">
                      <div className="statusBox">In Stock</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description">{data.data.description}</div>
              <div className="grid grid-cols-12 mt-8">
                <div className="col-span-4">
                  <div className="grid grid-cols-12">
                    <div className="grid col-span-5 price">
                      ${data.data.price}
                    </div>
                    <div className="self-end col-span-3 originPrice">
                      <del>$16,99</del>
                    </div>
                    <div className="self-end col-span-4 discountPercentage">
                      2%
                    </div>
                  </div>
                </div>
                <div className="col-span-6 col-start-6">
                  <div className="flex justify-between">
                    <div>
                      <button className="add-btn">+</button>
                    </div>
                    <div>
                      <div className="price">0</div>
                    </div>
                    <div>
                      <button className="minus-btn">-</button>
                    </div>
                    <div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-8 ml-20">
            <div className="col-span-8">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Details Product" {...a11yProps(0)} />
                    <Tab label="Customer Reviews" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </Box>
            </div>
            <div className="col-span-3">
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
