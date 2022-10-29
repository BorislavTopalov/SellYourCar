import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/activeUser";

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