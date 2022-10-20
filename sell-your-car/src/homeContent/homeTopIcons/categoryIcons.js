import "./categoryIcons.scss";
import IconsShow from "../../data/iconsHomePage/icons";

export default function CategoryIcons(props) {

    return (

        <div className="homeContentTop">

            {IconsShow().iconsArr.map((icon, index) => {
                return <img src={icon} alt={index} key={index} className="homeIconsTop" /> 
            })}

        </div>
    )
}