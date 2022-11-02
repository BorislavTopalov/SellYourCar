import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginRegister.scss";
import RegisterForm from "../../components/RegisterForm";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../store/users";

const Register = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [checkPass, setCheckPass] = useState("");
    const navigate = useNavigate();

    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const regex = /^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{6,16}$/;
    function handleRegister(e) {
        e.preventDefault();
        const [email, password] = e.target;
        if (regex.test(password.value)) {
            if (!(users.some(user => user.email === email.value))) {
                dispatch(register({ email: email.value.trim(), password: password.value.trim(), favourites: [], active: [], inactive: [] }));
                setError2(false);
                navigate("/login");
                e.target.reset();
            } else {
                setError2(true);
                e.target.reset();
            }
        } else {
            setError3(true);
        }

    }

    function emailInput(e) {
        setEmail(e.target.value.trim());
        setError2(false);
    }
    function passInput(e) {
        setPass(e.target.value.trim());
        setError3(false);
    }
    function checkPassInput(e) {
        setCheckPass(e.target.value.trim());
        setError3(false);
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
        } else if (pass && checkPass) {
            if (pass === checkPass) {
                setError(false);
            } else {
                setError(true);
            }
        } else {
            setDisabled(true);
            setError(false);
        }
    }, [email, pass, checkPass])

    return (
        <div className="login-register">
            <div className="link-wrapper">
                <Link to="/login" className="loginButton"><strong>Вход</strong></Link>
            </div>
            <div className="form-wrapper">
                <RegisterForm onSubmit={handleRegister} onInputE={emailInput} onInputP={passInput} onInputC={checkPassInput}
                 onClick={() => setError3(false)} error={error} error2={error2} error3={error3} disabled={disabled} />
            </div>
        </div>
    );
}

export default Register;