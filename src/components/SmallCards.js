export default function SmallCard (props) {

    return (

        <div className="smallCardsContainer">
            <img className="imgSmallCard" onClick={props.onClick} src={props.src} alt="" />
            <div className="smallCardInfo">
                <div className="makeAndModelSmallCard">
                    <span className="makeSmallCard"><strong>{props.make}</strong></span>
                    <span><strong>{props.model}</strong></span>
                </div>
                <div className="priceSmallCard"><strong>{props.price} {props.currency}</strong></div>
                <div className="millageSmallCard">{props.millage} км.</div>
                <div className="regionSmallCard">{props.region}</div>
            </div>
        </div>
    )
}