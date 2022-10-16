import logo from "../../headerContent/logo/logo.png";
import "./logoPng.css";

export default function LogoLink() {

    return (
        
        <span>
           <a href="/home">
            <img className="logoPng" src={logo} alt="" />
           </a>
        </span>     

    )

}