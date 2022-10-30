import "./categoryIcons.scss";
import IconsShow from "../../../data/iconsHomePage/icons";
import { useDispatch } from "react-redux";
import { handleMainCategory } from "../../../store/options";
import { useState } from "react";
export default function CategoryIcons() {

    const [icons, setIcons] = useState(true)

    const dispatch = useDispatch();
    function func(e){
        dispatch(handleMainCategory(e.target.name))
    }

    function setActive (e) {
        setIcons(!icons)
    }
    return (

        <div className="homeContentTop">

            {IconsShow().iconsArr.map((icon) => {
                return <img src={icon.img} alt="..." onClick={(e) => {func(e); setIcons(!icons)}} key={icon.value} name={icon.value} 
                className={icons ? "homeIconsTop" : "homeIconsActive"}/>
            })}

        </div>
    )
}