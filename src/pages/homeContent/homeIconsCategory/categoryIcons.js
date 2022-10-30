import "./categoryIcons.scss";
import IconsShow from "../../../data/iconsHomePage/icons";
import { useDispatch } from "react-redux";
import { handleMainCategory } from "../../../store/options";
import { useNavigate, useParams } from "react-router-dom";
import { addFilter } from "../../../store/filters";
export default function CategoryIcons() {

    let {value} = useParams()
    let navigate = useNavigate()
    console.log(value);

    const dispatch = useDispatch();
    function func(e) {
        dispatch(handleMainCategory(e.target.name))
    }
    function addFilters(e) {
        dispatch(addFilter({
            name: "mainCategory",
            value: e.target.name
        }))
        console.log(e.target.name);
    }

    return (

        <div className="homeContentTop">

            {IconsShow().iconsArr
            .map((icon) => {
                return <img src={icon.img} alt="..." onClick={(e) => { func(e); navigate(`/home/${icon.value}`)}} 
                key={icon.value} name={icon.value}
                    className="homeIconsTop"/>
            })}

        </div>
    )
}