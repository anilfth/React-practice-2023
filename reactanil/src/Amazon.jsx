import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
 const Amazon = () => {
    return (
        <>
        <h1> Amazon series</h1>
       
        < Card 
        key = {Sdata[3].id}
        imgsrc = {Sdata[3].imgsrc}
        title = {Sdata[3].title}
        sname = {Sdata[3].sname}
        link = {Sdata[3].link}
         
        />
         </>
    )
 }
  export default Amazon