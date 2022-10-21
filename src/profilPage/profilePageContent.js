import "./profilePageContent.scss";

export default function ProfilePage() {

    return (
        <div className="profilePageContent">
            <div className="profilePageTop">
                <p><strong className="myAdsProfile">Моите обяви</strong></p>
                |
                <p><strong className="favAdsProfile">Бележник обяви</strong></p>
                |
                <p><strong className="settingsProfile">Настройки</strong></p>
            </div>
        </div>
    )
}