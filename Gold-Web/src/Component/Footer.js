import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
const Footer = () => {
  return (
      <div className="footer">
                    <div className="footer_container">
                       <div className="footer_box">
                              <img src={logo} alt="" />
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, porro
                                 explicabo temporibus et quo libero illo magni aspernatur nisi magnam nobis 
                                 labore possimus quasi animi?</p>
                       </div>
                       <div className="footer_box">
                              <h2>Useful Link</h2>
                                  <small>Home</small>
                       </div>
                       <div className="footer_box">
                                        
                       </div>
                      <div className="footer_box">
                                        
                       </div>
                       <div className="footer_box">
                                        
                       </div>
                    </div>
      </div>          

     )
}

export default Footer