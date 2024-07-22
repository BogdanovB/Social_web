import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer copy";


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
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },


    _callSubscriber() {
        console.log('state changed');
    },


    subscribe(observer) {// ПАТЕРН НАБЛЮДАТЕЛЬ - OBSERVER
        this._callSubscriber = observer;
    },

    dispatch(action) {//наш state меняется через dispatch actions. action это обьект у которого как минимум есть свойство TYPE

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;