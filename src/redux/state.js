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
            ]
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


    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            
            this._state.profilePage.posts.push(newPost); // в коннец массива добавляет новый жлемент 
            this._state.profilePage.newPostText = '';//делаю пустую строку после добавления
            this._callSubscriber(this._state);
        }else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText; // обновляем данный введенные в текстбар
        this._callSubscriber(this._state);//перерисовывваем все дерево
        }
    }
  
}

export default store;
window.store = store;