import "./footerCategoriesLinks.scss";
import FooterLinks from "../../data/footerLinks";
import { handleMainCategory } from "../../redux/options";
import { useDispatch } from "react-redux";

export default function FooterCategoriesLinks(props) {

    const dispatch = useDispatch();
    function func1(e){
        dispatch(handleMainCategory(e.target.value))
    }

    return (

        <div>
            <div className="footerUpLine"></div>
            <div className="footerContentUp">
                <span>Основни категории: </span>
                <div>

                    {FooterLinks().footerLinks.map((link, i) => {
                        return <button onClick={func1} className="footerLink" key={i} value={link}>{link}</button>
                    })}

                </div>
            </div>
        </div>
    )
}