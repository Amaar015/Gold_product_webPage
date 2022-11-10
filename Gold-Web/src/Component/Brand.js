import React from 'react'
import image from './Images/pro-4.png';
import {BiRightArrowAlt} from 'react-icons/bi';
const Brand = () => {
  return (
  <div className="brand" data-aos="fade-right">
                <h1 className='heading'>Brand Gold</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore qui, 
                    accusamus sed itaque iste et voluptas eum perferendis totam assumenda!</p>
  <div className="brand_container">
            <div className="box_brand">
                    <h2>Fine Gold</h2>
                    <small>Ipsum dolor sit</small>
                    <div className="box_p">
                    <p><BiRightArrowAlt className='icon'/> Lorem ipsum dolor sit. </p>
                    <p><BiRightArrowAlt className='icon'/>Lorem ipsum dolor sit. </p>
                    <p><BiRightArrowAlt className='icon'/>Lorem ipsum dolor sit. </p>
                    <p><BiRightArrowAlt className='icon'/>Lorem ipsum dolor sit. </p>
                    </div>
                    <button className='btn'>Shop Now</button>
            </div>
            <div className="box_brand brands">
                    <h3>1 Tola</h3>
                    <strong>Total Cost</strong>
                    <h2>$ 500</h2>
            </div>
            <div className="box_brand">
                         <div className="image">
                             <img src={image} alt="" />
                         </div>
            </div>
  </div>
  
  </div>
                    )
}

export default Brand