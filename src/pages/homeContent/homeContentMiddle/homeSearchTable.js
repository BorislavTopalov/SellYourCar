import "./homeSearchTable.scss"
import Select from "../../../components/Select"
import { Link } from "react-router-dom";
import SortOptions from "../../../data/sortOptions"
import RegionAndTownOptions from "../../../data/regionAndTownOptions"
import CategoryOptions from "../../../data/categoryOptions";
import YearOptions from "../../../data/yearOptions";
import TransmissionOptions from "../../../data/transmissionOptions"
import EngineOptions from "../../../data/engineOptions"
import { useDispatch, useSelector } from "react-redux";
import { handleChangeRegion, handleMainCategory, handleMakeCategory } from "../../../redux/options";

export default function HomeSearchTable(props) {

    const options = useSelector(state => state.options);
    const dispatch = useDispatch();
    function func1(e){
        dispatch(handleMainCategory(e.target.value))
    }
    function func2(e){
        dispatch(handleChangeRegion(e.target.value))
    }
    function func3(e){
        dispatch(handleMakeCategory(e.target.value))
    }

    return (

        <div className="homeSearchTable">
            <span className="categoriesOutlineTable">
                <strong>
                    Търсене в <span>{options.mainCategory}</span>
                </strong>
            </span>

            <div className="mainSearchHome">
                <div className="mainCategories">
                    <p>
                        <strong>Основна Категория</strong>
                    </p>
                    <Select selectedOption={options.selectedOption} onChange={func1} name="Основна категория" id="Овновна категория" options={CategoryOptions().categorieOptions} />
                </div>
                <div className="firstRowHomeTable">
                    <div className="makeAndModelHome">
                        <div className="makeSelectHome">
                            <p>
                                <strong>Марка</strong>
                            </p>
                            <Select onChange={func3} name="Марка" id="Марка" options={options.make} />
                        </div>
                        <div className="modelSelectHome">
                            <p>
                                <strong>Модел</strong>
                            </p>
                            <Select name="Модел" id="Модел" options={options.model} />
                        </div>
                    </div>
                    <div className="regionAndTown">
                        <div className="regionSelectHome">
                            <p>
                                <strong>Регион</strong>
                            </p>
                            <Select onChange={func2} name="Регион" id="Регион" options={RegionAndTownOptions().regionAndTownOptions} />
                        </div>
                        <div className="townSelectHome">
                            <p>
                                <strong>Населено място</strong>
                            </p>
                            <Select name="Населено място" id="Населено място" options={options.town} />
                        </div>
                    </div>
                </div>
                <div className="secondRowHomeTable">
                    <div className="priceAndYear">
                        <div className="priceInputHome">
                            <p>
                                <strong>Максимална цена</strong>
                            </p>
                            <input className="inputPriceHome" type="text" onInput={props.handlePrice} />
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
                    <Link className="SearchBtnHomeTable" to="/all-results"><button><strong>Търси</strong></button></Link>

                </div>
                <Link className="detailSearchLink" to="/detail-searching">Подробно търсене</Link>
            </div>


        </div>
    )
}
