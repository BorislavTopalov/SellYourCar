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
import ColourOptions from "../../data/colourOptions";
import Checkbox from "../../components/Checkbox";
import SafetyOptions from "../../data/safetyOptions";
import comfortOptions from "../../data/comfortOptions";
import SecurityOptions from "../../data/securityOptions";
import SpecialOptions from "../../data/specialOptions";
import ExteriorOptions from "../../data/exteriorOptions";
import InteriorOptions from "../../data/interiorOptions";


const DetailedSearch = (props) => {

    return (
        <div className="detailedSearchContainer">
            <span className="categoriesOutlineAddNew">
                <strong>
                    Въвеждане на описанието за <span>{props.mainCategory}</span>
                </strong>
            </span>
            <div className="searchTable">
                <div className="firstRow">
                    <p><strong>Основна категория</strong></p>
                    <Select selectedOption={props.selectedOption} onChange={props.handleMain} name="Основна категория" id="Овновна категория" options={CategoryOptions().categorieOptions} />
                </div>
                <div className="secondRow">
                    <div className="makeAndModelDetailSearch">
                        <div className="makeDetailSearch">
                            <p><strong>Марка</strong></p>
                            <Select onChange={props.handleMake} name="make" id="make" options={props.make} />
                        </div>
                        <div className="ModelDetailSearch">
                            <p><strong>Модел</strong></p>
                            <Select name="model" id="model" options={props.model} />
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

                    <Link to="/allResults"><button className="searchBtnDetailedSearch"><strong>Търси</strong></button></Link>

                </div>

                <div className="thirdRow">
                    <div className="makeAndModelDetailSearch">
                        <div className="makeDetailSearch">
                            <p><strong>Марка</strong></p>
                            <Select onChange={props.handleMake} name="make" id="make" options={props.make} />
                        </div>
                        <div className="ModelDetailSearch">
                            <p><strong>Модел</strong></p>
                            <Select name="model" id="model" options={props.model} />
                        </div>
                    </div>
                </div>

                <div className="forthRow">
                    <div className="makeAndModelDetailSearch">
                        <div className="makeDetailSearch">
                            <p><strong>Марка</strong></p>
                            <Select onChange={props.handleMake} name="make" id="make" options={props.make} />
                        </div>
                        <div className="ModelDetailSearch">
                            <p><strong>Модел</strong></p>
                            <Select name="model" id="model" options={props.model} />
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
                                <option value="BGN">BGN</option>
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
                        <Select name="Цвят" id="Цвят" options={ColourOptions().colours} />
                    </div>
                    <div className="regionDetailedSearch">
                        <p>
                            <strong>Регион</strong>
                        </p>
                        <Select onChange={props.handleRegion} name="Регион" id="Регион" options={RegionAndTownOptions().regionAndTownOptions} />
                    </div>
                    <div className="townDetailedSearch">
                        <p>
                            <strong>Населено място</strong>
                        </p>
                        <Select name="Населено място" id="Населено място" options={props.town} />
                    </div>
                </div>
                <div className="checkBoxes">
                    <div className="firstColumn">
                        <p><strong>Безопасност</strong></p>
                        <Checkbox options={SafetyOptions().safetyOptions} />
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