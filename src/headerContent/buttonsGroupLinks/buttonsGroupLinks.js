import Button from "react-bootstrap/Button";
import "./buttonsGroupLinks.scss";
import { NavLink } from "react-router-dom";
import logoRent from "../buttonsGroupLinks/logoRent.png";
import "./logoRent.scss";
import { useSelector } from "react-redux";

export default function ButtonGroupLink() {

    const activeUser = useSelector(state => state.activeUser);
    return (
        <div className="headerContentDown">
            <div>
                <NavLink to="/home"><Button>Начало</Button></NavLink>
                <NavLink to={activeUser.email ? "/add-new" : "/login"}><Button>Публикуване</Button></NavLink>
                <NavLink to="/detail-searching"><Button>Търсене</Button></NavLink>
                <Button className="newsBtn" href="https://fakti.bg/">Новини</Button>
                <Button className="rentACarBtn" href='https://toprentacar.bg/'>
                    <img className="logoRent" src={logoRent} alt="logo" />
                    Rent-a-Car
                </Button>
                <NavLink to="/profile"><Button >Средни цени</Button></NavLink>
                <NavLink to="/profile"><Button>Дилъри</Button></NavLink>
            </div>

            <div>
                <NavLink to={activeUser.email ? "/profile" : "/login"}><Button >Моите обяви</Button></NavLink>

            </div>
            <div className="bottomLine"></div>
        </div>

    )
}