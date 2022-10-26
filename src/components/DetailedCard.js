export default function DetailedCard(props) {


    return (

        <div className="detailedCardContainer">
            <a className="autodataLink" href={props.autoData} target="_blank">Техически характеристики и разход на гориво</a>
            <div className="makeAndModel">
                <p className="makeDetailedCard"><strong>{props.make}</strong></p>
                <p className="modelDetailedCard"><strong>{props.model}</strong></p>
            </div>
            <img className="mainImage" src={props.src} alt="" />
            <div className="moreImages"></div>
            <div className="allInfoDetailedCard">
                <div className="makeAndModelAndPrice">
                    <div className="makeAndModel">
                        <p className="makeDetailedCard"><strong>{props.make}</strong></p>
                        <p className="modelDetailedCard"><strong>{props.model}</strong></p>
                    </div>
                    <div>
                        <p className="priceDetailedCard"><strong>Цена {props.price} лв.</strong></p>
                    </div>
                </div>

                <div className="dataDetailCard">
                    <p>Дата на производство</p>
                    <p><strong>{props.date}</strong></p>
                </div>
                <div className="dataDetailCard">
                    <p>Тип двигател</p>
                    <p><strong>{props.engine}</strong></p>
                </div>
                <div className="dataDetailCard">
                    <p>Мощност</p>
                    <p><strong>{props.power} к.с.</strong></p>
                </div>
                <div className="dataDetailCard">
                    <p>Евростандарт</p>
                    <p><strong>{props.euro}</strong></p>
                </div>
                <div className="dataDetailCard">
                    <p>Скоростна кутия</p>
                    <p><strong>{props.transmission}</strong></p>
                </div>
                <div className="dataDetailCard">
                    <p>Категория</p>
                    <p><strong>{props.vehicleCategory}</strong></p>
                </div>
                <div className="dataDetailCard">
                    <p>Пробег</p>
                    <p><strong>{props.millage}</strong></p>
                </div>
                <div className="dataDetailCard">
                    <p>Цвят</p>
                    <p><strong>{props.color}</strong></p>
                </div>
                <div className="moreExtrasAndSafety">
                    <div className="safety">
                        <p><strong>Безопасност</strong></p>
                        <div>
                            {props.gps}<br />
                            {props.stability}<br />
                            {props.adaptLight}<br />
                            {props.abs}<br />
                            {props.tyrePresure}<br />
                            {props.parktronik}<br />
                            {props.brakeAsisst}<br />
                        </div>
                    </div>
                    <div className="comfort">
                        <p><strong>Комфорт</strong></p>
                        <div>
                            {props.startStop}<br />
                            {props.bluetooth}<br />
                            {props.usb}<br />
                            {props.airmatic}<br />
                            {props.keyless}<br />
                            {props.bordComp}<br />
                            {props.heatingWheel}<br />
                        </div>
                    </div>
                    <div className="security">
                        <p><strong>Сигурност</strong></p>
                        <div>
                            {props.armored}<br />
                            {props.forcedGlass}<br />
                            {props.centralLock}<br />
                            {props.offroad}<br />
                            {props.alarm}<br />
                            {props.insurance}<br />
                            {props.winch}<br />
                        </div>
                    </div>
                    <div className="exterior">
                        <p><strong>Екстериор</strong></p>
                        <div>
                            {props.towTruck}<br />
                            {props.led}<br />
                            {props.panorama}<br />
                            {props.spoilers}<br />
                            {props.heatWasher}<br />
                            {props.xenon}<br />
                            {props.roofWindow}<br />
                        </div>
                    </div>
                    <div className="interior">
                        <p><strong>Интериор</strong></p>
                        <div>
                            {props.velur}<br />
                            {props.rigthDirection}<br />
                            {props.leather}<br />
                        </div>
                    </div>
                    <div className="special">
                        <p><strong>Специални</strong></p>
                        <div>
                            {props.taxi}<br />
                            {props.specialCar}<br />
                            {props.hearse}<br />
                            {props.ambulance}<br />
                            {props.schoolCar}<br />
                            {props.refrigerator}<br />
                            {props.n1}<br />
                        </div>
                    </div>
                </div>
                <div className="moreInfoAndContactSeller">
                    <div className="moreInfoContainer">
                        <p><strong>Допълнителна информация</strong></p>
                        <div className="moreInfoDetailedCard">{props.moreInfo}</div>
                    </div>
                    <div>
                        <p><strong>За контакти</strong></p>
                        <div>{props.contacts}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}