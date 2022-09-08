import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(50);

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messageElements = state.messages.map (message =>  <Message key={message.id} text={message.message}/>)
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                { dialogElements }
            </div>
            <div className={style.messages}>
                { messageElements }
            </div>
            <AddDialogsMessageRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddDialogsMessage = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Enter your message"} name={"newMessageBody"} component={Textarea}
                    validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
        
    </form>
    )
}

const AddDialogsMessageRedux = reduxForm({
    form: 'addDialogsMessage'
})(AddDialogsMessage)
export default Dialogs;