import styles from './FormControls.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import React from "react";


const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const {input} = props;
    return <FormControl {...props}><input {...input} {...props} /></FormControl>
}

export const createField = (placeholder, name, component, type = null, validate = null) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} type={type}/>
    </div>
)
