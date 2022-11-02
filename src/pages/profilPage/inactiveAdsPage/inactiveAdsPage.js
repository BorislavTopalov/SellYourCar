import { Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./inactiveAdsPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { moveAdToActive, moveAdToInactive } from "../../../store/activeUser";
import ActiveAdsCard from "../../../components/ActiveAdsCard";
import { activate, deactivate} from "../../../store/addedAds";

export default function InactiveAdsPage() {

    const activeUser = useSelector(state => state.activeUser)
    let navigate = useNavigate() 
    let dispatch = useDispatch()  
 
 
    function deactivateAd(item) {
        dispatch(moveAdToInactive(item.id))
        dispatch(deactivate(item));
   
    }
    function activateAd(item) {
        console.log(item);
        dispatch(moveAdToActive(item.id));
        dispatch(activate(item));
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
                <p>Списък на неактивните обяви</p>
                <p></p>
            </div>
            <div className="buttonsGroupProfilePage">
                <NavLink to="/profile"><Button><strong>Активни обяви</strong></Button></NavLink>
                <NavLink to="/inactive-ads"><Button><strong>Неактивни обяви</strong></Button></NavLink>
            </div>
            <div>
                {activeUser.inactive.map((item) =>
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
                            deactivateAd(item);
                        }}
                        activationAd = {() => {
                            activateAd(item);
                        }}
                        isThereActiveU={activeUser.email}
                        activeUser={activeUser}
                        id={item.id}
                    />
                )}
            </div>
            <div className="lineUnderButtonsOfProfilPage"></div>
        </div>
    )
}