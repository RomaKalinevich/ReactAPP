import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={style.dialog + " " + style.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            <div className={style.message}>{props.text}</div>
        </div>
    )
}


const Dialogs = (props) => {
    let dialogsData = [{id: 1, name: "Roma"}, {id: 2, name: "Marta"}, {id: 3, name: "Sasha"}, {id: 4, name: "Vica"}]
    let messagesData = [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"}, {id: 4, message: "Hello world Mother Fucker"}]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={style.messages}>
                <Message text={messagesData[0].message}/>
                <Message text={messagesData[1].message}/>
                <Message text={messagesData[2].message}/>
                <Message text={messagesData[3].message}/>
            </div>
        </div>
    )
}

export default Dialogs;