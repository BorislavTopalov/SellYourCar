import Button from 'react-bootstrap/Button';
import "./editAdBtn.css";
import { Link } from 'react-router-dom';

export default function EditAd() {

    return (
        <Link to="/profile">
            <Button className="editButton" variant="outline-primary">Редакция на обява</Button>
        </Link>
    )
}