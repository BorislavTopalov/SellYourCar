import "./footerCategoriesLinks.css";
import FooterLinks from "../../data/footerLinks";

export default function FooterCategoriesLinks(props) {

    return (

        <div>
            <div className="footerUpLine"></div>
            <div className="footerContentUp">
                <span>Основни категории: </span>
                <div>

                    {FooterLinks().footerLinks.map((link, i) => {
                        return <button onClick={props.onClick} className="footerLink" key={i} value={link}>{link}</button>
                    })}

                </div>
            </div>
        </div>
    )
}