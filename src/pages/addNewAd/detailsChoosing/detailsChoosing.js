import Select from '../../../components/Select';
import { useNavigate } from "react-router-dom";
import RegionAndTownOptions from '../../../data/regionAndTownOptions';
import CategoryOptions from "../../../data/categoryOptions";
import YearOptions from "../../../data/yearOptions";
import TransmissionOptions from "../../../data/transmissionOptions"
import EngineOptions from "../../../data/engineOptions"
import "./detailsChoosing.scss";
import EuroStandartOptions from "../../../data/euroStandartOptions";
import ColorOptions from "../../../data/colorOptions";
import Checkbox from "../../../components/Checkbox";
import SafetyOptions from "../../../data/safetyOptions";
import comfortOptions from "../../../data/comfortOptions";
import SecurityOptions from "../../../data/securityOptions";
import SpecialOptions from "../../../data/specialOptions";
import ExteriorOptions from "../../../data/exteriorOptions";
import InteriorOptions from "../../../data/interiorOptions";
import VehicleCategories from "../../../data/vehicleCategories";
import { handleChangeRegion, handleMainCategory, handleMakeCategory } from "../../../store/options";
import { useDispatch, useSelector } from "react-redux";
import { addParameter } from '../../../store/addNewAd';

export default function DetailsChoosing() {

    const navigate = useNavigate();
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

    function handleAddNew(e) {
        e.preventDefault();

        navigate("/add-pictures");
    }

    function addParams(e) {
        dispatch(addParameter({
            name: e.target.name,
            value: e.target.value
        }))
    }

    return (
        <div className="newAddContainer">
            <span className="categoriesOutlineAddNew">
                <strong>
                    Въвеждане на описанието за <span>{options.mainCategory}</span>
                </strong>
            </span>
            <form onSubmit={handleAddNew} className="AddNewAdTable">
                <div className="firstRowAddNew">
                    <p><strong>Основна категория *</strong></p>
                    <Select required selectedOption={options.selectedOption} onChange={e => { func1(e); addParams(e) }} name="Основна категория" id="Овновна категория" options={CategoryOptions().categorieOptions} />
                </div>
                <div className="secondRowAddNew">
                    <div className="makeAndModelAddNew">
                        <div className="makeAddNew">
                            <p><strong>Марка *</strong></p>
                            <Select required onChange={e => { func3(e); addParams(e) }} name="Марка" id="Марка" options={options.make} />
                        </div>
                        <div className="modelAddNew">
                            <p><strong>Модел *</strong></p>
                            <Select required name="Модел" id="Модел" options={options.model} onChange={addParams} />
                        </div>
                    </div>
                    <div className="modifyAndEngineAddNew">
                        <div className="modifyAddNew">
                            <p><strong className="modifyStrongAddNew">Модификация</strong></p>
                            <input className="modifyInputAddNew" type="text" />
                        </div>
                        <div className="engineAddNew">
                            <p>
                                <strong>Тип двигател *</strong>
                            </p>
                            <Select required className="engineSelectAddNew" name="Двигател" id="Двигател" onChange={addParams} options={EngineOptions().engine} />
                        </div>
                    </div>

                    <div className="conditionVehicleAddNew">
                        <p><strong>Състояние</strong></p>
                        <input className="conditionCheckboxAddNew" type="checkbox" id="condition1" name="condition1" value="new" />
                        <label className="conditionLabelAddNew" htmlFor="vehicle1">Ново</label>
                        <input className="conditionCheckboxAddNew" type="checkbox" id="condition2" name="condition2" value="used" />
                        <label className="conditionLabelAddNew" htmlFor="vehicle2">Употребяван</label>
                        <input className="conditionCheckboxAddNew" type="checkbox" id="condition3" name="condition3" value="parts" />
                        <label className="conditionLabelAddNew" htmlFor="vehicle3">За части</label>
                    </div>
                </div>
                <div className="thirdRowAddNew">
                    <div className="powerAndEuroAddNew">
                        <div className="powerAddNew">
                            <div>
                                <p><strong>Мощност [к.с.]</strong></p>
                                <input className="powerInputAddNew" type="text" />
                            </div>
                        </div>
                        <div className="euroAddNew">
                            <p><strong>Евростандарт</strong></p>
                            <Select className="euroSelectAddNew" name="Евростандарт" id="Евростандарт" onChange={addParams} options={EuroStandartOptions().euroStandart} />
                        </div>
                    </div>
                    <div className="transmissionAddNew">
                        <p>
                            <strong>Скоростна кутия *</strong>
                        </p>
                        <Select required name="Скоростна кутия" id="Скоростна кутия" onChange={addParams} options={TransmissionOptions().transmission} />
                    </div>
                    <div className="vehicleCategoryAddNew">
                        <p><strong>Категория</strong></p>
                        <Select className="vahicleSelectCatAddNew" name="Категория" id="Ктегория" onChange={addParams} options={VehicleCategories().vehicleCategories} />
                    </div>
                </div>

                <div className="fourthRowAddNew">
                    <div className="priceAddNew">
                        <p><strong>Цена *</strong></p>
                        <input onInput={addParams} required className="priceInputAddNew" type="text" />
                        <select onChange={addParams} required className="currencySelectAddNew" id="selectInSearch">
                            <option value="BGN">лв.</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    <div className="yearAddnew">
                        <p><strong>Година *</strong></p>
                        <Select required className="yearSelectAddnew" name="Година" id="Година" onChange={addParams} options={YearOptions().year} />
                    </div>
                    <div className="millageAddNew">
                        <p><strong>Пробег *</strong></p>
                        <input onInput={addParams} required className="inputMillageAddNew" type="text" />
                        <label htmlFor="vehicleMillage">в километри</label>
                    </div>
                </div>

                <div className="fifthRowAddNew">
                    <div className="regionAddNew">
                        <p>
                            <strong>Регион *</strong>
                        </p>
                        <Select required className="regionSelectAddNew" onChange={(e) => {func2(e); addParams(e)}} name="Регион" id="Регион" options={RegionAndTownOptions().regionAndTownOptions} />
                    </div>
                    <div className="townAddNew">
                        <p>
                            <strong>Населено място *</strong>
                        </p>
                        <Select required className="townSelectAddNew" name="Населено място" id="Населено място" options={options.town} />
                    </div>
                    <div className="colorAddNew">
                        <p>
                            <strong>Цвят</strong>
                        </p>
                        <Select className="colorSelectAddNew" name="Цвят" id="Цвят" onChange={addParams} options={ColorOptions().colors} />
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
                <div className="sixthRow">
                    <div className="moreInfoNewAd">
                        <p><strong>Допълнителна информация</strong></p>
                        <textarea name="moreInfo" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="contactsNewAd">
                        <p><strong className="moreInfoText">Данни за връзка</strong></p>
                        <div className="phoneNewAd">
                            <label htmlFor="phone">Мобилен телефон :</label>
                            <input required className="phoneInput" type="number" />
                        </div>
                        <div className="emailNewAd">
                            <label htmlFor="email">Електронна поща :</label>
                            <input required className="phoneInput" type="email" />
                        </div>
                    </div>
                    <div className="publicBtnAddNew">
                        {/* <Link to="/add-pictures"> */}
                        <button type='submit' className="publicNewAd"><strong>Продължи</strong></button>
                        {/* </Link> */}
                        <p className="nextStepInfo">*Полетата със * са задължителни</p>
                        <p className="nextStepInfo">*На следаващата стъпка ще можете да добавите снимки</p>
                    </div>
                </div>
            </form>

        </div>


    );
}

