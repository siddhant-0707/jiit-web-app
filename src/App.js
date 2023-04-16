import { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import AttendanceTable from "./components/AttendanceTable";
import {
  getLogin,
  getSemDetails,
  getAttendanceDetails,
  getRegistrationList
} from "./api_attendance";

function App() {
  const [detailsLogin, setDetailsLogin] = useState(null);
  const [detailsRegister, setDetailsRegister] = useState(null);
  const [detailsAttendance, setDetailsAttendance] = useState(null);
  const [detailsReg, setDetailsReg] = useState(null);

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

    const resultRegister = await getRegistrationList();
    console.log(resultRegister);
    setDetailsReg(resultRegister);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Details
        detailsLogin={detailsLogin}
        detailsRegister={detailsRegister}
        detailsAttendance={detailsAttendance}
        detailsReg={detailsReg}
      />
      <AttendanceTable data={detailsAttendance} />
    </div>
  );
}

export default App;
