import { useState, useEffect } from "react";
import "./homeSearchTable.scss"
import Select from "../../components/Select"
import { Link } from "react-router-dom";
import SortOptions from "../../data/sortOptions"
import RegionAndTownOptions from "../../data/regionAndTownOptions"
import CategoryOptions from "../../data/categoryOptions";
import YearOptions from "../../data/yearOptions";
import TransmissionOptions from "../../data/transmissionOptions"
import EngineOptions from "../../data/engineOptions"

export default function HomeSearchTable(props) {

    const [make, setMake] = useState(CategoryOptions().categorieOptions[0].make);
    const [model, setModel] = useState(CategoryOptions().categorieOptions[0].make[0].model);
    const [town, setTown] = useState(RegionAndTownOptions().regionAndTownOptions[0].town);
    let [mainCategory, setMainCategory] = useState(CategoryOptions().categorieOptions[0].value);

    function handleMainCategory(e) {
        setMake(CategoryOptions().categorieOptions.find((el) => el.value === e.target.value).make);
        setMainCategory(e.target.value);
    }
   
    useEffect(() => {
        setModel(make[0].model);
    }, [make])

    function handleMakeCategory(e) {
        setModel(make.find((el) => el.value === e.target.value).model);
    }

    function handleChangeRegion(e) {
        setTown(RegionAndTownOptions().regionAndTownOptions.find((el) => el.value === e.target.value).town);
    }

    function handleInputPrice(e) {
        Number(e.target.value);
    }

    return (

        <div className="homeSearchTable">
            <span className="categoriesOutlineTable">
                <strong>
                    Търсене в <span>{mainCategory}</span>
                </strong>
            </span>

            <div className="mainSearchHome">
                <div className="mainCategories">
                    <p>
                        <strong>Основна Категория</strong>
                    </p>
                    <Select onChange={handleMainCategory} name="Основна категория" id="Овновна категория" options={CategoryOptions().categorieOptions} />
                </div>
                <div className="firstRowHomeTable">
                    <div className="makeAndModelHome">
                        <div className="makeSelectHome">
                            <p>
                                <strong>Марка</strong>
                            </p>
                            <Select onChange={handleMakeCategory} name="Марка" id="Марка" options={make} />
                        </div>
                        <div className="modelSelectHome">
                            <p>
                                <strong>Модел</strong>
                            </p>
                            <Select name="Модел" id="Модел" options={model} />
                        </div>
                    </div>
                    <div className="regionAndTown">
                        <div className="regionSelectHome">
                            <p>
                                <strong>Регион</strong>
                            </p>
                            <Select onChange={handleChangeRegion} name="Регион" id="Регион" options={RegionAndTownOptions().regionAndTownOptions} />
                        </div>
                        <div className="townSelectHome">
                            <p>
                                <strong>Населено място</strong>
                            </p>
                            <Select name="Населено място" id="Населено място" options={town} />
                        </div>
                    </div>
                </div>
                <div className="secondRowHomeTable">
                    <div className="priceAndYear">
                        <div className="priceInputHome">
                            <p>
                                <strong>Максимална цена</strong>
                            </p>
                            <input className="inputPriceHome" type="text" onInput={handleInputPrice} />
                        </div>
                        <div className="yearSelectHome">
                            <p>
                                <strong>Година</strong>
                            </p>
                            <Select name="Година" id="Година" options={YearOptions().year} />
                        </div>
                    </div>
                    <div className="sortAdHome">
                        <p>
                            <strong>Подреди резултатите според :</strong>
                        </p>
                        <Select name="Сортиране" id="Сортиране" options={SortOptions().sortOptions} />
                    </div>
                </div>
                <div className="thirdRowHomeTable">
                    <div className="engineAndTransmission">
                        <div className="engineSelectHome">
                            <p>
                                <strong>Двигател</strong>
                            </p>
                            <Select name="Двигател" id="Двигател" options={EngineOptions().engine} />
                        </div>
                        <div className="transmissionSelectHome">
                            <p>
                                <strong>Скоростна кутия</strong>
                            </p>
                            <Select name="Скоростна кутия" id="Скоростна кутия" options={TransmissionOptions().transmission} />
                        </div>
                    </div>
                    <Link className="SearchBtnHomeTable" to="/allResults"><button><strong>Търси</strong></button></Link>

                </div>
                <Link className="detailSearchLink" to="/detailSearching">Подробно търсене</Link>
            </div>


        </div>
    )
}
