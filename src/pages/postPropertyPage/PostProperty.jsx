import {useContext, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Input from "../../components/forms input/Input.jsx";
import Button from "../../components/button/Button.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";
import Image from "../../assets/img/interior_2.jpg";


function PostProperty() {
    const [formState, setFormState] = useState({
        address: '',
        price: '',
        description: '',
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
        const token = localStorage.getItem("token")

        try {
            const response = await axios.post('http://localhost:8080/properties', {
                ...formState,
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `${token}`
                    }
                });
            console.log(response.data);

            setSubmitSuccessId(response.data.id);
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
                        <h1>adding a property</h1>
                    </div>

                        {!submitSuccessful ?
                            <form className="general-form" onSubmit={handleSubmit}>
                                <div className="general-form__left-side">
                                    <h1>please add property info</h1>
                                <Input
                                    type="text"
                                    name="address"
                                    labelText="Address"
                                    placeholder="Please type the address of the property here..."
                                    required={true}
                                    formStateValue={formState.address}
                                    handleChange={handleChange}
                                />
                                <Input
                                    type="text"
                                    name="price"
                                    labelText="Price"
                                    placeholder="Please add the price of the property here..."
                                    required={true}
                                    formStateValue={formState.price}
                                    handleChange={handleChange}
                                />

                                <label htmlFor="post-property">Description of property</label>
                                <textarea
                                    name="description"
                                    id="post-property"
                                    cols="30"
                                    rows="10"
                                    required
                                    minLength={3}
                                    maxLength={700}
                                    value={formState.description}
                                    onChange={handleChange}></textarea>

                                <Button type="submit" variant="primary">send</Button>

                                {error && <ErrorMessage message="Something went wrong with adding a property. Please try again."/>}
                                </div>
                                <img className="general-form__image" src={Image}
                                     alt="Image of a yellow door"/>
                            </form>
                            : <p>You have successfully added a property.</p>}
                    </div>

            </section>
        </>
    );
}

export default PostProperty;