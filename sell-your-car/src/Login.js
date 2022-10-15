import { Link } from "react-router-dom";
import "./LoginRegister.css";
import { useEffect, useState } from "react";

const Login = () => {
    const [style, setStyle] = useState(null);

    let hash = window.location.pathname;
    useEffect(() => {
        if (hash === "/login") {
            setStyle(true);
        } else {
            setStyle(false);
        }
    }, [])

    return (
        <div className="login-register">
            <div className="link-wrapper">
                <Link to="/login" className={style ? "blacked" : null}><strong>Вход</strong></Link>
                <Link to="/register"><strong>Регистрация</strong></Link>
            </div>
            <div className="form-wrapper">
                <form className="login-form">
                    <label><strong>Вход:</strong></label>
                    <input type="text" required placeholder="Email" />
                    <input type="password" required placeholder="Парола" />
                    <button type="submit">Вход</button>
                </form>
            </div>
        </div>
    );
}

export default Login;