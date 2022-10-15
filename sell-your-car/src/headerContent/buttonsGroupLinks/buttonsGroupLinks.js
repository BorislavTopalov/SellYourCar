import Button from "react-bootstrap/Button";
import "./buttonsGroupLinks.css";

export default function ButtonGroupLink() {

    return (
        <div className="headerContentDown">
            <div>
                <Button href="/home">Начало</Button>
                <Button href="/addNew">Публикуване</Button>
                <Button href="/detailSearching">Търсене</Button>
                <Button href="https://fakti.bg/">Новини</Button>
                <Button className="rentACarBtn" href='https://toprentacar.bg/'>Rent-a-Car</Button>
                <Button href="/profile">Средни цени</Button>
                <Button href="/profile">Дилъри</Button>
            </div>

            <div>
                <Button href="/profile">Моите обяви</Button>
            </div>
            <div className="bottomLine"></div>
        </div>

    )
}