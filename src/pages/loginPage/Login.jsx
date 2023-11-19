import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Input from "../../components/forms input/Input.jsx";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom"
import InteriorImage from "../../assets/img/interior_1.jpg";
import {AuthContext} from "../../context/AuthContext.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";

function Login() {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        rolename: '',
    });
    const [submitSuccessful, setSubmitSuccessful] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);


    useEffect(() => {
        // handleSubmit()
    }, []);

    // const {login} = useContext(AuthContext);
    // const {user} = useContext(AuthContext);
    // console.log(user.rolename)
    const navigate = useNavigate();


    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }


    async function handleSubmit(e) {
        e.preventDefault();
        console.log('form', {
            ...formState
        });

        try {
            const response = await axios.post('http://localhost:8080/auth', {
                username: formState.username,
                password: formState.password,
                rolename: formState.rolename,
            });
            console.log(response);
            login(response.data);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <section className="login__section outer-content__container">
                <div className="inner-content-container__text-restriction">
                    <div className="general-form__top-section">
                        <h1>Login</h1>
                    </div>

                    {!submitSuccessful ?
                        <form className="general-form" onSubmit={handleSubmit}>
                            {/*<div className="general-form__right-side">*/}
                            {/*</div>*/}
                            <div className="general-form__left-side">
                                <h1>welcome back</h1>
                                {/*<div className="general-form__input">*/}
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
                                <div className="general-form__button">
                                    <Button type="submit"
                                            variant="primary">login</Button>
                                </div>
                                <div className="sub-message">
                                    <p>Are you new on this page? <Link className="sub-message__links" to="/register">Register
                                        an account first</Link></p>
                                    <p><Link className="sub-message__links" to='/'>Bring me back home</Link></p>
                                </div>
                                {error && <ErrorMessage message="Your login was unsuccessful. Please try again."/>}
                            </div>
                            <img className="general-form__image" src={InteriorImage}
                                 alt="Image of the interior of a home"/>
                        </form>
                        : <p>Your login was successful.</p>}
                </div>
            </section>
        </>
    );
}

export default Login;