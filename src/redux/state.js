const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {

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
            ],
            newMessageBody: ""
        },
     
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you ?', likesCount: 12 },
                { id: 2, message: 'It is my first post', likesCount: 32 }
            ],
            newPostText: 'trying to put first post to state'
        }
    },
    
    getState(){
        return this._state;
    },

    
    _callSubscriber() {
        console.log('state changed');
    },


    subscribe(observer) {// ПАТЕРН НАБЛЮДАТЕЛЬ - OBSERVER
        this._callSubscriber = observer;
    },

    dispatch(action) {//наш state меняется через dispatch actions
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            
            this._state.profilePage.posts.push(newPost); // в коннец массива добавляет новый жлемент 
            this._state.profilePage.newPostText = '';//делаю пустую строку после добавления
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText; // обновляем данный введенные в текстбар
        this._callSubscriber(this._state);//перерисовывваем все дерево
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY) { //пользователь вводи сообщения 
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE) { //
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody ='';
            this._state.dialogsPage.messages.push({ id: 6, message: body}); // записываю в новые сообщения то что написал пользователь
            this._callSubscriber(this._state);
        }
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



export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body //этот body идет от этого условия (action.type === UPDATE_NEW_MESSAGE_BODY)
    }
}

export default store;
window.store = store;