import {type} from "@testing-library/user-event/dist/type";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, text: "Hi, how are you", likesCount: 12},
                {id: 2, text: "It is my first post", likesCount: 2}],
            newPostText: 'My first react project'
        },
        dialogsPage: {
            messages: [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"},
                {id: 4, message: "Hello world Mother Fucker"}],
            dialogs: [{id: 1, name: "Roma"}, {id: 2, name: "Marta"},
                {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}],
            newMessagesBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}

export default store;
window.state = store;