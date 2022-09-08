import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {createField, Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from '../common/FormControls/FormControls.module.css'


const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField("Email", "email", Input, null, [required])}
        {createField("Password", "password", Input, "password", required)}
        {createField("", "rememberMe", Input, "checkbox", null)}
        {error &&
            <div className={styles.formSummaryError}>
                {error}
            </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }
    if (isAuth) {
        return <Navigate to={"profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);