

const LoginForm = (props) => {
    return (
        <form className="login-form" onSubmit={props.onSubmit}>
            <label><strong>Вход:</strong></label>
            <input onChange={props.onInputE} type="text" required placeholder="Email" />
            <input onChange={props.onInputP} type="password" required placeholder="Парола" />
            {props.error &&  <p className="errors">Невалидни данни</p>}
            <button type="submit" className={props.disabled ? "disabled" : null}>Вход</button>
        </form>
    );
}

export default LoginForm;