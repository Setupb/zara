import React from 'react';

const MainItem = ({post}) => {
    console.log(post)
    return (
        <div className='card'>
            <div className="card__img"/>
            <h2 className="card__title">{post.title}</h2>
            <p className="card__text">
                {post.text}
            </p>
        </div>
    );
};

export default MainItem;
