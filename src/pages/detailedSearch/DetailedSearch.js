import Select from "../../components/Select";
import { Link } from "react-router-dom";
import SortOptions from "../../data/sortOptions";
import RegionAndTownOptions from "../../data/regionAndTownOptions";
import CategoryOptions from "../../data/categoryOptions";
import YearOptions from "../../data/yearOptions";
import TransmissionOptions from "../../data/transmissionOptions"
import EngineOptions from "../../data/engineOptions"
import "./detailedSearch.scss"
import EuroStandartOptions from "../../data/euroStandartOptions";
import MaxMileageOptions from "../../data/maxMileageOptions";
import ColorOptions from "../../data/colorOptions";
import Checkbox from "../../components/Checkbox";
import SafetyOptions from "../../data/safetyOptions";
import comfortOptions from "../../data/comfortOptions";
import SecurityOptions from "../../data/securityOptions";
import SpecialOptions from "../../data/specialOptions";
import ExteriorOptions from "../../data/exteriorOptions";
import InteriorOptions from "../../data/interiorOptions";
import { handleChangeRegion, handleMainCategory, handleMakeCategory } from "../../redux/options";
import { useDispatch, useSelector } from "react-redux";

const DetailedSearch = () => {

    const options = useSelector(state => state.options);
    const dispatch = useDispatch();
    function func1(e) {
        dispatch(handleMainCategory(e.target.value))
    }
    function func2(e) {
        dispatch(handleChangeRegion(e.target.value))
    }
    function func3(e) {
        dispatch(handleMakeCategory(e.target.value))
    }

    function handleChange(e) {
        console.log(e.target.value);
    }

    return (
        <div className="detailedSearchContainer">
            <span className="categoriesOutlineAddNew">
                <strong>
                    Въвеждане на описанието за <span>{options.mainCategory}</span>
                </strong>
            </span>
            <div className="searchTable">
                <div className="firstRow">
                    <p><strong>Основна категория</strong></p>
                    <Select selectedOption={options.selectedOption} onChange={func1} name="Основна категория" id="Овновна категория" options={CategoryOptions().categorieOptions} />
                </div>
                <div className="secondRow">
                    <div className="makeAndModelDetailSearch">
                        <div className="makeDetailSearch">
                            <p><strong>Марка</strong></p>
                            <Select onChange={func3} name="make" id="make" options={options.make} />
                        </div>
                        <div className="ModelDetailSearch">
                            <p><strong>Модел</strong></p>
                            <Select name="model" id="model" options={options.model} />
                        </div>
                    </div>

                    <div className="conditionVehicleDeatiledSearch">
                        <p><strong>Състояние</strong></p>
                        <input className="conditionCheckbox" type="checkbox" id="condition1" name="condition1" value="new" />
                        <label className="conditionLabel" htmlFor="vehicle1">Ново</label>
                        <input className="conditionCheckbox" type="checkbox" id="condition2" name="condition2" value="used" />
                        <label className="conditionLabel" htmlFor="vehicle2">Употребяван</label>
                        <input className="conditionCheckbox" type="checkbox" id="condition3" name="condition3" value="parts" />
                        <label className="conditionLabel" htmlFor="vehicle3">За части</label>
                    </div>

                    <Link to="/all-results"><button className="searchBtnDetailedSearch"><strong>Търси</strong></button></Link>

                </div>

                <div className="thirdRow">
                    <div className="makeAndModelDetailSearch">
                        <div className="makeDetailSearch">
                            <p><strong>Марка</strong></p>
                            <Select onChange={func3} name="make" id="make" options={options.make} />
                        </div>
                        <div className="ModelDetailSearch">
                            <p><strong>Модел</strong></p>
                            <Select name="model" id="model" options={options.model} />
                        </div>
                    </div>
                </div>

                <div className="forthRow">
                    <div className="makeAndModelDetailSearch">
                        <div className="makeDetailSearch">
                            <p><strong>Марка</strong></p>
                            <Select onChange={func3} name="make" id="make" options={options.make} />
                        </div>
                        <div className="ModelDetailSearch">
                            <p><strong>Модел</strong></p>
                            <Select name="model" id="model" options={options.model} />
                        </div>
                    </div>
                    <div className="yearDetailedSearch">
                        <div className="yearFromDetailedSearch">
                            <p><strong>Година от</strong></p>
                            <Select name="YearFrom" id="yearFrom" options={YearOptions().year} />
                        </div>
                        <div className="yearToDetailedSearch">
                            <p><strong>До</strong></p>
                            <Select name="yearTo" id="yearTo" options={YearOptions().year} />
                        </div>
                    </div>
                    <div className="sortDetailedSearch">
                        <p><strong>Сортиране според</strong></p>
                        <Select name="sort" id="sort" options={SortOptions().sortOptions} />
                    </div>
                </div>

                <div className="fifthRow">
                    <div className="priceDeatiledSearch">
                        <div className="priceInputFrom">
                            <p><strong>Цена от</strong></p>
                            <input className="inputPriceFrom" type="text" id="from" />
                        </div>
                        <div className="priceInputTo">
                            <p><strong>До</strong></p>
                            <input className="inputPriceTo" type="text" id="to" />
                            <select id="curencySelectDetailedSearch">
                                <option value="BGN">лв.</option>
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>



                    </div>
                    <div className="powerDetailedSearch">
                        <div>
                            <p><strong>Мощност от</strong></p>
                            <input className="powerFrom" type="text" />
                        </div>
                        <div>
                            <p><strong>До</strong></p>
                            <input className="powerTo" type="text" />
                        </div>
                    </div>
                    <div className="euroDetailedSearch">
                        <p><strong>Евростандарт</strong></p>
                        <Select name="Евростандарт" id="Евростандарт" options={EuroStandartOptions().euroStandart} />
                    </div>
                </div>

                <div className="sixthRow">
                    <div className="engineDetailedSearch">
                        <p>
                            <strong>Тип двигател</strong>
                        </p>
                        <Select name="Двигател" id="Двигател" options={EngineOptions().engine} />
                    </div>
                    <div className="transmissionDetailedSearch">
                        <p>
                            <strong>Скоростна кутия</strong>
                        </p>
                        <Select name="Скоростна кутия" id="Скоростна кутия" options={TransmissionOptions().transmission} />
                    </div>
                    <div className="distanceDetailedSearch">
                        <p>
                            <strong>Макс. пробег в км.</strong>
                        </p>
                        <Select name="Макс пробег" id="Макс пробег" options={MaxMileageOptions().maxMileage} />
                    </div>
                    <div className="colorDetailedSearch">
                        <p>
                            <strong>Цвят</strong>
                        </p>
                        <Select name="Цвят" id="Цвят" options={ColorOptions().colors} />
                    </div>
                    <div className="regionDetailedSearch">
                        <p>
                            <strong>Регион</strong>
                        </p>
                        <Select onChange={func2} name="Регион" id="Регион" options={RegionAndTownOptions().regionAndTownOptions} />
                    </div>
                    <div className="townDetailedSearch">
                        <p>
                            <strong>Населено място</strong>
                        </p>
                        <Select name="Населено място" id="Населено място" options={options.town} />
                    </div>
                </div>
                <div className="checkBoxes">
                    <div className="firstColumn">
                        <p><strong>Безопасност</strong></p>
                        <Checkbox onChange={handleChange} options={SafetyOptions().safetyOptions} />
                    </div>
                    <div className="secondColumn">
                        <p><strong>Комфорт</strong></p>
                        <Checkbox options={comfortOptions().comfortOptions} />
                    </div>
                    <div className="thirdColumn">
                        <p><strong>Защита</strong></p>
                        <Checkbox options={SecurityOptions().securityOptions} />
                    </div>
                    <div className="forthColumn">
                        <p><strong>Специални</strong></p>
                        <Checkbox options={SpecialOptions().specialOptions} />
                    </div>
                    <div className="fifthColumn">
                        <p><strong>Екстериор</strong></p>
                        <Checkbox options={ExteriorOptions().exteriorOptions} />
                    </div>
                    <div className="sixthColumn">
                        <p><strong>Интериор</strong></p>
                        <Checkbox options={InteriorOptions().interiorOptions} />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default DetailedSearch;