import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>


        <div className={s.posts}>
            <Post message='Hi how are you ?' likes='10' />
            <Post message="It is my first post" likes='15' />
        </div>
    </div>
}

export default MyPosts;