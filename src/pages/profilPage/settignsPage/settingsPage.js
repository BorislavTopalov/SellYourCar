import "./settingsPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { changeEmailA, changePassword, deleteAcc } from "../../../store/activeUser";
import { changeEmailU, changePass, deleteUser } from "../../../store/users";
import ConfirmBox from "../../../components/ConfirmBox";

export default function SettingsPage() {

    const users = useSelector(state => state.users);
    const activeUser = useSelector(state => state.activeUser);
    const dispatch = useDispatch();

    const [email, setEmail] = useState(" ");
    const [pass, setPass] = useState("");
    const [checkPass, setCheckPass] = useState("");
    const [disabledE, setDisabledE] = useState(true);
    const [disabledP, setDisabledP] = useState(true);
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const navigate = useNavigate();
    const [confirmation, setConfirmation] = useState(false);

    function emailInput(e) {
        setEmail(e.target.value.trim());
        setError(false);
    }
    function passInput(e) {
        setPass(e.target.value.trim());
        setError2(false);
    }
    function checkPassInput(e) {
        setCheckPass(e.target.value.trim());
    }

    const regex = /^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{6,16}$/;
    function handleChangePass() {
        if (activeUser.password !== pass) {
            if (regex.test(pass)) {
                dispatch(changePassword({ password: pass }));
                dispatch(changePass({
                    index: users.findIndex(user => user.email === activeUser.email),
                    password: pass,
                }))
                setEmail(" ");
                setPass("");
                setCheckPass("");
                navigate("/profile");
            } else {
                setError4(true)
            }

        } else {
            setError2(true);
        }
    }
    function handleChangeEmail(e) {
        e.preventDefault();
        if (!users.some(user => user.email === email)) {
            dispatch(changeEmailA({ email: email }));
            dispatch(changeEmailU({
                index: users.findIndex(user => user.password === activeUser.password),
                email: email,
            }))
            setEmail(" ");
            setPass("");
            setCheckPass("");
            navigate("/profile");
        } else {
            setError(true);
        }
    }
    function deleteAcount() {
        dispatch(deleteAcc());
        dispatch(deleteUser({ index: users.findIndex(user => user.email === activeUser.email) }))
        navigate("/login");
    }

    const handleClose = () => {
        setConfirmation(false);
    }

    useEffect(() => {
        if (email.trim()) {
            setDisabledE(false);
        } else {
            setDisabledE(true);
        }
    }, [email])
    useEffect(() => {
        if (pass && checkPass) {
            if (pass === checkPass) {
                setDisabledP(false);
                setError3(false);
            } else {
                setDisabledP(true);
                setError3(true);
            }
        } else {
            setDisabledP(true);
            setError3(false);
        }
    }, [pass, checkPass])

    return (

        <div className="profilePageContent">
            <div className="profilePageTop">
                <Link to="/profile"><p><strong className="myAdsProfile">Моите обяви</strong></p></Link>
                |
                <Link to="/favorite-ads"><p><strong className="favAdsProfile">Бележник обяви</strong></p></Link>
                |
                <Link to="/settings"><p><strong className="settingsProfile">Настройки</strong></p></Link>
            </div>
            <div>
                <p><strong>Потребителски настройки</strong></p>
                <div className="underLineUserSettings"></div>
                <form onSubmit={handleChangeEmail} className="inputEmailChange">
                    <label htmlFor="email"> Промяна на E-mail</label>
                    <input value={email} onChange={emailInput} type="email" name="email" />
                    <div className="errorContainer">
                        {error && <p className="errors">Вече същеструва потребител с този E-mail</p>}
                    </div>
                    <button type="submit" className={disabledE ? "disabled" : null} >Смени E-mail</button>
                </form>
            </div>
            <div>
                <p><strong>Смяна на парола</strong></p>
                <div className="underLineUserSettings"></div>
                <div className="inputsPassChange">
                    <label htmlFor="newPass">Нова парола</label>
                    <input value={pass} onChange={passInput} type="password" name="newPass" />
                    <label htmlFor="newPass">Повтори парола</label>
                    <input value={checkPass} onChange={checkPassInput} type="password" name="newPass" />
                    <div className="errorContainer">
                        {error3 && <p className="errors">Паролите не съвпадат</p>}
                        {error2 && <p className="errors">Новата парола трябва да е различна от старата</p>}
                    </div>
                    <button className={disabledP ? "disabled" : null} onClick={handleChangePass}>Смени паролата</button>
                </div>

            </div>
            <div>
                <div className="underLineUserSettings"></div>
                <button onClick={() => setConfirmation(!confirmation)} className="deleteProfilBtn"><strong>Изтриване на профил</strong></button>
            </div>
            <ConfirmBox
                className={confirmation ? "visibleConfirm" : "nonVisibleConfirm"}
                textConfirm={"Сигурен ли си, че искаш да изтриеш профила си?"}
                handleDelete={deleteAcount}
                handleClose={handleClose}
            />
            {error4 && <div className={error4 ? "visibleConfirm" : "nonVisibleConfirm"}>
                <div className="errorDiv">
                    <p className="errorsP">Паролата трябва да е между 6 и 16 знака и да съдържа поне една малка и една голяма буква, една цифра и един специален знак</p>
                    <button onClick={() => setError4(false)} >Редактирай паролата</button>
                </div>
            </div>}
        </div>
    )
}