import "./RegisterPage.css";
import {useState} from "react";
import axios from "axios";
import Input from "../../components/forms input/Input.jsx";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import InteriorImage from "../../assets/otherImages/interior.jpg";

export default function Register() {
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        role: '',
        // role: [], __> check wat in back staat!
    });

    const [error, toggleError] = useState(false)

    const navigate = useNavigate()

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        console.log('form', {
            ...formState
        });

        navigate('/login')

        try {
            const response = await axios.post('http://localhost:8080/accounts', {
                ...formState
            });
            console.log('response', response.data);
            // navigate('/login')

            console.log('You are successfully registered as a new user.');
            console.log(response.data.accountId);
localStorage.setItem('id', response.data.accountId)
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
                        <h1>Register</h1>
                    </div>

                        <form className="general-form" onSubmit={handleSubmit}>
                            {/*<div className="general-form-img">*/}
                            <img src={InteriorImage} alt="Image of the interior of a home"/>
                            {/*</div>*/}
                            {/*<div className="general-form-input">*/}
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
                                name="username"
                                labelText="username"
                                required={true}
                                formStateValue={formState.username}
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
                            <Input
                                type="email"
                                name="email"
                                labelText="email address"
                                required={true}
                                formStateValue={formState.email}
                                handleChange={handleChange}
                            />
                            <Input
                                type="radio"
                                name="role"
                                labelText="admin"
                                required={true}
                                formStateValue="ADMIN"
                                handleChange={handleChange}
                            />
                            <Input
                                type="radio"
                                name="role"
                                labelText="user"
                                required={true}
                                formStateValue="USER"
                                handleChange={handleChange}
                            />

                            <Button type="submit" variant="primary">register</Button>
                            <div className="sub-message">
                            <p>Do you already have an account with us? <Link to="/login">Try logging in</Link></p>
                                <p><Link to='/'>Bring me back home</Link></p>
                            </div>
                            {error && <p>Something went wrong with your registration. Please try again.</p>}
                            {/*</div>*/}
                        </form>

            </div>
                </section>
        </>
    );
}