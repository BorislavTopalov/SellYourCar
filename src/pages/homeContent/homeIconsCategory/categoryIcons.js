import "./categoryIcons.scss";
import IconsShow from "../../../data/iconsHomePage/icons";
import { useDispatch } from "react-redux";
import { handleMainCategory } from "../../../redux/options";
export default function CategoryIcons(props) {

    const dispatch = useDispatch();
    function func(e){
        dispatch(handleMainCategory(e.target.name))
    }
    return (

        <div className="homeContentTop">

            {IconsShow().iconsArr.map((icon) => {
                return <img src={icon.img} alt="..." onClick={func} key={icon.value} name={icon.value} className="homeIconsTop" />
            })}

        </div>
    )
}