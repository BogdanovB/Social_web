//функция которая принимает state / action и возвращает измененный state
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };   
            state.posts.push(newPost); // в коннец массива добавляет новый жлемент 
            state.newPostText = '';//делаю пустую строку после добавления
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText; // обновляем данный введенные в текстбар
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}


export default profileReducer;