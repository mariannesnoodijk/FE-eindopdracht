import './LoginPage.css';
import {useContext, useState} from "react";
import axios from "axios";
import Input from '../../components/forms input/Input.jsx';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import {useNavigate} from 'react-router-dom'
import InteriorImage from "../../assets/interior.jpg";
import {AuthContext} from "../../context/AuthContext.jsx";

function LoginPage() {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });
    const [submitSuccessId, setSubmitSuccessId] = useState(null);
//     const [loading, toggleLoading] = useState(false);
//     const [error, toggleError] = useState(false);
//     const {login} = useContext(AuthContext);
//
//     const navigate = useNavigate()
//
    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

//
//     async function handleSubmit(e) {
//         e.preventDefault();
//         toggleError(false);
//
//         try {
//             const response = await axios.post('http://localhost:8080/auth', {
//                 ...formState
//             });
//             console.log(response.data.accessToken);
//         } catch (e) {
//             console.error(e)
//         }
//
//         login();
// toggleError(false);
//
// console.log({
//     ...formState
// });
//
// try {
//     const response = await axios.post('http://localhost:8080/auth', {
//         ...formState
//     });
//     console.log(response.data);
//     // navigate('/')
//
//
//     console.log('You are successfully logged in.');
//     setSubmitSuccessId(response.data.id);
// } catch (e) {
//     console.error(e);
//     toggleError(true);
// }
// }

// function Login() {
    const {login} = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth', {
                username: formState.username,
                // username : '',
                password: formState.password,

            });
            console.log(response)
            // login(response.data.accessToken);


        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <section className="new-general-form-section outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <div className="general-form-top">
                        <h1>Login</h1>
                    </div>

                    {/*{!submitSuccessId ?*/}
                    <form className="general-form" onSubmit={handleSubmit}>
                        <img src={InteriorImage} alt="Image of the interior of a home"/>
                        <h1>welcome back</h1>
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

                        <Button type="submit" variant="primary">login</Button>
                        <div className="sub-message">
                            <p>Are you new on this page? <Link to="/register">Register an account first</Link></p>
                            <p><Link to='/'>Bring me back home</Link></p>
                        </div>
                        {/*{error && <p>Something went wrong with your login. Please try again.</p>}*/}
                    </form>
                    {/*: <p>Your login was successful.</p>}*/}
                </div>
            </section>
        </>
    );
}

export default LoginPage;