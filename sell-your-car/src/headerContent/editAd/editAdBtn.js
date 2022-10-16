// import Button from 'react-bootstrap/Button';
import "./editAdBtn.css";
import { Link } from 'react-router-dom';

export default function EditAd(props) {

    return (
        <Link to={props.activeUser ? "/profile" : "/login"}>
            <button className="editButton" ><strong>РЕДАКЦИЯ НА ОБЯВА</strong></button>
        </Link>
    )
}