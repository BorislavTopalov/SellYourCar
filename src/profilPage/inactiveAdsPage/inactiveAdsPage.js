import { Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./inactiveAdsPage.scss";

export default function InactiveAdsPage() {

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
                <p>Списък на неактивните обяви</p>
                <p></p>
            </div>
            <div className="buttonsGroupProfilePage">
                <NavLink to="/profile"><Button><strong>Активни обяви</strong></Button></NavLink>
                <NavLink to="/inactive-ads"><Button><strong>Неактивни обяви</strong></Button></NavLink>
            </div>

            <div className="lineUnderButtonsOfProfilPage"></div>
        </div>
    )
}