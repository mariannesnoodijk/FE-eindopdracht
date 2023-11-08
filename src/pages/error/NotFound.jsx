import './NotFound.css';
import {useNavigate} from 'react-router-dom';
import Button from "../../components/button/Button.jsx";

function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found-section outer-content-container">
            <div className="inner-content-container">
                <h1>404</h1>
                <h2>De pagina waar je naar zoekt bestaat niet</h2>
                <span>
                   <Button type="submit" variant="primary" onClick={() => navigate('/')}>bring me back home</Button>
                </span>
            </div>
        </section>
    );
}

export default NotFound;