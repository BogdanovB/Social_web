import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let postsElements = props.posts.map ( (p) => {return ( <Post message={p.message} likesCount={p.likesCount} /> )} )
    //на базе постов мапим. образуем компоненту POST и передаем каждое сообщение внутри как атрибуты. то есть как ПРОПСЫ
    

    let newPostElement = React.createRef();//создай ссылку. он создает ссылку жтот метод 

    let addPost = () => {
        //props.dispatch();
        props.dispatch(addPostActionCreator());
    }

//создаю логику где то что мы пишем отправляется в state а потом перерисовывается.
    let onPostChange = () => {
        let text = newPostElement.current.value;
       // props.dispatch(text);
      // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
       let action = updateNewPostTextActionCreator(text);
       props.dispatch(action);
    }


    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                  <textarea onChange={onPostChange} 
                            ref={newPostElement}
                            value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ (addPost) }>Add post</button>
            </div>
        </div>


        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;