const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"},
        {id: 4, message: "Hello world Mother Fucker"}],
    dialogs: [{id: 1, name: "Roma"}, {id: 2, name: "Marta"},
        {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}],
    newMessagesBody: ""
}

export const dialogsReducer =  (state = initialState, action) => {
    switch (action.type) {
        case  UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.body;
            break;
        case  SEND_MESSAGE:
            let body = state.newMessagesBody;
            state.newMessagesBody = '';
            state.messages.push({id: 6, message: body});
            break;
        default : {
        }
    }
    return state;
}

export default dialogsReducer;
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessagesBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});