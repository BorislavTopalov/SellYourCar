import { Link } from "react-router-dom";

const Logout = (props) => {

    function handleLogout(){
        props.setActiveUser(null);
        window.location.pathname = "home"
    }

    return (

        <Link to={"/home"} onClick={handleLogout}><strong>Изход</strong></Link>

    );
}
 
export default Logout;