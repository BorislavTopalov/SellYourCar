import "./footerCategoriesLinks.scss";
import FooterLinks from "../../data/footerLinks";
import { handleMainCategory } from "../../store/options";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function FooterCategoriesLinks(props) {

    const dispatch = useDispatch();
    function func1(e) {
        dispatch(handleMainCategory(e.target.value))
    }

    return (

        <div>
            <div className="footerUpLine"></div>
            <div className="footerContentUp">
                <span>Основни категории: </span>
                <div>

                    {FooterLinks().footerLinks.map((link, i) => {
                        return <Link to="/home" key={i}><button onClick={func1} className="footerLink" key={i} value={link}>{link}</button></Link>
                    })}

                </div>
            </div>
        </div>
    )
}