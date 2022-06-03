import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/1">Roma</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Marta</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Sasha</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Vika</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>Hello</div>
                <div className={style.message}>Hello World</div>
                <div className={style.message}>Hello World Mother Fucker</div>
            </div>
        </div>
    )
}

export default Dialogs;