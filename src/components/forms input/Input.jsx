import './Input.css';

function Input({ labelText, name, handleChange, placeholder, required, type, formStateValue }) {
    const labelInputLink = `account-${name}`;

    return (
        <>
            <label htmlFor={labelInputLink}>{labelText}</label>
            <input
                type={type}
                id={labelInputLink}
                name={name}
                placeholder={placeholder}
                required={required}
                value={formStateValue}
                onChange={handleChange}
                />
        </>
    );
}

export default Input;