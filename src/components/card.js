export default function Card(props) {

    return (

        <span className="cardContainer">
            <div className="imgCardHomePage">
                <img src={props.src} alt="" className="cardImg" />
                <div className="buttonsCardHomePage">
                    <span><button className="btnCardAddToFav" onClick={props.onClick}>Добави в бележника</button></span>
                    <span><button className="btnCardGoToMoreInfo" onClick={props.moreDetails}>Повече детайли</button></span>
                </div>
            </div>
            <div className="infoCardHomePage">
                <div className="mainInfoCardHomePage">
                    <div className="makeAndModelCardHomePage">
                        <span className="cardMake"><strong>{props.make}</strong></span>
                        <span className="cardModel"><strong>{props.model}</strong></span>
                    </div>
                    <span className="cardEngine">{props.engine}</span>
                    <span><strong>{props.price} {props.currency}</strong></span>
                </div>

                <div className="moreInfoCardHomePage">
                    Дата на произв. - {props.date}г., Пробег - {props.millage}км., Цвят - {props.color},
                    {props.euro} ! {props.moreInfo}.
                    Осебености : {props.vehicleCategory}, {props.safetyOptions}, {props.interiorOptions}.
                    <div className="regionCardHomePage">
                        Регион : {props.region}, {props.town}.
                    </div>

                </div>
            </div>


        </span>
    )
}