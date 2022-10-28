import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
import  {AiFillGithub} from 'react-icons/ai'
import   {AiFillTwitterCircle}from 'react-icons/ai'
import  {BsFacebook}from 'react-icons/bs'
import  {AiFillLinkedin}from 'react-icons/ai'


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
                                  <small>About</small>
                                  <small>Shop</small>
                                  <small>Product</small>
                                  <small>contact</small>
                       </div>
                       <div className="footer_box">
                       <h2>Quick Link</h2>
                                  <small>Home</small>
                                  <small>About</small>
                                  <small>Shop</small>
                                  <small>Product</small>
                                  <small>contact</small>
                       </div>
                      <div className="footer_box">
                            <h2>Newsletter</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur 
                              adipisicing elit. Quas, aperiam?</p>
                              <input type="email" placeholder='Enter email' /> 
                              <div className="icons">
                                 <AiFillGithub/>
                                 <AiFillTwitterCircle/>
                                 <BsFacebook/>
                                 <AiFillLinkedin/>
                                 </div>           
                       </div>
                       <div className="footer_box">
                                        
                       </div>
                    </div>
      </div>          

     )
}

export default Footer