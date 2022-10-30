import "./categoryIcons.scss";
import IconsShow from "../../../data/iconsHomePage/icons";
import { useDispatch } from "react-redux";
import { handleMainCategory } from "../../../store/options";
import { addFilter } from "../../../store/filters";
import { useState } from "react";
export default function CategoryIcons() {

    const [icons, setIcons] = useState(true)

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

    function setActive (e) {
        setIcons(!icons)
    }
    return (

        <div className="homeContentTop">

            {IconsShow().iconsArr.map((icon) => {
                return <img src={icon.img} alt="..." onClick={e => {func(e); setIcons(!icons); addFilters(e)}} key={icon.value} name={icon.value} 
                className={icons ? "homeIconsTop" : "homeIconsActive"}/>
            })}

        </div>
    )
}