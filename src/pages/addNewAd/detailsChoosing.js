import Select from '../../components/Select';
import { useNavigate, useLocation } from "react-router-dom";
import RegionAndTownOptions from '../../data/regionAndTownOptions';
import CategoryOptions from "../../data/categoryOptions";
import YearOptions from "../../data/yearOptions";
import TransmissionOptions from "../../data/transmissionOptions"
import EngineOptions from "../../data/engineOptions"
import "./detailsChoosing.scss";
import EuroStandartOptions from "../../data/euroStandartOptions";
import ColorOptions from "../../data/colorOptions";
import Checkbox from "../../components/Checkbox";
import SafetyOptions from "../../data/safetyOptions";
import comfortOptions from "../../data/comfortOptions";
import SecurityOptions from "../../data/securityOptions";
import SpecialOptions from "../../data/specialOptions";
import ExteriorOptions from "../../data/exteriorOptions";
import InteriorOptions from "../../data/interiorOptions";
import VehicleCategories from "../../data/vehicleCategories";
import { handleChangeRegion, handleMainCategory, handleMakeCategory } from "../../store/options";
import { useDispatch, useSelector } from "react-redux";
import { addExtraParameter, addImages, addParameter, resetParams } from '../../store/addNewAd';
import { addNewAd } from '../../store/addedAds';
import { useEffect, useState } from 'react';
import { addNewActiveAd } from '../../store/activeUser';
import DefaultAds from "../../data/defaultAds";


export default function DetailsChoosing() {

    let location = useLocation();
    const newAds = useSelector(state => state.newAds);
    const navigate = useNavigate();
    const options = useSelector(state => state.options);
    const dispatch = useDispatch();
    const [pictures, setPictures] = useState([]);

    function func1(e) {
        dispatch(handleMainCategory(e.target.value))
    }
    function func2(e) {
        dispatch(handleChangeRegion(e.target.value))
    }
    function func3(e) {
        dispatch(handleMakeCategory(e.target.value))
    }


    useEffect(() => {
        if (newAds.id) {
            dispatch(addNewAd(newAds))
            dispatch(addNewActiveAd(newAds))
            navigate("/profile");
            dispatch(resetParams());
        } else {

        }
    }, [newAds.id, dispatch, navigate, newAds])

    function addParams(e) {
        dispatch(addParameter({
            name: e.target.name,
            value: e.target.value
        }))
    }
    function addExtraParams(e) {
        dispatch(addExtraParameter({
            id: e.target.value,
            label: e.target.name
        }))
    }

    useEffect(() => {
        if (location.pathname !== "/profile") {
            dispatch(resetParams());
        }
    }, [location.pathname, dispatch]);


    const tempArr = [];

    function handleImageUpload(e) {

        [...e.target.files].forEach(file => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                tempArr.push(reader.result)
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        });

        setPictures(tempArr);

    };

    function addPhoto(e) {

        dispatch(addImages(pictures))

    }

    return (
        <div className="newAddContainer">
            <span className="categoriesOutlineAddNew">
                <strong>
                    Въвеждане на описанието за <span>{options.mainCategory}</span>
                </strong>
            </span>
            <div className="AddNewAdTable" >

                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addParameter({
                        name: "id",
                        value: (JSON.parse(localStorage.getItem('mobile-added-ads')).length > 0 ?
                            ((JSON.parse(localStorage.getItem('mobile-added-ads')).length === 1 ?
                                JSON.parse(localStorage.getItem('mobile-added-ads'))[0].id + 1 :
<<<<<<< HEAD
                                Math.max(...JSON.parse(localStorage.getItem('mobile-added-ads')).map(e => e.id)) + 1)) :
                            (DefaultAds().defaultAds).length + 1)
=======
                                Math.max(...JSON.parse(localStorage.getItem("mobile-added-ads")).map(e => e.id)) + 1)) :
                            (DefaultAds().defaultAds).length + 1)

>>>>>>> 51cd24630d1e0260a761f44511b25b71de0fe696
                    }));
                   
                    dispatch(addParameter({
                        name: "isActive",
                        value: true
                    }))
                }} >

                    <div className="firstRowAddNew">
                        <div>
                            <p><strong>Основна категория *</strong></p>
                            <Select required selectedOption={options.selectedOption} onChange={e => { func1(e); addParams(e) }}
                                name="mainCategory" id="Овновна категория" options={CategoryOptions().categorieOptions} />
                        </div>
                        <div className="publicBtnAddNew">
                            <p className="nextStepInfo">*Полетата със * са задължителни</p>
                            <button type='submit' className="publicNewAd"><strong>Публикувай</strong></button>

                        </div>
                    </div>
                    <div className="secondRowAddNew">
                        <div className="makeAndModelAddNew">
                            <div className="makeAddNew">
                                <p><strong>Марка *</strong></p>
                                <Select required onChange={e => { func3(e); addParams(e) }} name="make" id="Марка" options={options.make} />
                            </div>
                            <div className="modelAddNew">
                                <p><strong>Модел *</strong></p>
                                <Select required name="model" id="Модел" options={options.model} onChange={addParams} />
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
                                <Select required className="engineSelectAddNew" name="engine" id="Двигател" onChange={addParams} options={EngineOptions().engine} />
                            </div>
                        </div>

                        <div className="conditionVehicleAddNew">
                            <p><strong>Състояние</strong></p>
                            <input className="conditionCheckboxAddNew" type="checkbox" id="condition1" name="condition1" value="new" />
                            <label className="conditionLabelAddNew" htmlFor="vehicle1">Ново</label>
                            <input className="conditionCheckboxAddNew" type="checkbox" id="condition2" name="condition2" value="used" />
                            <label className="conditionLabelAddNew" htmlFor="vehicle2">Употребяван</label>
                        </div>
                    </div>
                    <div className="thirdRowAddNew">
                        <div className="powerAndEuroAddNew">
                            <div className="powerAddNew">
                                <div>
                                    <p><strong>Мощност [к.с.] *</strong></p>
                                    <input required onChange={addParams} name='power' className="powerInputAddNew" type="number" />
                                </div>
                            </div>
                            <div className="euroAddNew">
                                <p><strong>Евростандарт *</strong></p>
                                <Select required className="euroSelectAddNew" name="euroStandart" id="Евростандарт" onChange={addParams} options={EuroStandartOptions().euroStandart} />
                            </div>
                        </div>
                        <div className="transmissionAddNew">
                            <p>
                                <strong>Скоростна кутия *</strong>
                            </p>
                            <Select required name="transmission" id="Скоростна кутия" onChange={addParams} options={TransmissionOptions().transmission} />
                        </div>
                        <div className="vehicleCategoryAddNew">
                            <p><strong>Категория</strong></p>
                            <Select className="vahicleSelectCatAddNew" name="vehicleCategory" id="Ктегория" onChange={addParams} options={VehicleCategories().vehicleCategories} />
                        </div>
                    </div>

                    <div className="fourthRowAddNew">
                        <div className="priceAddNew">
                            <p><strong>Цена *</strong></p>
                            <input name='price' onInput={addParams} required className="priceInputAddNew" type="number" />
                            <select onChange={addParams} name="currency" required className="currencySelectAddNew" id="selectInSearch">
                                <option value="BGN">лв.</option>
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <div className="yearAddnew">
                            <p><strong>Година *</strong></p>
                            <Select required className="yearSelectAddnew" name="date" id="Година" onChange={addParams} options={YearOptions().year} />
                        </div>
                        <div className="millageAddNew">
                            <p><strong>Пробег *</strong></p>
                            <input name='millage' onInput={addParams} required className="inputMillageAddNew" type="number" />
                            <label htmlFor="vehicleMillage">в километри</label>
                        </div>
                    </div>

                    <div className="fifthRowAddNew">
                        <div className="regionAddNew">
                            <p>
                                <strong>Регион *</strong>
                            </p>
                            <Select required className="regionSelectAddNew" onChange={(e) => { func2(e); addParams(e) }} name="region" id="Регион" options={RegionAndTownOptions().regionAndTownOptions} />
                        </div>
                        <div className="townAddNew">
                            <p>
                                <strong>Населено място *</strong>
                            </p>
                            <Select required className="townSelectAddNew" onChange={addParams} name="town" id="Населено място" options={options.town} />
                        </div>
                        <div className="colorAddNew">
                            <p>
                                <strong>Цвят *</strong>
                            </p>
                            <Select required className="colorSelectAddNew" name="color" id="Цвят" onChange={addParams} options={ColorOptions().colors} />
                        </div>


                        <div className="phoneNewAd">
                            <p><strong className="moreInfoText">Данни за връзка *</strong></p>
                            <input required name="contacts" onInput={addParams} className="phoneInput" type="number" />
                        </div>

                    </div>

                </form>


                <div className="checkBoxes">
                    <div className="firstColumn">
                        <p><strong>Безопасност</strong></p>
                        <Checkbox onChange={addExtraParams} name="extras" options={SafetyOptions().safetyOptions} />
                    </div>
                    <div className="secondColumn">
                        <p><strong>Комфорт</strong></p>
                        <Checkbox onChange={addExtraParams} name="extras" options={comfortOptions().comfortOptions} />
                    </div>
                    <div className="thirdColumn">
                        <p><strong>Защита</strong></p>
                        <Checkbox onChange={addExtraParams} name="extras" options={SecurityOptions().securityOptions} />
                    </div>
                    <div className="forthColumn">
                        <p><strong>Специални</strong></p>
                        <Checkbox onChange={addExtraParams} name="extras" options={SpecialOptions().specialOptions} />
                    </div>
                    <div className="fifthColumn">
                        <p><strong>Екстериор</strong></p>
                        <Checkbox onChange={addExtraParams} name="extras" options={ExteriorOptions().exteriorOptions} />
                    </div>
                    <div className="sixthColumn">
                        <p><strong>Интериор</strong></p>
                        <Checkbox onChange={addExtraParams} name="extras" options={InteriorOptions().interiorOptions} />
                    </div>
                </div>

                <div className="sixthRow">
                    <div className="moreInfoNewAd">
                        <p><strong>Допълнителна информация</strong></p>
                        <textarea name="moreInfo" onInput={addParams} id="moreInfo" cols="40" rows="6"></textarea>
                    </div>
                    <div className='addPhotoContainer'>
                        <p><strong>Добавяне на снимки</strong></p>
                        <div className="addNewPhotoInNewAd">
                            <input type="file" multiple
                                onChange={handleImageUpload}
                                accept="image/*"
                            />
                            {pictures?.map(pic => (
                                <img className="newImageUpload" alt='' key={pic} src={pic} />
                            ))}
                            <button type='button' onClick={addPhoto}>Добави снимките</button>
                        </div>
                    </div>
                </div>




            </div>




        </div>


    );
}

