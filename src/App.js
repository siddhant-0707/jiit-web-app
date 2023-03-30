import { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import getLogin from "./api";

function App() {
    const [details, setDetails] = useState(null);

    const handleSubmit = async (username, password) => {
        const result = await getLogin(username, password);
        setDetails(result);
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit} />
            <Details details={details} />
        </div>
    )
}

export default App;