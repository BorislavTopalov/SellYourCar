import "./footerCategoriesLinks.css";
import { Link } from "react-router-dom";

export default function FooterCategoriesLinks () {

    return (

        <div>
            <div className="footerUpLine"></div>
            <div className="footerContentUp">
                <span>Основни категории: </span>
                <div>
                    <Link className="footerLink" to="/home">Автомобили и джипове</Link>
                    <Link className="footerLink" to="/home">Бусове</Link>
                    <Link className="footerLink" to="/home">Камиони</Link>
                    <Link className="footerLink" to="/home">Мотоциклети</Link>
                    <Link className="footerLink" to="/home">Селскостопански</Link>
                    <Link className="footerLink" to="/home">Индустриални</Link>
                    <Link className="footerLink" to="/home">Кари</Link>
                    <Link className="footerLink" to="/home">Каравини</Link>
                    <Link className="footerLink" to="/home">Яхти и лодки</Link>
                    <Link className="footerLink" to="/home">Ремаркета</Link>
                    <Link className="footerLink" to="/home">Велосипеди</Link>
                </div>
            </div>
        </div>
    )
}