import React from 'react'
import pro_1 from './Images/pro-1.png';
import pro_2 from './Images/pro-2.png';
import pro_3 from './Images/pro3.png';
import pro_4 from './Images/pro-4.png';

const Shop = () => {
  return (
   <section className="shop">
            <h1 className='heading'>Our Shop</h1>
            <div className="container">
                   <div className="box">
                        <img src={pro_1} alt="" />
                        <h2>Gold Watch</h2>
                        <p>watch</p>
                        <button className='btn'>Buy Now</button>
                    </div>
                    <div className="box">
                        <img src={pro_2} alt="" />
                        <h2>Gold Watch</h2>
                        <p>watch</p>
                        <button className='btn'>Buy Now</button>
                    </div>
                    <div className="box">
                        <img src={pro_3} alt="" />
                        <h2>Gold Watch</h2>
                        <p>watch</p>
                        <button className='btn'>Buy Now</button>
                    </div>
                    <div className="box">
                        <img src={pro_4} alt="" />
                        <h2>Gold Watch</h2>
                        <p>watch</p>
                        <button className='btn'>Buy Now</button>
                    </div>     
            </div>         
   </section>
                    )
}

export default Shop