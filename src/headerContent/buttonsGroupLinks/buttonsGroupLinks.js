import Button from "react-bootstrap/Button";
import "./buttonsGroupLinks.scss";
import { NavLink, useLocation } from "react-router-dom";
import logoRent from "../buttonsGroupLinks/logoRent.png";
import "./logoRent.scss";
import { useDispatch, useSelector } from "react-redux";
import CategoryOptions from "../../data/categoryOptions";
import { useEffect } from "react";
import { reset } from "../../store/filters";

export default function ButtonGroupLink() {

    const activeUser = useSelector(state => state.activeUser);
    let location = useLocation();
    let dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname === `/home/${CategoryOptions().categorieOptions[0].value}`) {
            dispatch(reset());
        }
    }, [location.pathname, dispatch]);

    return (
        <div className="headerContentDown">
            <div>
                <NavLink to={`/home/${CategoryOptions().categorieOptions[0].value}`}><Button>Начало</Button></NavLink>
                <NavLink to={activeUser.email ? "/add-new" : "/login"}><Button>Публикуване</Button></NavLink>
                <NavLink to="/detail-searching"><Button>Търсене</Button></NavLink>
                <Button className="newsBtn" href="https://fakti.bg/" target="_blank">Новини</Button>
                <Button className="rentACarBtn" href='https://toprentacar.bg/' target="_blank">
                    <img className="logoRent" src={logoRent} alt="logo" />
                    Rent-a-Car
                </Button>
                <Button >Средни цени</Button>
                <Button>Дилъри</Button>
            </div>

            <div>
                <NavLink to={activeUser.email ? "/profile" : "/login"}><Button >Моите обяви</Button></NavLink>

            </div>
            <div className="bottomLine"></div>
        </div>

    )
}