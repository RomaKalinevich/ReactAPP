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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={"Roma"} id={1}/>
                <DialogItem name={"Marta"} id={2}/>
                <DialogItem name={"Sasha"} id={3}/>
                <DialogItem name={"Vica"} id={4}/>
            </div>
            <div className={style.messages}>
                <Message text={"Hi"}/>
                <Message text={"Hello"}/>
                <Message text={"Hello world"}/>
                <Message text={"Hello world Mother Fucker"}/>
            </div>
        </div>
    )
}

export default Dialogs;