import { Link } from "react-router-dom";
import "./LoginRegister.css";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(true);


    const [style, setStyle] = useState(null);
    let hash = window.location.pathname;
    useEffect(() => {
        if (hash === "/login") {
            setStyle(true);
        } else {
            setStyle(false);
        }
    }, [hash])


    function handleLogin(e) {
        e.preventDefault();
        const [email, password] = e.target;

        if(props.users.some((user) => user.email === email.value && user.password === password.value)){
            props.setActiveUser(props.users.find((user) => user.email === email.value && user.password === password.value));
            setError(false);
            window.location.pathname = "/home";
            e.target.reset();
        } else {
            setError(true);
            e.target.reset();
        }
    }

    function emailInput(e) {
        setEmail(e.target.value);
    }
    function passInput(e) {
        setPass(e.target.value);
    }
    useEffect(() => {
        if (email && pass) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, pass])


    return (
        <div className="login-register">
            <div className="link-wrapper">
                <Link to="/login" className={style ? "blacked" : null}><strong>Вход</strong></Link>
                <Link to="/register"><strong>Регистрация</strong></Link>
            </div>
            <div className="form-wrapper">
                <LoginForm onSubmit={handleLogin} onInputE={emailInput} onInputP={passInput} error={error} disabled={disabled}/>
            </div>
        </div>
    );
}

export default Login;