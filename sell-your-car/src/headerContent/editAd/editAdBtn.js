import Button from 'react-bootstrap/Button';
import "./editAdBtn.css";

export default function EditAd() {

    return (
        <a href="/profile">
            <Button className="editButton" variant="outline-primary">Редакция на обява</Button>
        </a>
    )
}