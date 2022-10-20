import { FaCarSide, FaBusAlt, FaTruck, FaTractor, FaBicycle, FaCaravan, FaWrench } from "react-icons/fa";
import { MdTwoWheeler } from "react-icons/md";
import { GiSailboat, GiMoneyStack } from "react-icons/gi";
import "./categoryIcons.css";
import CategoryOptions from "../../data/categoryOptions";
import { useState } from "react";

export default function CategoryIcons(props) {

    let [mainCategory, setMainCategory] = useState(CategoryOptions().categorieOptions[0].value);

    function handleMainCategory(e) {
        mainCategory = setMainCategory(cat => cat = e.target.value);
        console.log(e.target.value);
    }

    return (

        <div className="homeContentTop">
            <FaCarSide className="homeIconsTop" value={CategoryOptions().categorieOptions[0].value} onClick={handleMainCategory}/>
            <FaBusAlt className="homeIconsTop" value={CategoryOptions().categorieOptions[1].value} />
            <FaTruck className="homeIconsTop" />
            <MdTwoWheeler className="homeIconsTop" />
            <FaTractor className="homeIconsTop" />
            <FaBicycle className="homeIconsTop" />
            <FaCaravan className="homeIconsTop" />
            <GiSailboat className="homeIconsTop" />
            <GiMoneyStack className="homeIconsTop" />
            <FaWrench className="homeIconsTop" />
        </div>
    )
}