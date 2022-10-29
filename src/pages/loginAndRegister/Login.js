import { Link, useNavigate } from "react-router-dom";
import "./LoginRegister.scss";
import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/activeUser"

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    function handleLogin(e) {
        e.preventDefault();
        const [email, password] = e.target;

        if (users.some((user) => user.email === email.value.trim() && user.password === password.value.trim())) {
            dispatch(login((users.find((user) => user.email === email.value.trim() && user.password === password.value.trim()))));
            setError(false);
            navigate("/home");

            e.target.reset();
        } else {
            setError(true);
            e.target.reset();
        }
    }

    function emailInput(e) {
        setEmail(e.target.value.trim());
    }
    function passInput(e) {
        setPass(e.target.value.trim());
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
                <Link to="/register" className="registerButton"><strong >Регистрация</strong></Link>
            </div>
            <div className="form-wrapper">
                <LoginForm onSubmit={handleLogin} onInputE={emailInput} onInputP={passInput} error={error} disabled={disabled} />
            </div>
        </div>
    );
}

export default Login;