import Select from "../../components/Select";
import { Link } from "react-router-dom";
import SortOptions from "../../data/sortOptions";
import RegionAndTownOptions from "../../data/regionAndTownOptions";
// import RegionAndTownOptions from "../../../data/regionAndTownOptions";
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
        <div className="searchTable">
            <div className="firstRow">
                <p><strong>Основна категория</strong></p>
                <Select selectedOption={props.selectedOption} onChange={props.handleMain} name="Основна категория" id="Овновна категория" options={CategoryOptions().categorieOptions} />
            </div>
            <div className="secondRow">
                <div className="searchTableComponent">
                    <p><strong>Марка</strong></p>
                    <Select onChange={props.handleMake} name="Марка" id="Марка" options={props.make} />
                </div>
                <div className="searchTableComponent">
                    <p><strong>Модел</strong></p>
                    <Select name="Модел" id="Модел" options={props.model} />
                </div>
                <div className="searchTableComponent">
                    <p><strong>Състояние</strong></p>
                    <input className="conditionCheckbox" type="checkbox" id="condition1" name="condition1" value="new" />
                    <label className="conditionLabel" htmlFor="vehicle1">Ново</label>
                    <input className="conditionCheckbox" type="checkbox" id="condition2" name="condition2" value="used" />
                    <label className="conditionLabel" htmlFor="vehicle2">Употребяван</label>
                    <input className="conditionCheckbox" type="checkbox" id="condition3" name="condition3" value="parts" />
                    <label className="conditionLabel" htmlFor="vehicle3">За части</label>
                </div>
                <div className="secondRowBtn">
                    <Link to="/allResults"><button className="searchBtnDetailedSearch"><strong>Търси</strong></button></Link>
                </div>
            </div>

            <div className="thirdRow">
                <div className="searchTableComponent">
                    <p><strong>Марка</strong></p>
                    <Select onChange={props.handleMake} name="Марка" id="Марка" options={props.make} />
                </div>
                <div className="searchTableComponent">
                    <p><strong>Модел</strong></p>
                    <Select name="Модел" id="Модел" options={props.model} />
                </div>
            </div>

            <div className="forthRow">
                <div className="searchTableComponent">
                    <p><strong>Марка</strong></p>
                    <Select onChange={props.handleMake} name="Марка" id="Марка" options={props.make} />
                </div>
                <div className="searchTableComponent">
                    <p><strong>Модел</strong></p>
                    <Select name="Модел" id="Модел" options={props.model} />
                </div>
                <div className="searchTableComponent">
                    <p><strong>Година</strong></p>
                    <Select name="Година" id="Година1" options={YearOptions().year} />
                    <Select name="Година" id="Година2" options={YearOptions().year} />
                </div>
                <div className="searchTableComponentSpecia2">
                    <p><strong>Сортиране според</strong></p>
                    <Select name="Сортиране" id="Сортиране" options={SortOptions().sortOptions} />
                </div>
            </div>

            <div className="fifthRow">
                <div className="searchTableComponentPrice">
                    <p><strong>Цена</strong></p>
                    <label className="conditionLabel" htmlFor="vehicle1">от</label>
                    <input className="inputsInSearch" type="text" id="from" />
                    <label className="conditionLabel" htmlFor="vehicle2">до</label>
                    <input className="inputsInSearch" type="text" id="to" />
                    <select id="selectInSearch">
                        <option value="BGN">BGN</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="searchTableComponentFlex">
                    <div>
                        <p><strong>Мощност от</strong></p>
                        <input className="inputsInSearch" type="text" />
                    </div>
                    <div>
                        <p><strong>До</strong></p>
                        <input className="inputsInSearch" type="text" />
                    </div>
                </div>
                <div className="searchTableComponent">
                    <p><strong>Евростандарт</strong></p>
                    <Select name="Евростандарт" id="Евростандарт" options={EuroStandartOptions().euroStandart} />
                </div>
            </div>

            <div className="sixthRow">
                <div className="searchTableComponent">
                    <p>
                        <strong>Тип двигател</strong>
                    </p>
                    <Select name="Двигател" id="Двигател" options={EngineOptions().engine} />
                </div>
                <div className="searchTableComponent">
                    <p>
                        <strong>Скоростна кутия</strong>
                    </p>
                    <Select name="Скоростна кутия" id="Скоростна кутия" options={TransmissionOptions().transmission} />
                </div>
                <div className="searchTableComponent">
                    <p>
                        <strong>Макс. пробег в км.</strong>
                    </p>
                    <Select name="Макс пробег" id="Макс пробег" options={MaxMileageOptions().maxMileage} />
                </div>
                <div className="searchTableComponent">
                    <p>
                        <strong>Цвят</strong>
                    </p>
                    <Select name="Цвят" id="Цвят" options={ColourOptions().colours} />
                </div>
                <div className="searchTableComponent">
                    <p>
                        <strong>Регион</strong>
                    </p>
                    <Select onChange={props.handleRegion} name="Регион" id="Регион" options={RegionAndTownOptions().regionAndTownOptions} />
                </div>
                <div className="searchTableComponent">
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

    );
}

export default DetailedSearch;