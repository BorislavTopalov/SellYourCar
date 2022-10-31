import { Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ActiveAdsCard from "../../../components/ActiveAdsCard";
import "./profilePageContent.scss";

export default function ProfilePage() {

    let activeAds = [];
    let navigate = useNavigate()

    if (JSON.parse(localStorage.getItem('mobile-active-user')).email) {
        activeAds = JSON.parse(localStorage.getItem('mobile-active-user')).active.slice();
    } else {
        return false
    }


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
                <p>Списък и управление на публикуваните от вас обяви</p>
                <p></p>

            </div>
            <div className="buttonsGroupProfilePage">
                <NavLink to="/profile"><Button><strong>Активни обяви</strong></Button></NavLink>
                <NavLink to="/inactive-ads"><Button><strong>Неактивни обяви</strong></Button></NavLink>
            </div>
            <div>
                {activeAds.map((item) =>
                    <ActiveAdsCard
                        goToAd={() => {
                            navigate(`/all-results/${item.id}`);
                        }}
                        src={item.image[0]}
                        make={item.make}
                        model={item.model}
                        engine={item.engine}
                        price={item.price}
                        currency={item.currency}
                        date={item.date}
                        millage={item.millage}
                        color={item.color}
                        euro={item.euro}
                        moreInfo={item.moreInfo}
                        vehicleCategory={item.vehicleCategory}
                        safetyOptions={item.safetyOptions}
                        interiorOptions={item.interiorOptions}
                        region={item.region}
                        town={item.town}
                        // onClick={() => {
                        //     dispatch(addToFavourites(item));

                        // }}
                        // onClick2={() => {
                        //     dispatch(removeFromFavourites(item));

                        // }}
                        key={item.id}
                    // isLiked={isLiked(item)}
                    // isThereActiveU={activeUser.email}
                    />
                )}
            </div>
            <div className="lineUnderButtonsOfProfilPage"></div>
        </div>
    )
}