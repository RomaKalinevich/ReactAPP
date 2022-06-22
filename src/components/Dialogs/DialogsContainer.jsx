import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessagesBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessagesBodyCreator(body))
                    }
                    return <Dialogs updateNewMessagesBodyCreator={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogsPage={state}/>
                }
            }
        </StoreContext.Consumer>
    )

}
export default DialogsContainer;