import React, { useRef, useState } from "react";
import Navbar from './Navbar'
import Home_1 from './Images/home1.png';
import Home_2 from './Images/home2.png';
import Home_3 from './Images/home3.png';
import Home_4 from './Images/home5.png';
import Home_5 from './Images/home6.png';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Shop from "./Shop";
import About from "./About";
const Home = () => {
  return (
         <>
         <Navbar/>
            <div className="home">
         <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
               <div className="content">
                   <h1>Grow your<span> Gold</span> in Right Way</h1>
                   <p>Gold Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, inventore.
                     Eius iste ullam qui, ea odit saepe veritatis earum sed officia </p>
                   <button className='btn'>Learn More</button>
               </div>
               <div className="image">
                <img src={Home_1} alt="" />
               </div>
             
               </SwiperSlide>
        <SwiperSlide>
        <div className="content">
                   <h1>Grow your<span> Gold</span> in Right Way</h1>
                   <p>Gold Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, inventore.
                     Eius iste ullam qui, ea odit saepe veritatis earum sed officia </p>
                   <button className='btn'>Learn More</button>
               </div>
               <div className="image">
                <img src={Home_2} alt="" />
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
                   <h1>Grow your<span> Gold</span> in Right Way</h1>
                   <p>Gold Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, inventore.
                     Eius iste ullam qui, ea odit saepe veritatis earum sed officia </p>
                   <button className='btn'>Learn More</button>
               </div>
               <div className="image">
                <img src={Home_3} alt="" />
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
                   <h1>Grow your<span> Gold</span> in Right Way</h1>
                   <p>Gold Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, inventore.
                     Eius iste ullam qui, ea odit saepe veritatis earum sed officia </p>
                   <button className='btn'>Learn More</button>
               </div>
               <div className="image">
                <img src={Home_4} alt="" />
               </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
                   <h1>Grow your<span> Gold</span> in Right Way</h1>
                   <p>Gold Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, inventore.
                     Eius iste ullam qui, ea odit saepe veritatis earum sed officia </p>
                   <button className='btn'>Learn More</button>
               </div>
               <div className="image">
                <img src={Home_5} alt="" />
               </div>
        </SwiperSlide>
        
      </Swiper>
       
      </div>
        <Shop/>
        <About/>
         </>
                    )
}

export default Home