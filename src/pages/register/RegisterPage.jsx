import './RegisterPage.css';
import {useState} from "react";
import axios from "axios";
import Input from '../../components/input/Input.jsx';
import {Link} from "react-router-dom";

export default function Register() {
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        emailaddress: '',
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

            console.log('Je bent successvol geregistreerd als nieuwe gebruiker.');
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
                    <div className="register-top">
                        <h2>Hello first time visitor</h2>
                        <h1>Welcome</h1>
                    </div>

                    {!submitSuccessId ?
                        <form className="register-form" onSubmit={handleSubmit}>
                            <h1>register</h1>
                            <Input
                                type="text"
                                name="firstname"
                                labelText="first name"
                                required={true}
                                formStateValue={formState.firstname}
                                handleChange={handleChange}
                            />
                            <Input
                                type="text"
                                name="lastname"
                                labelText="last name"
                                required={true}
                                formStateValue={formState.lastname}
                                handleChange={handleChange}
                            />
                            <Input
                                type="text"
                                name="phonenumber"
                                labelText="phone number"
                                required={true}
                                formStateValue={formState.phonenumber}
                                handleChange={handleChange}
                            />
                            <Input
                                type="email"
                                name="emailaddress"
                                labelText="email address"
                                required={true}
                                formStateValue={formState.emailaddress}
                                handleChange={handleChange}
                            />

                            <button type="submit" className="form-button">LOGIN</button>
                            {error && <p>Er is iets misgegaan bij het inloggen. Probeer het opnieuw</p>}
                        </form>
                        : <p>Het inloggen is gelukt. Je account informatie is <Link to={`/accounts/${submitSuccessId}`}>hier</Link> te vinden</p>}
                </section>
            </div>


            {/*<div className="register-wrapper">*/}
            {/*    <div className="register-leftSide">*/}
            {/*        <h2>Hi, nice to see you</h2>*/}
            {/*        <h1>Welcome</h1>*/}
            {/*    </div>*/}

            {/*    <div className="register-rightSide">*/}
            {/*        <form className="register" onSubmit={handleSubmit}>*/}
            {/*            <h1>Register</h1>*/}
            {/*            <label htmlFor="form-email">EMAIL</label>*/}
            {/*            <input*/}
            {/*                type="email"*/}
            {/*                id="form-email"*/}
            {/*                name="email"*/}
            {/*                placeholder="ENTER YOUR EMAIL ADDRESS HERE"*/}
            {/*                value={formState.email}*/}
            {/*                onChange={handleChange}*/}
            {/*            />*/}
            {/*            <button type="submit" className="form-button">REGISTER</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}