import { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import getLogin from "./api";

function App() {
    const [details, setDetails] = useState(null);

    const handleSubmit = async (inputs) => {
        const result = await getLogin(inputs.username, inputs.password);
        setDetails(result);
        console.log(details);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} />
            <Details details={details} />
        </div>
    )
}

export default App;