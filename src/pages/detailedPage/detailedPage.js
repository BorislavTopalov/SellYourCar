import DetailedCard from "../../components/DetailedCard";
import "./detailedPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultAds from "../../data/defaultAds";
import { addToFavourites, removeFromFavourites } from "../../redux/activeUser";
import { changeFavourites } from "../../redux/users";
import { useEffect } from "react";

export default function DetailedPage() {

    let { id } = useParams();
    const users = useSelector(state => state.users)
    const activeUser = useSelector(state => state.activeUser);
    const favArr = activeUser.favourites;
    const dispatch = useDispatch();

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

        <div>
            {
                DefaultAds().defaultAds.filter(list => list.id === Number(id))
                    .map(item =>
                        <DetailedCard
                            autoData={item.autoData}
                            src={item.image}
                            make={item.make}
                            model={item.model}
                            price={item.price}
                            date={item.date}
                            engine={item.engine}
                            power={item.power}
                            euro={item.euro}
                            transmission={item.transmission}
                            vehicleCategory={item.vehicleCategory}
                            millage={item.millage}
                            color={item.color}
                            extras={item.extras.map((extra, i) => <li key={i}>{extra}</li>)}
                            moreInfo={item.moreInfo}
                            contacts={item.contacts}
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