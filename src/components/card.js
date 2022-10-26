import { useParams } from "react-router-dom";

export default function Card(props) {

    
    return (

        <span className="cardContainer" >
            <div className="imgCardAllResultPage">
                <img src={props.src} alt="" className="cardImg" onClick={props.goToAd}/>
                <div className="buttonsCardAllResultPage">
                    {props.isThereActiveU && (props.isLiked ?
                        <span><button className="btnCardRemoveFromFav" onClick={props.onClick2}>Премахни от бележника</button></span> :
                        <span><button className="btnCardAddToFav" onClick={props.onClick}>Добави в бележника</button></span>)}
                </div>
            </div>
            <div className="infoCardAllResultPage" onClick={props.goToAd}>
                <div className="mainInfoCardAllResultPage">
                    <div className="makeAndModelCardAllResultPage">
                        <span className="cardMake"><strong>{props.make}</strong></span>
                        <span className="cardModel"><strong>{props.model}</strong></span>
                    </div>
                    <span className="cardEngine">{props.engine}</span>
                    <span><strong>{props.price} {props.currency}</strong></span>
                </div>

                <div className="moreInfoCardAllResultPage">
                    Дата на произв. - {props.date}г., Пробег - {props.millage}км., Цвят - {props.color},
                    {props.euro} ! {props.moreInfo}.
                    Осебености : {props.vehicleCategory}, {props.safetyOptions}, {props.interiorOptions}.
                    <div className="regionCardAllResultPage">
                        Регион : {props.region}, {props.town}.
                    </div>

                </div>
            </div>


        </span>
    )
}