import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

//создаю логику где то что мы пишем отправляется в state а потом перерисовывается.
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

//why addPost = addpost ? because function addPost return addpost from myPosts.jsx
    return (
        <MyPosts updateNewPostText= {onPostChange} 
                 addPost = {addPost} 
                 posts = {state.profilePage.posts} 
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;