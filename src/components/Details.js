function Details({ detailsLogin, detailsRegister, detailsAttendance }) {
    
    if (detailsLogin) {
        return (
            <div>
                <p>Roll No: {detailsLogin.enrollmentno}</p>
                <p>Name: {detailsLogin.name}</p>
                { detailsRegister && <p>Registration ID: {detailsRegister.semlist[0].registrationid}</p> }
                {/* { detailsAttendance && <p>{detailsAttendance[0].subjectcode}  Attendance: {detailsAttendance[0].LTpercantage}</p> } */}
            </div>
        )
    }
} 

export default Details;