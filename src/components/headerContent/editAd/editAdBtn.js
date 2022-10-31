import "./editAdBtn.scss";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
export default function EditAd() {

    const activeUser = useSelector(state => state.activeUser);
    
    return (
        <Link to={activeUser.email ? "/profile" : "/login"}>
            <button className="editButton" ><strong>РЕДАКЦИЯ НА ОБЯВА</strong></button>
        </Link>
    )
}