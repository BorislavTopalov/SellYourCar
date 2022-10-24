export default function SmallCard (props) {

    return (

        <div className="smallCardsContainer">
            <img className="imgSmallCard" src={props.src} alt="" />
            <div>
                <div className="makeAndModelSmallCard">
                    <span><strong>{props.make}</strong></span>
                    <span><strong>{props.model}</strong></span>
                </div>
                <div className="priceSmallCard"><strong>{props.price} {props.currency}</strong></div>
                <div className="millageSmallCard">{props.millage}</div>
                <div className="regionSmallCard">{props.region}</div>
            </div>
        </div>
    )
}