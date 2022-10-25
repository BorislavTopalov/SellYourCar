import { Link } from "react-router-dom";
import activeUser, { activeUserSlice } from "../../../redux/activeUser";
import ShowAllAds from "../../allResultsPage/allResultsContent";
import "./favoriteAdsPage.scss";
import ShowFavAds from "./showFavAds";

export default function FavoriteAdsPage () {

    return (

        <div>
             <div className="profilePageTop">
                <Link to="/profile"><p><strong className="myAdsProfile">Моите обяви</strong></p></Link>
                |
                <Link to="/favorite-ads"><p><strong className="favAdsProfile">Бележник обяви</strong></p></Link>
                |
                <Link to="/settings"><p><strong className="settingsProfile">Настройки</strong></p></Link>
            </div>
            <p className="favoriteAdsText">Добавете обяви към които имате интерес във Вашия бележник</p>
            <div>
                <p className="favoriteAdsText"><strong>Управление на обявите във Вашия бележник</strong></p>
                <div className="underLineFavoritePage"></div>
            </div>
            <div>{<ShowFavAds/>}</div>
            <div className="underLineFavoritePage"></div>

        </div>
    )
}