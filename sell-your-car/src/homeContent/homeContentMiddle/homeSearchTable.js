import "./homeSearchTable.css"

export default function HomeSearchTable() {

    return (

        <div className="homeSearchTable">
            <span className="categoriesOutlineTable">
                <strong>
                    Търсене в
                </strong>
            </span>
            <span className="homeSearchTable">
                <div className="mainCategories">
                    <p>
                        <strong>Основна Категория</strong>
                    </p>
                    <select className="categories">
                        <option value="1">Автомобили и Джипове</option>
                        <option value="2">Бусове</option>
                        <option value="3">Камиони</option>
                        <option value="4">Мотоциклети</option>
                        <option value="5">Селскостопански</option>
                        <option value="6">Велосипеди</option>
                        <option value="7">Каравани</option>
                        <option value="8">Яхти и лодки</option>
                        <option value="9">Купувам</option>
                        <option value="10">Части и аксесоари</option>
                    </select>
                </div>
            </span>

        </div>
    )
}