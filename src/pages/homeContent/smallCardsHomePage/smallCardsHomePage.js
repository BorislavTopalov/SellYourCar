import SmallCard from "../../../components/SmallCards";
import DefaultAds from "../../../data/defaultAds";
import "./smallCardsHomePage.scss";

export default function SmallCardsHomePage() {

    let newestAds = DefaultAds().defaultCarsAndJeeps.slice(0, 6);

    return (
        <span>
            {
                newestAds.map(
                    (item, index) => <SmallCard
                        src={item.image}
                        make={item.make}
                        model={item.model}
                        price={item.price}
                        currency={item.currency}
                        millage={item.millage}
                        region={item.region}
                        key={index}
                        id={index}
                    />
                )
            }
        </span>

    )
}