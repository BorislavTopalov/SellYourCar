

const LoginForm = (props) => {
    return (
        <form className="login-form" onSubmit={props.onSubmit}>
            <label><strong>Вход:</strong></label>
            <input onChange={props.onInputE} type="text" required placeholder="Email" />
            <input onChange={props.onInputP} type="password" required placeholder="Парола" />
            <div className="errorContainer">
                {props.error && <p className="errors">Невалидни данни</p>}
            </div>
            <button type="submit" className={props.disabled ? "disabled" : null}>Вход</button>
        </form>
    );
}

export default LoginForm;