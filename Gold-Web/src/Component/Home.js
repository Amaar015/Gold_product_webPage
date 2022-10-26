import React from 'react'
import Navbar from './Navbar'
import Home_2 from './Images/home6.png'
const Home = () => {
  return (
         <>
         <Navbar/>
         <div className="home">
               <div className="content">
                   <h1>Grow your<span> Gold</span> in Right Way</h1>
                   <p>Gold Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, inventore.
                     Eius iste ullam qui, ea odit saepe veritatis earum sed officia </p>
                   <button className='btn'>Learn More</button>
               </div>
               <div className="image">
                <img src={Home_2} alt="" />
               </div>
          </div>
         </>
                    )
}

export default Home