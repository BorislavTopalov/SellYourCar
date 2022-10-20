import "./footerCategoriesLinks.css";
import { Link } from "react-router-dom";
import FooterLinks from "../../data/footerLinks";
import CategoryOptions from "../../data/categoryOptions";

export default function FooterCategoriesLinks() {

    return (

        <div>
            <div className="footerUpLine"></div>
            <div className="footerContentUp">
                <span>Основни категории: </span>
                <div>

                    {FooterLinks().footerLinks.map((link, i) => {
                        return <Link className="footerLink" key={i} value={link} to={CategoryOptions().categorieOptions[i].value}>
                            {link}
                        </Link>
                    })}

                </div>
            </div>
        </div>
    )
}