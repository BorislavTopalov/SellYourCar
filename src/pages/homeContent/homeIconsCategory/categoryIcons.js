import "./categoryIcons.scss";
import IconsShow from "../../../data/iconsHomePage/icons";
import { useDispatch } from "react-redux";
import { handleMainCategory } from "../../../store/options";
import { addFilter } from "../../../store/filters";
export default function CategoryIcons(props) {

    const dispatch = useDispatch();
    function func(e){
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

            {IconsShow().iconsArr.map((icon) => {
                return <img src={icon.img} alt="..." onClick={e => { func(e); addFilters(e) }} key={icon.value} name={icon.value} className="homeIconsTop" />
            })}

        </div>
    )
}