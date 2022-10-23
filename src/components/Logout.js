import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/activeUser";

const Logout = () => {
    const dispatch = useDispatch();

    function handleLogout(){
        dispatch(logout());
    }

    return (

        <Link to={"/home"} onClick={handleLogout}><strong>Изход</strong></Link>

    );
}
 
export default Logout;