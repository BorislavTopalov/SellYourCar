import { Link } from 'react-router-dom';
import "./addNewAd.scss";
import { useSelector } from "react-redux";
export default function AddNewAd() {
    const activeUser = useSelector(state => state.activeUser);

    return (
        <Link to={activeUser.email ? "/add-new" : "/login"}>
            <button className="buttonAddHeader"><strong>+ ДОБАВИ ОБЯВА</strong></button>
        </Link>
    )
}