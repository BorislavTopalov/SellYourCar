import logo from "../logo/logo.png";
import "./logoPng.scss";
import { Link } from "react-router-dom";
import CategoryOptions from "../../../data/categoryOptions";

export default function LogoLink() {

    return (
        
        <span>
           <Link to={`/home/${CategoryOptions().categorieOptions[0].value}`}>
            <img className="logoPng" src={logo} alt="" />
           </Link>
        </span>     

    )

}