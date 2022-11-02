import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ActiveAdsCard from "../../../components/ActiveAdsCard";
import "./profilePageContent.scss";
import { moveAdToActive, moveAdToInactive } from "../../../store/activeUser";
import { removeAdFromAdded, addNewAd } from "../../../store/addedAds";

export default function ProfilePage() {

    const activeUser = useSelector(state => state.activeUser)
    let navigate = useNavigate() 
    let dispatch = useDispatch()   

    function deactivateAd(item) {
        dispatch(moveAdToInactive(item.id));
        dispatch(removeAdFromAdded(item));
    }
    function activateAd(item) {
        dispatch(moveAdToActive(item.id));
        dispatch(addNewAd(item));
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
                { activeUser.active.length > 0 ?
                activeUser.active.map((item) =>
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
                        key={item.id}
                        deactivationAd = {() => {
                            deactivateAd(item)
                        }}
                        activationAd = {() => {
                            activateAd(item)
                        }}
                        isThereActiveU={activeUser.email}
                        activeUser={activeUser}
                        id={item.id}
                    />
                ):
                <div>Нямате активни обяви.</div>
            }
            </div>
            <div className="lineUnderButtonsOfProfilPage"></div>
        
        </div>
    )
}