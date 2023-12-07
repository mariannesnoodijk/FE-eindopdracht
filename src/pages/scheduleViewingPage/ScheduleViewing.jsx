import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Input from "../../components/forms input/Input.jsx";
import Button from "../../components/button/Button.jsx";
import InteriorImage from "../../assets/img/interior_2.jpg";

function ScheduleViewing() {
    const [formState, setFormState] = useState({
        accountId: '',
        fullname: '',
        phonenumber: '',
        email: '',
        date: '',
        time: '',
    });
    const [submitSuccessful, setSubmitSuccessful] = useState(null);
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

        try {
            const response = await axios.post('http://localhost:8080/viewings', {
                ...formState
            });
            setSubmitSuccessful(response.data.id);
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
                        <Link to='/'>Bring me back home</Link>
                        <h1>schedule your viewing</h1>
                    </div>

                    {!submitSuccessful ?
                        <form className="general-form" onSubmit={handleSubmit}>
                            <div className="general-form__left-side">
                            <Input
                                type="text"
                                name="fullname"
                                labelText="Fill in your full name"
                                placeholder="Please type your full name here..."
                                required={true}
                                formStateValue={formState.fullname}
                                handleChange={handleChange}
                            />
                            <Input
                                type="text"
                                name="phonenumber"
                                labelText="Fill in your phone number"
                                placeholder="Please type your phone number here..."
                                required={true}
                                formStateValue={formState.phonenumber}
                                handleChange={handleChange}
                            />
                            <Input
                                type="email"
                                name="email"
                                labelText="Fill in your email address"
                                placeholder="Please type your email address here..."
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
                                <div className="general-form__button">
                            <Button type="submit" variant="primary">send</Button>
                                </div>
                            <div className="sub-message">
                            <p><Link to='/'>Bring me back home</Link></p>
                            </div>
                            {error && <p className="error-message">Oops, something went wrong. Please try again</p>}
                            </div>
                            <img className="general-form__image" src={InteriorImage}
                                 alt="Image of the interior of a home"/>
                        </form>
                        : <p>Scheduling a viewing was successful. You can find calendar details <Link
                            to={`/profile`}>here</Link></p>}
                </div>
            </section>
        </>
    );
}

export default ScheduleViewing;