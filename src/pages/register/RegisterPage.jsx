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
        role: '',
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

            console.log('You are successfully registered as a new user.');
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
                        {/*<h2>Hello first time visitor</h2>*/}
                        <h1>Register</h1>
                    </div>

                    {!submitSuccessId ?
                        <form className="general-form" onSubmit={handleSubmit}>
                            <h1>welcome</h1>
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
                            <Input
                                type="radio"
                                name="role"
                                labelText="admin"
                                required={true}
                                formStateValue={formState.role}
                                handleChange={handleChange}
                            />
                            <Input
                                type="radio"
                                name="role"
                                labelText="user"
                                required={true}
                                formStateValue={formState.role}
                                handleChange={handleChange}
                            />

                            <button type="submit" className="form-button">REGISTER</button>
                            {error && <p>Something went wrong with your registration. Please try again.</p>}
                        </form>
                        : <p>Your registration was successful. Your account information can be found <Link to={`/accounts/${submitSuccessId}`}>here</Link>.</p>}
            </div>
                </section>
        </>
    );
}