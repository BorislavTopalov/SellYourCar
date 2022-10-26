import "./footerMiddleContent.scss";
import { Link } from "react-router-dom";

export default function FooterHelpLinks() {

    return (

        <div className="footerMiddleContent">
            <div >
                <Link className="footerHelpLinks" to="/contacts">
                    ЗА КОНТАКТИ
                </Link> | <Link className="footerHelpLinks" to="/all-results">
                    ОБЯВИ
                </Link> | <a className="footerHelpLinks" href="https://fakti.bg/" target="_blank">
                    НОВИНИ
                </a> | <Link className="footerHelpLinks" to="/advertisement">
                    ЗА РЕКЛАМА
                </Link> | <Link className="footerHelpLinks" to="/help">
                    ПОМОЩ
                </Link> | <Link className="footerHelpLinks" to="/general-terms">
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