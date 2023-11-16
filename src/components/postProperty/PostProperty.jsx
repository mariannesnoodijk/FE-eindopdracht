import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Input from "../forms input/Input.jsx";
import Button from "../button/Button.jsx";


function PostProperty() {
    const [formState, setFormState] = useState({
        address: '',
        price: '',
        description: '',
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
            const response = await axios.post('http://localhost:8080/properties', {
                ...formState
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
            <section className="new-general-form-section outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <div className="general-form-top">
                        <Link to='/'>Bring me back home</Link>
                        <h1>adding a property</h1>
                    </div>

                        {!submitSuccessId ?
                            <form className="general-form" onSubmit={handleSubmit}>
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

                                {error && <p>Something went wrong with adding a property. Please try again.</p>}
                            </form>
                            : <p>You have successfully added a property.</p>}
                    </div>

            </section>
        </>
    );
}

export default PostProperty;