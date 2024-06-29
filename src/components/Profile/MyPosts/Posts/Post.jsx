import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrM9f-dQBaQyE1AXWuCpf9oi0WJCBdXmzOf9OglmZmUw&s" alt="ava" />


        {props.message}

        <div>
            <span>likes: {props.likesCount} </span> 
        </div>

    </div>
}

export default Post;