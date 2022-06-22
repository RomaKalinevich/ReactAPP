import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = state.messages.map (message =>  <Message text={message.message}/>)
    let newMessageBody = state.newMessagesBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body =  e.target.value;
        props.updateNewMessagesBodyCreator(body);
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                { dialogElements }
            </div>
            <div className={style.messages}>
                { messageElements }
                <div>
                    <textarea placeholder='Enter your message'
                              onChange={onNewMessageChange}
                              value={newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;