import { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import AttendanceTable from "./components/AttendanceTable";
import {
  getLogin,
  getSemDetails,
  getAttendanceDetails,
  getRegistrationList,
  getTeacherName,
  getSubjectAttendance,
} from "./api_attendance";

function App() {
  const [detailsLogin, setDetailsLogin] = useState(null);
  const [detailsRegister, setDetailsRegister] = useState(null);
  const [detailsAttendance, setDetailsAttendance] = useState(null);
  const [detailsReg, setDetailsReg] = useState(null);
  const [detailsTeacher, setDetailsTeacher] = useState(null);

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
    console.log(resultRegister[0].registrationid);
    setDetailsReg(resultRegister);

    const resultTeacher = await getTeacherName(
      resultRegister[1].registrationid
    );
    console.log(resultTeacher);
    setDetailsTeacher(resultTeacher);
    
    const subjectid = detailsAttendance[0].subjectid;
    
    
    const resultSubjectAttendance = await getSubjectAttendance(subjectid);
    console.log(resultSubjectAttendance);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Details
        detailsLogin={detailsLogin}
        detailsRegister={detailsRegister}
        detailsAttendance={detailsAttendance}
        detailsReg={detailsReg}
        detailsTeacher={detailsTeacher}
      />
      <AttendanceTable data={detailsAttendance} />
    </div>
  );
}

export default App;
