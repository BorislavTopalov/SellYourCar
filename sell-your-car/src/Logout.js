import { Link } from "react-router-dom";

const Logout = (props) => {

    function handleLogout(){
        props.setActiveUser(null);
    }

    return (

        <Link to={"/home"} onClick={handleLogout}><strong>Изход</strong></Link>

    );
}
 
export default Logout;