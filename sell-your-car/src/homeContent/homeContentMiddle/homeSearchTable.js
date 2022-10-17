import "./homeSearchTable.css"

export default function HomeSearchTable(props) {

    const categorieOptions = [
        {
            value: "Автомобили и Джипове",
            label: "Автомобили и Джипове",
            make: [
                {
                    value: "Audi",
                    label: "Audi",
                    model: [
                        {
                            value: "A3",
                            label: "A3"
                        },
                        {
                            value: "A6",
                            label: "A6"
                        },
                        {
                            value: "A8",
                            label: "A8"
                        },
                    ]
                }
            ]
        },
        { value: "Бусове", label: "Бусове" },
        { value: "Камиони", label: "Камиони" },
        { value: "Мотоциклети", label: "Мотоциклети" },
        { value: "Селскостопански", label: "Селскостопански" },
        { value: "Велосипеди", label: "Велосипеди" },
        { value: "Каравани", label: "Каравани" },
        { value: "Яхти и лодки", label: "Яхти и лодки" },
        { value: "Купувам", label: "Купувам" },
        { value: "Части и аксесоари", label: "Части и аксесоари" }
    ];


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
                    <select name={props.name} id={props.id}>
                        {categorieOptions.map(e => {
                            <option value={e.value}>
                                {e.label}
                            </option>
                        })}
                    </select>
                </div>
            </span>

        </div>
    )
}