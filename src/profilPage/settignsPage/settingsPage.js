import "./settingsPage.scss";
import { Link } from "react-router-dom";

export default function SettingsPage() {

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
                <div className="inputEmailChange">
                    <label htmlFor="email"> Промяна на E-mail</label>
                    <input type="text" name="email" />
                </div>
            </div>
            <div>
                <p><strong>Смяна на парола</strong></p>
                <div className="underLineUserSettings"></div>
                <div className="inputsPassChange">
                    <label htmlFor="newPass">Нова парола</label>
                    <input type="text" name="newPass" />
                    <label htmlFor="newPass">Повтори парола</label>
                    <input type="text" name="newPass" />
                </div>

            </div>
            <div>
                <div className="underLineUserSettings"></div>
                <Link to="/home"><button className="deleteProfilBtn"><strong>Изтриване на профил</strong></button></Link>
            </div>
        </div>
    )
}