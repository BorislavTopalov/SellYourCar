import Select from "../../components/Select";
import { Link, useLocation } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { addFilter, reset, addExtra } from "../../store/filters";
import { filter } from "../../store/filterredAds";
import { useEffect, useState } from "react";
import VehicleCategories from "../../data/vehicleCategories";

const DetailedSearch = () => {

    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const [mainCategory, setMainCategory] = useState(CategoryOptions().categorieOptions[0].value);
    const [make, setMake] = useState(CategoryOptions().categorieOptions[0].make);
    const [model, setModel] = useState(CategoryOptions().categorieOptions[0].make[0].model);
    const [town, setTown] = useState(RegionAndTownOptions().regionAndTownOptions[0].town);
    const [selectedOption, setSelectedOption] = useState(CategoryOptions().categorieOptions[0])

    let location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/all-results") {
            dispatch(reset());
        }
    }, [location.pathname, dispatch]);

    function func1(e) {
        setMake(CategoryOptions().categorieOptions.find((el) => el.value === e.target.value).make);
        setMainCategory(e.target.value)
    }
    function func2(e) {
        setTown(RegionAndTownOptions().regionAndTownOptions.find((el) => el.value === e.target.value).town);
    }
    function func3(e) {
        setModel(make.find((el) => el.value === e.target.value).model);
    }
    useEffect(() => {
        setSelectedOption(mainCategory);
        setMake(make);
    }, [mainCategory, make])

    function addFilters(e) {
        dispatch(addFilter({
            name: e.target.name,
            value: e.target.value
        }))
    }

    function addExtras(e) {
        dispatch(addExtra(e.target.value))
    }

    useEffect(() => {
        dispatch(filter(filters))
    }, [filters, dispatch])

    return (
        <div className="detailedSearchContainer">
            <span className="categoriesOutlineAddNew">
                <strong>
                    ?????????????????? ???? ???????????????????? ???? <span>{mainCategory}</span>
                </strong>
            </span>
            <div className="searchTable">
                <div className="firstRow">
                    <div className="selectorMainCategory">
                        <p><strong>?????????????? ??????????????????</strong></p>
                        <Select selectedOption={selectedOption} onChange={e => { func1(e); addFilters(e) }} name="mainCategory" id="mainCategory" options={CategoryOptions().categorieOptions} />
                    </div>

                    <div className="checkBoxesAndButton">

                        <div className="conditionVehicleDeatiledSearch">
                            <p><strong>??????????????????</strong></p>
                            <input className="conditionCheckbox" type="checkbox" id="condition1" name="condition1" value="new" />
                            <label className="conditionLabel" htmlFor="vehicle1">????????</label>
                            <input className="conditionCheckbox" type="checkbox" id="condition2" name="condition2" value="used" />
                            <label className="conditionLabel" htmlFor="vehicle2">??????????????????????</label>
                        </div>

                        <Link to="/all-results"><button className="searchBtnDetailedSearch"><strong>??????????</strong></button></Link>

                    </div>
                </div>
                <div className="forthRow">
                    <div className="makeAndModelDetailSearch">
                        <div className="makeDetailSearch">
                            <p><strong>??????????</strong></p>
                            <Select onChange={e => { func3(e); addFilters(e) }} name="make" id="make" options={make} />
                        </div>
                        <div className="ModelDetailSearch">
                            <p><strong>??????????</strong></p>
                            <Select onChange={addFilters} name="model" id="model" options={model} />
                        </div>
                    </div>
                    <div className="yearDetailedSearch">
                        <div className="yearFromDetailedSearch">
                            <p><strong>???????????? ????</strong></p>
                            <Select onChange={addFilters} name="yearFrom" id="yearFrom" options={YearOptions().year} />
                        </div>
                        <div className="yearToDetailedSearch">
                            <p><strong>????</strong></p>
                            <Select onChange={addFilters} name="yearTo" id="yearTo" options={YearOptions().year} />
                        </div>
                    </div>
                    <div className="sortDetailedSearch">
                        <p><strong>?????????????????? ????????????</strong></p>
                        <Select onChange={addFilters} name="sort" id="sort" options={SortOptions().sortOptions} />
                    </div>
                </div>

                <div className="fifthRow">
                    <div className="priceDeatiledSearch">
                        <div className="priceInputFrom">
                            <p><strong>???????? ????</strong></p>
                            <input onChange={addFilters} name="priceFrom" min="0" className="inputPriceFrom" type="number" id="from" />
                        </div>
                        <div className="priceInputTo">
                            <p><strong>????</strong></p>
                            <input onChange={addFilters} name="priceTo" min="0" className="inputPriceTo" type="number" id="to" />
                            <select onChange={addFilters} name="currency" id="curencySelectDetailedSearch">
                                <option value="??????????">??????????</option>
                                <option value="????.">????.</option>
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>



                    </div>
                    <div className="powerDetailedSearch">
                        <div>
                            <p><strong>?????????????? ????</strong></p>
                            <input onChange={addFilters} name="powerFrom" min="0" className="powerFrom" type="number" />
                        </div>
                        <div>
                            <p><strong>????</strong></p>
                            <input onChange={addFilters} name="powerTo" min="0" className="powerTo" type="number" />
                        </div>
                    </div>
                    <div className="euroDetailedSearch">
                        <p><strong>????????????????????????</strong></p>
                        <Select onChange={addFilters} name="euro" id="euro" options={EuroStandartOptions().euro} />
                    </div>
                    <div className="vehicleCategoryAddNew">
                        <p><strong>??????????????????</strong></p>
                        <Select className="vahicleSelectCatAddNew" name="vehicleCategory" id="????????????????" onChange={addFilters} options={VehicleCategories().vehicleCategories} />
                    </div>
                </div>

                <div className="sixthRow">
                    <div className="engineDetailedSearch">
                        <p>
                            <strong>?????? ????????????????</strong>
                        </p>
                        <Select onChange={addFilters} name="engine" id="????????????????" options={EngineOptions().engine} />
                    </div>
                    <div className="transmissionDetailedSearch">
                        <p>
                            <strong>?????????????????? ??????????</strong>
                        </p>
                        <Select onChange={addFilters} name="transmission" id="?????????????????? ??????????" options={TransmissionOptions().transmission} />
                    </div>
                    <div className="distanceDetailedSearch">
                        <p>
                            <strong>????????. ???????????? ?? ????.</strong>
                        </p>
                        <Select onChange={addFilters} name="maxMillage" id="???????? ????????????" options={MaxMileageOptions().maxMileage} />
                    </div>
                    <div className="colorDetailedSearch">
                        <p>
                            <strong>????????</strong>
                        </p>
                        <Select onChange={addFilters} name="color" id="color" options={ColorOptions().colors} />
                    </div>
                    <div className="regionDetailedSearch">
                        <p>
                            <strong>????????????</strong>
                        </p>
                        <Select onChange={e => { func2(e); addFilters(e) }} name="region" id="????????????" options={RegionAndTownOptions().regionAndTownOptions} />
                    </div>
                    <div className="townDetailedSearch">
                        <p>
                            <strong>???????????????? ??????????</strong>
                        </p>
                        <Select onChange={addFilters} name="town" id="???????????????? ??????????" options={town} />
                    </div>
                </div>
                <div className="checkBoxes">
                    <div className="firstColumn">
                        <p><strong>??????????????????????</strong></p>
                        <Checkbox onChange={addExtras} name="extras" options={SafetyOptions().safetyOptions} />
                    </div>
                    <div className="secondColumn">
                        <p><strong>??????????????</strong></p>
                        <Checkbox onChange={addExtras} name="extras" options={comfortOptions().comfortOptions} />
                    </div>
                    <div className="thirdColumn">
                        <p><strong>????????????</strong></p>
                        <Checkbox onChange={addExtras} name="extras" options={SecurityOptions().securityOptions} />
                    </div>
                    <div className="forthColumn">
                        <p><strong>??????????????????</strong></p>
                        <Checkbox onChange={addExtras} name="extras" options={SpecialOptions().specialOptions} />
                    </div>
                    <div className="fifthColumn">
                        <p><strong>??????????????????</strong></p>
                        <Checkbox onChange={addExtras} name="extras" options={ExteriorOptions().exteriorOptions} />
                    </div>
                    <div className="sixthColumn">
                        <p><strong>????????????????</strong></p>
                        <Checkbox onChange={addExtras} name="extras" options={InteriorOptions().interiorOptions} />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default DetailedSearch;