import Button from "react-bootstrap/Button";
import "./buttonsGroupLinks.css";
import { Link } from "react-router-dom";

export default function ButtonGroupLink() {

    return (
        <div className="headerContentDown">
            <div>
                <Link to="/home"><Button >Начало</Button></Link>
                <Link to="/addNew"><Button >Публикуване</Button></Link>
                <Link to="/detailSearching"><Button >Търсене</Button></Link>
                <Link to="https://fakti.bg/"><Button >Новини</Button></Link>
                <Link to='https://toprentacar.bg/'><Button className="rentACarBtn" >Rent-a-Car</Button></Link>
                <Link to="/profile"><Button >Средни цени</Button></Link>
                <Link to="/profile"><Button>Дилъри</Button></Link>                             
            </div>

            <div>
                <Button href="/profile">Моите обяви</Button>
            </div>
            <div className="bottomLine"></div>
        </div>

    )
}