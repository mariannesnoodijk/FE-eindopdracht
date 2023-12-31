import "./PageNotFound.css";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found__section outer-content__container">
            <div className="inner-content-container">
                <h1>404</h1>
                <h2>The page you are looking for, does not exist</h2>
                <span>
                   <Button type="button" variant="primary" onClick={() => navigate('/')}>bring me back home</Button>
                </span>
            </div>
        </section>
    );
}

export default PageNotFound;