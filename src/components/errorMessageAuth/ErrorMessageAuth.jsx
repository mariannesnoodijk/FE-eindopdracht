import "./ErrorMessageAuth.css";
import {Link} from "react-router-dom";

function ErrorMessageAuth() {
    return (
        <>
        <p className="error-message">You do not have the right credentials. Please log in or register.</p>
            <div className="sub-message">
                <p>Do you already have an account with us? <Link className="sub-message__links" to="/login">Try logging in</Link></p>
                <p>Do you not have an account with us? <Link className="sub-message__links" to="/register">Register
                    an account first</Link></p>
                <p><Link className="sub-message__links" to='/'>Bring me back home</Link></p>
            </div>
        </>
    );
}

export default ErrorMessageAuth;