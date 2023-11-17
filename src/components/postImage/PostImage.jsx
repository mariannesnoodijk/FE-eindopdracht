import axios from "axios";
import React, {useState} from "react";
import Input from "../forms input/Input.jsx";
import Button from "../button/Button.jsx";


function PostImage() {
    const [error, toggleError] = useState(false);
    const [file, setFile] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
    }

    function handleImageChange(e) {
        setFile(e.target.files[0]);
    }

    async function handleImageSubmit() {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post('http://localhost:8080/single/uploadDB', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log(response.data)
        } catch (e) {
            console.error(e);
            console.error("Error status:", e.response.status);
            console.error("Error data:", e.response.data);
        }
    }

    return (
        <>
            <section className="overview-section outer-content__container">
                <div className="inner-content-container">
                    <div className="general-form__top-section">
                        <h1>send us a picture of your home</h1>
                        <p>we would love to see</p>
                    </div>
                    <form className="general-form" onSubmit={handleSubmit}>
                        <Input
                            type="file"
                            name="file"
                            labelText="CHOOSE IMAGE TO ADD"
                            handleChange={handleImageChange}
                        />
                        <Button type="submit" onClick={handleImageSubmit} variant="primary">send</Button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default PostImage;