import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [{id: 1, name: "Roma"}, {id: 2, name: "Marta"}, {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}];
    let messages = [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"}, {id: 4, message: "Hello world Mother Fucker"}];
    let dialogElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = messages.map (message =>  <Message text={message.message}/>)
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