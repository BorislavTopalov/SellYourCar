import { Carousel, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DetailedCard(props) {

    return (
        <div>
            <div className="buttonsDetailedPage">
                <Link to="/all-results" className="backToResults">Назад към резултатите</Link>
                <div className="buttonsCardAllResultPage">
                    {props.isThereActiveU && (props.isLiked ?
                        <span><button className="btnDetailCardRemoveFromFav" onClick={props.onClick2}>Премахни от бележника</button></span> :
                        <span><button className="btnDetailCardAddToFav" onClick={props.onClick}>Добави в бележника</button></span>)}
                </div>
            </div>
            <div className="detailedCardContainer">
                <a className="autodataLink" href={props.autoData} target="_blank">Техически характеристики и разход на гориво</a>
                <div className="makeAndModel">
                    <p className="makeDetailedCard"><strong>{props.make}</strong></p>
                    <p className="modelDetailedCard"><strong>{props.model}</strong></p>
                </div>
                <Carousel interval={null}>
                    {props.image}
                </Carousel>
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
                    <div className="extrasAndInfo">
                        <span className="extras">
                            <p><strong>Екстри</strong></p>
                            {props.extras}
                        </span>
                        <span className="moreInfoContainer">
                            <div className="moreInfoAndContactSeller" >
                                <div className="moreInfo">
                                    <p className="moreInfoLabel" ><strong>Допълнителна информация</strong></p>
                                    <div className="moreInfoDetailedCard">{props.moreInfo}</div>
                                </div>
                                <div className="contactSeller" >
                                    <p><strong>За контакти</strong></p>
                                    <div>{props.contacts}</div>
                                </div>
                            </div>

                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}