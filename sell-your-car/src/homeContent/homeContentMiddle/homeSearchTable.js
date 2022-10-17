import { useState, useEffect } from "react";
import "./homeSearchTable.css"
import Select from "./Select"

export default function HomeSearchTable() {

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
        {
            value: "Бусове", label: "Бусове",
            make: [
                {
                    value: "Mercedes",
                    label: "Mercedes",
                    model: [
                        {
                            value: "V-class",
                            label: "V-class"
                        },
                        {
                            value: "100",
                            label: "100"
                        }
                    ]
                },
                {
                    value: "Mazda",
                    label: "Mazda",
                    model: [
                        {
                            value: "Bongo",
                            label: "Bongo"
                        },
                        {
                            value: "E",
                            label: "E"
                        }
                    ]
                }
            ]
        },
        { value: "Камиони", label: "Камиони" },
        { value: "Мотоциклети", label: "Мотоциклети" },
        { value: "Селскостопански", label: "Селскостопански" },
        { value: "Велосипеди", label: "Велосипеди" },
        { value: "Каравани", label: "Каравани" },
        { value: "Яхти и лодки", label: "Яхти и лодки" },
        { value: "Купувам", label: "Купувам" },
        { value: "Части и аксесоари", label: "Части и аксесоари" }
    ];

    const [make, setMake] = useState(categorieOptions[0].make);
    const [model, setModel] = useState(categorieOptions[0].make[0].model)

    function handleMainCategory(e) {
        setMake(categorieOptions.find((el) => el.value === e.target.value).make);
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
                    <Select onChange={handleMainCategory} name="Основна категория" id="Овновна категория" options={categorieOptions} />
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