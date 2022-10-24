import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/card";
import DefaultAds from "../../../data/defaultAds";
import { addToFavourites } from "../../../redux/activeUser";
import "./homeContentDown.scss";

export default function ShowtheNewestAds () {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addToFav = () => {
        dispatch(addToFavourites(<Card/>))
    }

    const moreDetails = () => {
        navigate("/show-the-chosenAd");
    }

    return (
        <span>
             {DefaultAds().defaultCarsAndJeeps.map((item,i) => {
                return <div>
                    <Card 
                    key={i}
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
                    onClick={addToFav}
                    moreDetails={moreDetails}
                    />
                    </div>
             })}
        </span>
       
    )
}