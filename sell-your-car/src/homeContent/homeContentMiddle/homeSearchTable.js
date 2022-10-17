import { useState, useEffect } from "react";
import "./homeSearchTable.css"
import Select from "./Select"
import CategoryOptions from "./categoryOptions";

export default function HomeSearchTable(props) {

    const [make, setMake] = useState(CategoryOptions().categorieOptions[0].make);
    const [model, setModel] = useState(CategoryOptions().categorieOptions[0].make[0].model)

    function handleMainCategory(e) {
        setMake(CategoryOptions().categorieOptions.find((el) => el.value === e.target.value).make);
    }

    useEffect(() => {
        setModel(make[0].model);
    }, [make])

    function handleMakeCategory(e) {
        setModel(make.find((el) => el.value === e.target.value).model);
    }

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
                    <Select onChange={handleMainCategory} name="Основна категория" id="Овновна категория" options={CategoryOptions().categorieOptions} />
                </div>

                <div className="makeCategories">
                    <p>
                        <strong>Марка</strong>
                    </p>
                    <Select onChange={handleMakeCategory} name="Марка" id="Марка" options={make} />
                </div>

                <div className="modelCategories">
                    <p>
                        <strong>Модел</strong>
                    </p>
                    <Select name="Модел" id="Модел" options={model} />
                </div>
            </span>

        </div>
    )
}
