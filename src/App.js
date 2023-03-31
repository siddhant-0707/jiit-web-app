import { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import AttendanceTable from "./components/AttendanceTable";
import { getLogin, getSemDetails, getAttendanceDetails } from "./api_attendance";
import { getSemesterCode } from "./api_exam";

function App() {
    const [detailsLogin, setDetailsLogin] = useState(null);
    const [detailsRegister, setDetailsRegister] = useState(null);
    const [detailsAttendance, setDetailsAttendance] = useState(null);
    const [detailsExam, setDetailsExam] = useState(null);

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

        // const resultSemCode = await getSemesterCode(detailsLogin.clientid,
        //     detailsLogin.institutelist[0].value, detailsLogin.memberid, detailsLogin.token);
        // console.log(resultSemCode);
        // setDetailsExam(resultSemCode);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} />    
            <Details detailsLogin={detailsLogin} detailsRegister={detailsRegister} detailsAttendance={detailsAttendance}/>
            <AttendanceTable data={detailsAttendance} />
        </div>
    )
}

export default App;