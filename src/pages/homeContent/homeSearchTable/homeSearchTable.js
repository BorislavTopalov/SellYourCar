import "./homeSearchTable.scss"
import Select from "../../../components/Select"
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import SortOptions from "../../../data/sortOptions"
import RegionAndTownOptions from "../../../data/regionAndTownOptions"
import CategoryOptions from "../../../data/categoryOptions";
import YearOptions from "../../../data/yearOptions";
import TransmissionOptions from "../../../data/transmissionOptions"
import EngineOptions from "../../../data/engineOptions"
import { useDispatch, useSelector } from "react-redux";
import { handleChangeRegion, handleMainCategory, handleMakeCategory } from "../../../store/options";
import baner from "../../homeContent/homeSearchTable/lambo1copy.jpg"
import SmallCardsHomePage from "../smallCardsHomePage/smallCardsHomePage";
import { reset } from "../../../store/filters";
import { useEffect } from "react";
import { filter } from "../../../store/filterredAds";
import { addFilter } from "../../../store/filters";
import IconsShow from "../../../data/iconsHomePage/icons";

export default function HomeSearchTable(props) {

    let { value } = useParams();
    let navigate = useNavigate()
    const filters = useSelector(state => state.filters);
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

    let location = useLocation();
    useEffect(() => {
        if (location.pathname !== "/all-results") {
            dispatch(reset());
        }
    }, [location.pathname, dispatch]);

    function addFilters(e) {
        dispatch(addFilter({
            name: e.target.name,
            value: e.target.value
        }))
    }

    useEffect(() => {
        dispatch(filter(filters))
    }, [filters, dispatch]);

    return (

        <div className="homeSearchTable">
            <span className="categoriesOutlineTable">
                <strong>
                    ?????????????? ?? <span>{options.mainCategory}</span>
                </strong>
            </span>
            <div className="homePageContent">
                <div className="homeSearchTableAndNewestAds">
                    <span className="mainSearchHome">
                        <div className="mainCategories">
                            <div>
                                <p>
                                    <strong>?????????????? ??????????????????</strong>
                                </p>
                                <Select selectedOption={options.mainCategory} onChange={e => { func1(e); addFilters(e); navigate(`/home/${e.target.value}`) }}
                                    name="mainCategory" id="?????????????? ??????????????????" options={CategoryOptions().categorieOptions} />
                            </div>
                            <div>
                                {IconsShow().iconsArr.filter(list => list.value === value)
                                    .map((icon) => <img src={icon.img} alt="..." key={icon.value} className="iconSearchTable" name={icon.value} />)}
                            </div>

                        </div>
                        <div className="firstRowHomeTable">
                            <div className="makeAndModelHome">
                                <div className="makeSelectHome">
                                    <p>
                                        <strong>??????????</strong>
                                    </p>
                                    <Select onChange={e => { func3(e); addFilters(e) }} name="make" id="??????????" options={options.make} />
                                </div>
                                <div className="modelSelectHome">
                                    <p>
                                        <strong>??????????</strong>
                                    </p>
                                    <Select onChange={addFilters} name="model" id="??????????" options={options.model} />
                                </div>
                            </div>
                            <div className="regionAndTown">
                                <div className="regionSelectHome">
                                    <p>
                                        <strong>????????????</strong>
                                    </p>
                                    <Select onChange={e => { func2(e); addFilters(e) }} name="region" id="????????????" options={RegionAndTownOptions().regionAndTownOptions} />
                                </div>
                                <div className="townSelectHome">
                                    <p>
                                        <strong>???????????????? ??????????</strong>
                                    </p>
                                    <Select onChange={addFilters} name="town" id="???????????????? ??????????" options={options.town} />
                                </div>
                            </div>
                        </div>
                        <div className="secondRowHomeTable">
                            <div className="priceAndYear">
                                <div className="priceInputHome">
                                    <p>
                                        <strong>???????????????????? ????????</strong>
                                    </p>
                                    <input onChange={addFilters} className="inputPriceHome" name="priceTo" type="text" onInput={props.handlePrice} />
                                </div>
                                <div className="yearSelectHome">
                                    <p>
                                        <strong>????????????</strong>
                                    </p>
                                    <Select onChange={addFilters} name="yearFrom" id="????????????" options={YearOptions().year} />
                                </div>
                            </div>
                            <div className="sortAdHome">
                                <p>
                                    <strong>?????????????? ?????????????????????? ???????????? :</strong>
                                </p>
                                <Select onChange={addFilters} name="sort" id="??????????????????" options={SortOptions().sortOptions} />
                            </div>
                        </div>
                        <div className="thirdRowHomeTable">
                            <div className="engineAndTransmission">
                                <div className="engineSelectHome">
                                    <p>
                                        <strong>????????????????</strong>
                                    </p>
                                    <Select onChange={addFilters} name="engine" id="????????????????" options={EngineOptions().engine} />
                                </div>
                                <div className="transmissionSelectHome">
                                    <p>
                                        <strong>?????????????????? ??????????</strong>
                                    </p>
                                    <Select onChange={addFilters} name="transmission" id="?????????????????? ??????????" options={TransmissionOptions().transmission} />
                                </div>
                            </div>
                            <Link className="SearchBtnHomeTable" to="/all-results"><button><strong>??????????</strong></button></Link>

                        </div>
                        <Link className="detailSearchLink" to="/detail-searching">???????????????? ??????????????</Link>
                    </span>
                    <SmallCardsHomePage />
                </div>
                <div className="banerContainer">
                    <img src={baner} alt="baner" className="labmoHomePage" />

                </div>
            </div>



        </div>
    )
}
