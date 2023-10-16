/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi.js";
import menuCard from './menuCard';
const Resturant = () => {
  const[menuData, SetMenuData] = useState(Menu);
  return (
    <>
    <menuCard/>
    </>
  );
};

export default Resturant
