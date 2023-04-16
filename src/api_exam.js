import axios from "axios";

const getSemesterCode = async (clientid, instituteid, memberid, token) => {
  const options = {
    method: "POST",
    url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/studentcommonsontroller/getsemestercode-withstudentexamevents",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: { clientid: clientid, memberid: memberid, instituteid: instituteid },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { getSemesterCode };
