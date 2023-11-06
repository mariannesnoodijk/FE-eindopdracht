import './LoginPage.css';
import {useState} from "react";
import axios from "axios";
import Input from '../../components/input/Input.jsx';
import {Link} from "react-router-dom";

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

            console.log('Je bent successvol ingelogd.');
            setSubmitSuccessId(response.data.id);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <div className="outer-content-container">
                <section className="inner-content-container__text-restriction">
                    <div className="login-top">
                        <h2>Nice to see you again</h2>
                        <h1>Welcome back</h1>
                    </div>

                    {!submitSuccessId ?
                        <form className="login-form" onSubmit={handleSubmit}>
                            <h1>login</h1>
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

                            <button type="submit" className="form-button">LOGIN</button>
                            {error && <p>Er is iets misgegaan bij het inloggen. Probeer het opnieuw</p>}
                        </form>
                        : <p>Het inloggen is gelukt. Je account informatie is <Link
                            to={`/accounts/${submitSuccessId}`}>hier</Link> te vinden</p>}
                </section>
            </div>
        </>
    );
}