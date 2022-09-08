const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"},
        {id: 4, message: "Hello world Mother Fucker"}],
    dialogs: [{id: 1, name: "Roma"}, {id: 2, name: "Marta"},
        {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}]
}

export const dialogsReducer =  (state = initialState, action) => {
    switch (action.type) {
        case  SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
        default : {
            return state;
        }
    }
}

export default dialogsReducer;
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });