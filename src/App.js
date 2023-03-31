import { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import { getLogin, getSemDetails, getAttendanceDetails } from "./api";

function App() {
    const [detailsLogin, setDetailsLogin] = useState(null);
    const [detailsRegister, setDetailsRegister] = useState(null);
    const [detailsAttendance, setDetailsAttendance] = useState(null);

    const handleSubmit = async (inputs) => {
        const resultLogin = await getLogin(inputs.username, inputs.password);
        setDetailsLogin(resultLogin);
        console.log(resultLogin);

        const resultRegistration = await getSemDetails();
        // console.log(resultRegistration);  
        setDetailsRegister(resultRegistration);

        const resultAttendace = await getAttendanceDetails();
        console.log(resultAttendace);
        setDetailsAttendance(resultAttendace);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} />    
            <Details detailsLogin={detailsLogin} detailsRegister={detailsRegister} detailsAttendance={detailsAttendance}/>
        </div>
    )
}

export default App;