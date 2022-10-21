import "./footerMiddleContent.css";
import { Link } from "react-router-dom";

export default function FooterHelpLinks() {

    return (

        <div className="footerMiddleContent">
            <div >
                <Link className="footerHelpLinks" to="/contacts">
                    ЗА КОНТАКТИ
                </Link> | <Link className="footerHelpLinks" to="/allResults">
                    ОБЯВИ
                </Link> | <Link className="footerHelpLinks" to="https://fakti.bg/">
                    НОВИНИ
                </Link> | <Link className="footerHelpLinks" to="/advertisement">
                    ЗА РЕКЛАМА
                </Link> | <Link className="footerHelpLinks" to="/help">
                    ПОМОЩ
                </Link> | <Link className="footerHelpLinks" to="/generalTerms">
                    ОБЩИ УСЛОВИЯ
                </Link> | <Link className="footerHelpLinks" to="/register">
                    РЕГИСТРАЦИЯ
                </Link>
            </div>
            <div>
                <p className="footerEndParagraph">2022 IT tallents Борислав Топалов и Петър Томов</p>
            </div>
        </div>

    )
} 