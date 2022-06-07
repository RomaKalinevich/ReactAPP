import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messages.map (message =>  <Message text={message.message}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                { dialogElements }
            </div>
            <div className={style.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;