function Details({
  detailsLogin,
  detailsRegister,
  detailsReg,
  detailsTeacher,
}) {
  if (detailsLogin) {
    return (
      <div>
        <p>Roll No: {detailsLogin.enrollmentno}</p>
        <p>Name: {detailsLogin.name}</p>
        {detailsRegister && (
          <p>Registration ID: {detailsRegister.semlist[0].registrationid}</p>
        )}
{/*         {detailsReg && (
          <p>Some ID: {detailsReg.registrations[0].registrationid}</p>
        )} */}
      </div>
    );
  }
}

export default Details;
