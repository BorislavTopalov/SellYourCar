import "./footerMiddleContent.css";

export default function FooterHelpLinks() {

    return (

        <div className="footerMiddleContent">
            <div >
                <a className="footerHelpLinks" href="/contacts">
                    ЗА КОНТАКТИ
                </a> | <a className="footerHelpLinks" href="/allResults">
                    ОБЯВИ
                </a> | <a className="footerHelpLinks" href="https://fakti.bg/">
                    НОВИНИ
                </a> | <a className="footerHelpLinks" href="/advertisement">
                    ЗА РЕКЛАМА
                </a> | <a className="footerHelpLinks" href="/help">
                    ПОМОЩ
                </a> | <a className="footerHelpLinks" href="/generalTerms">
                    ОБЩИ УСЛОВИЯ
                </a> | <a className="footerHelpLinks" href="/register">
                    РЕГИСТРАЦИЯ
                </a>
            </div>
            <div>
                <p className="footerEndParagraph">2022 IT tallents Борислав Топалов и Петър Томов</p>
            </div>
        </div>

    )
} 