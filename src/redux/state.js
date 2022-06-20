import {type} from "@testing-library/user-event/dist/type";

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
                {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}]
        }
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

    _addPost() {
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action){
         switch (action){
             case 'ADD-POST':
                 this._addPost();
                 break;
             case 'UPDATE-NEW-POST-TEXT':
                 this._updateNewPostText(action.newText);
                 break;
             default :
             {}
         }
    }
}

export default store;
window.state = store;