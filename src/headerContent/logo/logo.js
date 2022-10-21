import logo from "../../headerContent/logo/logo.png";
import "./logoPng.css";
import { Link } from "react-router-dom";

export default function LogoLink() {

    return (
        
        <span>
           <Link to="/home">
            <img className="logoPng" src={logo} alt="" />
           </Link>
        </span>     

    )

}