import React from 'react'
import news from './Images/home1.png';
const News = () => {
  return (
     <div className="news">
                    <div className="container">
                    <div className="news_content">
                                      
                    <h2>Subscribe Our newsletter</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum aspernatur
                         eaque vero maiores explicabo consequatur porro accusantium, suscipit, ullam, blanditiis nisi</p>                 
                       <input type="email" placeholder='Email' />
                    </div>
                    <div className="image">
                                        <img src={news} alt="" />
                    </div>
                    </div>
     </div>

                    )
}

export default News