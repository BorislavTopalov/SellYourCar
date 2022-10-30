import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Card from "../../components/Card";
import { addToFavourites, removeFromFavourites } from "../../store/activeUser";
import "./allResultsContent.scss";
import { changeFavourites } from "../../store/users";
import { useEffect, useState } from "react";
import PaginationComp from "../../components/Pagination";

export default function ShowAllAds({ data }) {

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
        if (favArr) {
            if (favArr.find(ad => ad.id === e.id)) {
                return true;
            }
            return false;
        }
        return false;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filterredAds.filterredAds.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filterredAds.filterredAds.length / recordsPerPage);

    return (
        <span>
            <div className="linksAllResults">
                <Link to="/detail-searching" className="newSearch">Ново търсене</Link>
                <Link to="/home" className="backToHome">Начало</Link>
            </div>
            {currentRecords.length > 0 ?
                currentRecords.map(item =>
                    <Card
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
                        onClick={() => {
                            dispatch(addToFavourites(item));

                        }}
                        onClick2={() => {
                            dispatch(removeFromFavourites(item));

                        }}
                        key={item.id}
                        isLiked={isLiked(item)}
                        isThereActiveU={activeUser.email}
                    />)
                :
                <div className="noAds">Няма обяви отговарящи на избраните филтри</div>
            }
            <PaginationComp
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </span>

    )
}