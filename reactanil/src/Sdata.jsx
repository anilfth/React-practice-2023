import React from 'react'
import Card from './Card';
import './index.css';
function Sdata() {
    const Sdata = [
        {
            id: 1,
            sname: "extra curricular",
            imgsrc:'https://wallpapercave.com/wp/wp4056410.jpg',
            title:'Dark',
            link:'https://www.netflix.com/in/title/80100172'
        },
        {
            id: 2,
            sname:"Money Heist",
            imgsrc: "https://picsum.photos/id/237/200/300",
            title: "Netflix webseries",
            link: "https://www.netflix.com/in/title/80192098"
        },
        {
            id: 3,
            sname:"wheel of the time",
            imgsrc: "https://picsum.photos/200/300?grayscale",
            title: 'amazon series',
            link: 'https://www.primevideo.com/detail/The-Wheel-of-Time/0U3073DE9J38JXZ5WLZW5O8MH3'
            
        }
    ]
  return (
    <div>
        <h1> Netflix Top Five Webseries</h1>
      {/* <Sdata /> */}
      {/* {SdataList.map((data) => (
        <div key={data.id}>
          <h2>{data.sname}</h2>
          <img src={data.imgsrc} alt={data.title} />
          <p>{data.title}</p>
          <a href={data.link}>Watch Now</a>
        </div>
      ))} */}
       <Card 
       key = {Sdata[1].id}
       imgsrc= {Sdata[0].imgsrc}
        title = {Sdata[0].title}
        sname = {Sdata[0].sname}
        link = {Sdata[0].link}

       />
         <Card 
         key = {Sdata[2].id}
         imgsrc= {Sdata[2].imgsrc}
        title = {Sdata[2].title}
        sname = {Sdata[2].sname}
        link = {Sdata[2].link}

       />

    </div>
  )
}

export default Sdata;
