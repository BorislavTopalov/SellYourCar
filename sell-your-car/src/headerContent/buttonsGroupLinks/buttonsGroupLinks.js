import Button from "react-bootstrap/Button";
import "./buttonsGroupLinks.css";
import { Link } from "react-router-dom";

export default function ButtonGroupLink(props) {

    return (
        <div className="headerContentDown">
            <div>
                <Button><Link to="/home">Начало</Link></Button>
                <Link to={props.activeUser ? "/addNew" : "/login"}><Button>Публикуване</Button></Link>
                <Link to="/detailSearching"><Button>Търсене</Button></Link>
                <Button href="https://fakti.bg/">Новини</Button>
                <Button className="rentACarBtn" href='https://toprentacar.bg/'>Rent-a-Car</Button>
                <Link to="/profile"><Button >Средни цени</Button></Link>
                <Link to="/profile"><Button>Дилъри</Button></Link>                             
            </div>

            <div>
                <Link to={props.activeUser ? "/profile" : "/login"}><Button >Моите обяви</Button></Link>
                
            </div>
            <div className="bottomLine"></div>
        </div>

    )
}