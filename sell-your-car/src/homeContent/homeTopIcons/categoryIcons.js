import {FaCarSide, FaBusAlt, FaTruck, FaTractor, FaBicycle, FaCaravan, FaWrench} from "react-icons/fa";
import {MdTwoWheeler} from "react-icons/md";
import {GiSailboat, GiMoneyStack} from "react-icons/gi";
import "./categoryIcons.css";

export default function CategoryIcons () {

    return (

        <span className="homeContentTop">
            <FaCarSide className="homeIconsTop"/>
            <FaBusAlt className="homeIconsTop"/>
            <FaTruck className="homeIconsTop"/>
            <MdTwoWheeler className="homeIconsTop"/>
            <FaTractor className="homeIconsTop"/>
            <FaBicycle className="homeIconsTop"/>
            <FaCaravan className="homeIconsTop"/>
            <GiSailboat className="homeIconsTop"/>
            <GiMoneyStack className="homeIconsTop"/>
            <FaWrench className="homeIconsTop"/>
        </span>
    )
}