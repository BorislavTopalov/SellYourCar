import "./loginLink.css"
import { Link } from "react-router-dom"

export default function LoginLink() {

    return (
        <Link className="loginBtn" to="/login">Вход</Link>
    )

}