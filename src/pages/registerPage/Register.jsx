    import {useState} from "react";
    import axios from "axios";
    import Input from "../../components/forms input/Input.jsx";
    import {Link, useNavigate} from "react-router-dom";
    import Button from "../../components/button/Button.jsx";
    import InteriorImage from "../../assets/img/interior_1.jpg";
    import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

    function Register() {
        const [formState, setFormState] = useState({
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            role: '',
        });
        const [submitSuccessful, setSubmitSuccessful] = useState(null);
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

            try {
                const response = await axios.post('http://localhost:8080/accounts', {
                    ...formState
                });
                navigate('/login')

                localStorage.setItem('id', response.data.accountId)
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        return (
            <>
                <section className="new-general-form-section outer-content__container">
                    <div className="inner-content-container__text-restriction">
                        <div className="general-form__top-section">
                            <h1>Register</h1>
                        </div>
                        {!submitSuccessful ?
                            <form className="general-form" onSubmit={handleSubmit}>
                                <div className="general-form__left-side">
                                    <h1>welcome</h1>
                                    <Input
                                        type="text"
                                        name="firstname"
                                        labelText="first name"
                                        placeholder="Please type your first name here..."
                                        required={true}
                                        formStateValue={formState.firstname}
                                        handleChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        name="lastname"
                                        labelText="last name"
                                        placeholder="Please type your last name here..."
                                        required={true}
                                        formStateValue={formState.lastname}
                                        handleChange={handleChange}
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        labelText="email address"
                                        placeholder="Please type your email address here..."
                                        required={true}
                                        formStateValue={formState.email}
                                        handleChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        name="username"
                                        labelText="username"
                                        placeholder="Please type your username here..."
                                        required={true}
                                        formStateValue={formState.username}
                                        handleChange={handleChange}
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        labelText="password"
                                        placeholder="Please type your password here..."
                                        required={true}
                                        formStateValue={formState.password}
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
                                        <p>Do you already have an account with us? <Link to="/login">Try logging in</Link>
                                        </p>
                                        <p><Link to='/'>Bring me back home</Link></p>
                                    </div>
                                    {error &&
                                        <ErrorMessage message="Your registration was unsuccessful. Please try again."/>}
                                </div>
                                <img className="general-form__image" src={InteriorImage}
                                     alt="Image of the interior of a home"/>
                            </form>
                            : <p>Your registration was successful.</p>}

                    </div>
                </section>
            </>
        );
    }

    export default Register;