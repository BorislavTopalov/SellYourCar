import { Link } from 'react-router-dom';
import "./addNewAd.scss";

export default function AddNewAd(props) {

    return (
        <Link to={props.activeUser ? "/addNew" : "/login"}>
            <button className="buttonAddHeader"><strong>+ ДОБАВИ ОБЯВА</strong></button>
        </Link>
    )
}