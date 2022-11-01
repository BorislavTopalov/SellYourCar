export default function ActiveAdsCard(props) {

    return (

        <span className="cardContainer" >
            <div className="imgCardAllResultPage">
                <div className="cardImgContainer">
                    <img src={props.src} alt="" className="cardImg" onClick={props.goToAd} />
                </div>
                <div className="buttonsCardAllResultPage">
                    {props.isThereActiveU && props.activeUser.active.some(e => e.id === props.id) ?
                        <span><button onClick={props.deactivationAd} className="btnDetailCardRemoveFromFav">Премести в неактивни</button></span> :
                        props.activeUser.inactive.some(e => e.id === props.id) &&
                        <span><button onClick={props.activationAd} className="btnMyActiveAds">Премести в активни</button>
                            <button onClick={props.deleteAd} className="btnMyActiveAds">Изтрий обявата</button></span>}
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
                    Осoбености : {props.vehicleCategory}, {props.safetyOptions}, {props.interiorOptions}.
                    <div className="regionCardAllResultPage">
                        Регион : {props.region}, {props.town}.
                    </div>
                </div>
            </div>
        </span>
    )
}