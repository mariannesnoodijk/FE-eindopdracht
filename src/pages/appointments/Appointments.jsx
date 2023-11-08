import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Input from "../../components/forms input/Input.jsx";
import Button from "../../components/button/Button.jsx";

export default function Appointments() {
    const [formState, setFormState] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        date: '',
        time: '',
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
            const response = await axios.post('http://localhost:8083/viewings', {
                ...formState
            });
            console.log(response.data);

            console.log('Your appointment has been made.');
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
                        <h1>Make your appointment</h1>
                    </div>

                    {!submitSuccessId ?
                        <form className="general-form" onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="fullname"
                                labelText="Fill in your full name"
                                required={true}
                                formStateValue={formState.fullname}
                                handleChange={handleChange}
                            />
                            <Input
                                type="text"
                                name="phonenumber"
                                labelText="Fill in your phone number"
                                required={true}
                                formStateValue={formState.phonenumber}
                                handleChange={handleChange}
                            />
                            <Input
                                type="email"
                                name="email"
                                labelText="Fill in your email address"
                                required={true}
                                formStateValue={formState.email}
                                handleChange={handleChange}
                            />
                            <Input
                                type="date"
                                name="date"
                                labelText="Fill in your preferred date"
                                required={true}
                                formStateValue={formState.date}
                                handleChange={handleChange}
                            />
                            <Input
                                type="time"
                                name="time"
                                labelText="Fill in your preferred time"
                                required={true}
                                formStateValue={formState.time}
                                handleChange={handleChange}
                            />

                            <Button type="submit" variant="primary">send</Button>
                            {error && <p>Er is iets misgegaan bij het inloggen. Probeer het opnieuw</p>}
                        </form>
                        : <p>Het maken van je afspraak is gelukt. Je account informatie is <Link
                            to={`/accounts/${submitSuccessId}`}>hier</Link> te vinden</p>}
                </div>
                {/*</div>*/}
            </section>
        </>
    );
}