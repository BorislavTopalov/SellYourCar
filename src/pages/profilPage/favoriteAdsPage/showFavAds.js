import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/card";
import { addToFavourites, removeFromFavourites } from "../../../redux/activeUser";
import { changeFavourites } from "../../../redux/users";

export default function ShowFavAds() {

    const activeUser = useSelector(state => state.activeUser);
    const users = useSelector(state => state.users)
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
    const goToAd = () => {
        navigate("/show-the-chosenAd");
    }

    return (
        <div>
            {
                favArr.map(item => <Card
                    goToAd={goToAd}
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

                )
            }
        </div>

    )
}