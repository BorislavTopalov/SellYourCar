import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function AddNewAd() {

    return (
        <Link to="/addNew">
            <Button variant="primary">+ ДОБАВИ ОБЯВА</Button>
        </Link>
    )
}