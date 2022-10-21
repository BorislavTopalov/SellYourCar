import { Link } from "react-router-dom";
import "./addPhotoNewAd.scss";

export default function AddPhotoNewAd(props) {

    return (

        <div className="addPhotoNewAdContent">

            <span className="categoriesOutlineAddNew">
                <strong>
                    Добавяне на снимки за <span>{props.mainCategory}</span>
                </strong>
            </span>
            <div className="messageForPhotoAdd">
                <strong>Обявата Ви все още НЕ Е ПУБЛИКУВАНА</strong>
            </div>
            <div className="addNewPhotoInNewAd">
                <input type="file" name="" id="" />
            </div>
            <div className="addVideoFormYoutube">
                <p><strong>
                    Добавяне на видео от <span>YouTube </span>
                </strong></p>
                <div className="addUrlToVideo">
                    <input className="inputUrlYoutube" type="text" placeholder="URL" />
                    <button className="addVideoBtn"><strong>Въведи видеото</strong></button>
                </div>

            </div>
            <div className="addPhotoBtnContainer">
                <Link to="/profile"><button className="addPhotoBtnNext"><strong>Публикувай</strong></button></Link>
            </div>

        </div>
    )
}


