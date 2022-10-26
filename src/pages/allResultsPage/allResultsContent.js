import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Card from "../../components/card";
import { addToFavourites, removeFromFavourites } from "../../redux/activeUser";
import "./allResultsContent.scss";
import { changeFavourites } from "../../redux/users";
import { useEffect } from "react";

export default function ShowAllAds() {

    const filterredAds = useSelector(state => state.filterredAds);
    const users = useSelector(state => state.users);
    const activeUser = useSelector(state => state.activeUser);
    const favArr = activeUser.favourites;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        dispatch(changeFavourites({
            index: users.findIndex(user => user.email === activeUser.email),
            favourites: activeUser.favourites,
        }))
    }, [activeUser, dispatch, users])

    function isLiked(e) {
        if (favArr.find(ad => ad.id === e.id)) {
            return true
        }
        return false
    }



    return (
        <span>
             <div className="linksAllResults">
                <Link to="/detail-searching" className="newSearch">Ново търсене</Link>
                <Link to="/home" className="backToHome">Начало</Link>
            </div>
            {filterredAds.filterredAds.map(item =>
                <Card
                    goToAd={() => {
                        navigate(`/all-results/${item.id}`);
                    }}
                    src={item.image}
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
                    onClick={() => {
                        dispatch(addToFavourites(item));

                    }}
                    onClick2={() => {
                        dispatch(removeFromFavourites(item));

                    }}
                    key={item.id}
                    isLiked={isLiked(item)}
                    isThereActiveU={activeUser.email}
                />

            )}
        </span>

    )
}