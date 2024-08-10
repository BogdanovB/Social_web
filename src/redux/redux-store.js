import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer copy";


let reducers = combineReducers({ //это обьект у которого есть 3 свойства. 
    profilePage: profileReducer,  //свойство - значение 
    dialogsPage: dialogsReducer,  //свойство - значение 
    sidebar: sidebarReducer   //свойство - значение 
});

let store = createStore(reducers);


export default store;