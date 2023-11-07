import './LoginPage.css';
import {useState} from "react";
import axios from "axios";
import Input from '../../components/input/Input.jsx';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";

export default function Login() {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [submitSuccessId, setSubmitSuccessId] = useState(null);
    const [error, toggleError] = useState(false)

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        console.log({
            ...formState
        });

        try {
            const response = await axios.post('http://localhost:8080/auth', {
                ...formState
            });
            console.log(response.data);

            console.log('You are successfully logged in.');
            setSubmitSuccessId(response.data.id);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <section className="new-general-form-section outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <div className="general-form-top">
                        <Link to='/'>Bring me back home</Link>
                        <h1>Login</h1>
                    </div>

                    {!submitSuccessId ?
                        <form className="general-form" onSubmit={handleSubmit}>
                            <h1>welcome back</h1>
                            <Input
                                type="email"
                                name="email"
                                labelText="email"
                                required={true}
                                formStateValue={formState.email}
                                handleChange={handleChange}
                            />
                            <Input
                                type="password"
                                name="password"
                                labelText="password"
                                required={true}
                                formStateValue={formState.password}
                                handleChange={handleChange}
                            />

                            <Button type="submit" variant="primary">login</Button>
                            {error && <p>Something went wrong with your login. Please try again.</p>}
                        </form>
                        : <p>Your login was successful.</p>}
                    </div>
            </section>
        </>
    );
}