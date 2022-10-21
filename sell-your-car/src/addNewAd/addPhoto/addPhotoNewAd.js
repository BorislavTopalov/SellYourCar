export default function AddPhotoNewAd() {

    return (

        <div className="addPhotoNewAdContent">

            <span className="categoriesOutlineAddNew">
                <strong>
                    {/* Добавяне на снимки за <span>{props.mainCategory}</span> */}
                </strong>
            </span>
            <div className="messageForPhotoAdd">
                <strong>Обявата Ви все още не е публикувана</strong>
            </div>
            <div className="addNewPhotoInNewAd">
                <input type="file" name="" id="" />
            </div>
            <div>
                <p><strong>
                    Добавяне на видео от
                    <p>
                        YouTube
                    </p>
                </strong></p>
                <div>
                    <input type="text" placeholder="URL" />
                    <button>Въведи видеото</button>
                </div>

            </div>
        </div>
    )
}


