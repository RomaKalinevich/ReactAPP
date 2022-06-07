import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messages.map (message =>  <Message text={message.message}/>)
    let newPostElement = React.createRef();
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                { dialogElements }
            </div>
            <div className={style.messages}>
                { messageElements }
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;