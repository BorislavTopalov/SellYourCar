import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function AddNewAd(props) {

    return (
        <Link to={props.activeUser ? "/addNew" : "/login"}>
            <Button variant="primary">+ ДОБАВИ ОБЯВА</Button>
        </Link>
    )
}