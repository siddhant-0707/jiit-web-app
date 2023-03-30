import { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import { getLogin, getSemDetails } from "./api";

function App() {
    const [detailsLogin, setDetailsLogin] = useState(null);
    const [detailsRegister, setDetailsRegister] = useState(null);

    const handleSubmit = async (inputs) => {
        const resultLogin = await getLogin(inputs.username, inputs.password);
        setDetailsLogin(resultLogin);
        console.log(resultLogin);
        const resultRegistration = await getSemDetails();
        console.log(resultRegistration);  
        setDetailsRegister(resultRegistration);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} />
            <Details detailsLogin={detailsLogin} detailsRegister={detailsRegister} />
        </div>
    )
}

export default App;