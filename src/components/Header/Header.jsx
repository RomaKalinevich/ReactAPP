import React from "react"
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={styles.header}>
        <img src="https://st2.depositphotos.com/4035913/6124/i/600/depositphotos_61243831-stock-photo-letter-s-logo.jpg" alt='desc'></img>

        <div className={styles.loginBlock}>
            { props.isAuth ?
                <div> {props.login ? props.login : "No Name"} - <button onClick={props.logout}>Logout</button> </div>
                : <NavLink to={'/login'}><button>Login</button></NavLink> }
        </div>
    </header>
}

export default Header