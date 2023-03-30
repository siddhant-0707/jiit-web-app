function Details({ detailsLogin, detailsRegister }) {
    if (detailsLogin) {
        return (
            <div>
                <p>Roll No: {detailsLogin.enrollmentno}</p>
                <p>Name: {detailsLogin.name}</p>
                {/* <p>Branch: {detailsRegister.headerlist[0].branchdesc}</p> */}
            </div>
        )
    }

}


/* function Details({ detailsLogin, detailsRegister }) {
    if (detailsLogin) {
      return (
        <div>
          <p>Roll No: {detailsLogin.enrollmentno}</p>
          <p>Name: {detailsLogin.name}</p>
          {detailsRegister && detailsRegister.semlist && detailsRegister.semlist.length > 0 && (
            <p>Registration Code: {detailsRegister.semlist[0].registrationcode}</p>
          )}
        </div>
      );
    }
    return null;
  } */
  

export default Details;