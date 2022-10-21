import Button from "react-bootstrap/Button";
import "./buttonsGroupLinks.scss";
import { NavLink } from "react-router-dom";
import logoRent from "../buttonsGroupLinks/logoRent.png";
import "./logoRent.scss";

export default function ButtonGroupLink(props) {

    return (
        <div className="headerContentDown">
            <div>
                <NavLink to="/home"><Button>Начало</Button></NavLink>
                <NavLink to={props.activeUser ? "/addNew" : "/login"}><Button>Публикуване</Button></NavLink>
                <NavLink to="/detailSearching"><Button>Търсене</Button></NavLink>
                <Button className="newsBtn" href="https://fakti.bg/">Новини</Button>
                <Button className="rentACarBtn" href='https://toprentacar.bg/'>
                    <img className="logoRent" src={logoRent} alt="logo" />
                    Rent-a-Car
                </Button>
                <NavLink to="/profile"><Button >Средни цени</Button></NavLink>
                <NavLink to="/profile"><Button>Дилъри</Button></NavLink>
            </div>

            <div>
                <NavLink to={props.activeUser ? "/profile" : "/login"}><Button >Моите обяви</Button></NavLink>

            </div>
            <div className="bottomLine"></div>
        </div>

    )
}