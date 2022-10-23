import "./categoryIcons.scss";
import IconsShow from "../../../data/iconsHomePage/icons";

export default function CategoryIcons(props) {

    return (

        <div className="homeContentTop">

            {IconsShow().iconsArr.map((icon) => {
                return <img src={icon.img} alt="..." onClick={props.onClick} key={icon.value} name={icon.value} className="homeIconsTop" />
            })}

        </div>
    )
}