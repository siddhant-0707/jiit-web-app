import { useState } from "react";

function Form({ onSubmit }) {
/*     const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    } */

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // onSubmit(inputs);
        console.log(inputs);
    }
    // console.log(username);
    return ( 
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Enter details:</label>
                <br />
                <br />
                <input name="username" value={inputs.username || ""} onChange={handleChange} placeholder="enter username"/>
                <input name="password" value={inputs.password || ""} onChange={handleChange} placeholder="enter password"/>
            </form>
        </div>
    );
}

export default Form;