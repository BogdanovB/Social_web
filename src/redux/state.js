import { renderEntireTree } from "../render";

let state = {

    dialogsPage: {

        dialogs: [
            { id: 1, name: 'Bogdan' },
            { id: 2, name: 'Veronika' },
            { id: 3, name: 'Viktor' },
            { id: 4, name: 'Alex' }
        ],
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' }
        ]
    },
 
    profilePage: {
        posts: [
            { id: 1, message: 'Hi how are you ?', likesCount: 12 },
            { id: 2, message: 'It is my first post', likesCount: 32 }
        ],
        newPostText: 'trying to put first post to state'
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    
    
    state.profilePage.posts.push(newPost); // в коннец массива добавляет новый жлемент 
    state.profilePage.newPostText = '';//делаю пустую строку после добавления
    renderEntireTree(state);
}



export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText; // обновляем данный введенные в текстбар
    renderEntireTree(state);//перерисовывваем все дерево
}

export default state;