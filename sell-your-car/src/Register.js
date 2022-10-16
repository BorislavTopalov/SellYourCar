import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginRegister.css";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
    

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [checkPass, setCheckPass] = useState("");

    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [style, setStyle] = useState(null);

    let hash = window.location.pathname;
    useEffect(() => {
        if (hash === "/register") {
            setStyle(true);
        } else {
            setStyle(false);
        }
    }, [hash])
    
    


    function handleRegister(e) {
        console.log(e);
        e.preventDefault();
        const [email, password] = e.target;

        if(!(props.users.some(user => user.email === email.value))){
            props.setUsers((prev) => [...prev, {email: email.value, password: password.value}]);
            setError2(false);
            window.location.pathname = "/login";
            e.target.reset();
        } else {
            setError2(true);
        }
    }


    function emailInput(e) {
        setEmail(e.target.value);
        setError2(false);
    }
    function passInput(e) {
        setPass(e.target.value);
    }
    function checkPassInput(e) {
        setCheckPass(e.target.value);
    }

    useEffect(() => {
        if (email && pass && checkPass) {
            if (pass === checkPass) {
                setDisabled(false);
                setError(false);
            } else {
                setDisabled(true);
                setError(true);
            }
        } else {
            setDisabled(true);
        }
    }, [email, pass, checkPass])

    return (
        <div className="login-register">
            <div className="link-wrapper">
                <Link to="/login"><strong>Вход</strong></Link>
                <Link to="/register" className={style ? "blacked" : null}><strong>Регистрация</strong></Link>
            </div>
            <div className="form-wrapper">
                <RegisterForm onSubmit={handleRegister} onInputE={emailInput} onInputP={passInput} onInputC={checkPassInput} error={error} error2={error2} disabled={disabled} />
            </div>
        </div>
    );
}

export default Register;