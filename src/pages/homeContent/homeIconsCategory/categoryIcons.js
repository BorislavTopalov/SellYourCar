import "./categoryIcons.scss";
import IconsShow from "../../../data/iconsHomePage/icons";
import { useDispatch } from "react-redux";
import { handleMainCategory } from "../../../store/options";
import { useNavigate } from "react-router-dom";
export default function CategoryIcons() {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    function func(e) {
        dispatch(handleMainCategory(e.target.name));
    }

    return (

        <div className="homeContentTop">

            {IconsShow().iconsArr
                .map((icon) => {
                    return <img src={icon.img} alt="..." onClick={(e) => { func(e); navigate(`/home/${icon.value}`) }}
                        key={icon.value} name={icon.value}
                        className="homeIconsTop" />
                })}

        </div>
    )
}