import React from 'react'
import about from './Images/home1.png';
const About = () => {
  return (

         <section className='about'>
                        <div className="image">
                               <img src={about} alt="" />      
                        </div>
                        <div className="about_container">
                                  <small>About us</small>
                                  <h1>Invest your gold Perfectly</h1>
                                  <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit Cum doloribus
                                        at tenetur illo corrupti quist fugiat consectetur, minus laborum rerum
                                        ipsum similique totam,minima vero exercitationem aliquid! Incidun.
                                  </p>
                                  <button className='btn'>Learn more</button>        
                       </div>               
         </section>
                    )
}

export default About