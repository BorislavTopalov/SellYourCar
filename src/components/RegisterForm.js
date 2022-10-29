

const RegisterForm = (props) => {
    return (
        <>
            <form className="login-form" onSubmit={props.onSubmit}>
                <label><strong>Регистрация с Email и парола:</strong></label>
                <input onChange={props.onInputE} type="email" name="email" required placeholder="Email" />
                <input onChange={props.onInputP} type="password" name="pass" required placeholder="Парола" />
                <input onChange={props.onInputC} type="password" name="checkPass" required placeholder="Повтори паролата" />
                <div className="errorContainer">
                    {props.error && <p className="errors">Неправилно повторена парола</p>}
                    {props.error2 && <p className="errors">Такъв потребител вече съществува</p>}
                </div>
                <button type="submit" className={props.disabled ? "disabled" : null}>Регистрация с Email</button>
            </form>
            {props.error3 && <div className={props.error3 ? "visibleConfirm" : "nonVisibleConfirm"}>
                <div className="errorDiv">
                    <p className="errorsP">Паролата трябва да е между 6 и 16 знака и да съдържа поне една малка и една голяма буква, една цифра и един специален знак</p>
                    <button onClick={props.onClick} >Редактирай паролата</button>
                </div>
            </div>}
        </>
    );
}

export default RegisterForm;