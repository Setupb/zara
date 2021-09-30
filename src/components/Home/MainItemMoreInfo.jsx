import React from "react";

const MainItemMoreInfo=({posts})=>{
    return(
        <div className='more-card'>
        <div className="more-card__img">
            <img src={posts.foto} alt='more-foto'/>
        </div>
        <h2 className="more-card__title">{posts.title} {posts.discount}</h2>
        <p className="more-card__text">
            {posts.text}
        </p>
    </div>
    )
}
export default MainItemMoreInfo;