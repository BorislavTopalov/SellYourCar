import { useNavigate } from "react-router-dom";
import SmallCard from "../../../components/SmallCards";
import DefaultAds from "../../../data/defaultAds";
import "./smallCardsHomePage.scss";

export default function SmallCardsHomePage() {

    let newestAds = DefaultAds().defaultAds.slice(0, 6);
    let navigate = useNavigate();

    const goToChosenAd = () => {
        navigate("/show-the-chosenAd");
    }

    return (
        <span className="allSmallCardsContainer">
            {
                newestAds.map(
                    (item, index) => <SmallCard
                        src={item.image}
                        onClick={goToChosenAd}
                        make={item.make}
                        model={item.model}
                        price={item.price}
                        currency={item.currency}
                        millage={item.millage}
                        region={item.region}
                        key={index}
                        id={item.model}
                    />
                )
            }
        </span>

    )
}