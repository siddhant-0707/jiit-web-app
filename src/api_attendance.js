import axios from "axios";

let clientid = "";
let instituteid = "";
let membertype = "";
let studentid = "";
let token = "";
let stynumber = "";
let registrationcode = "";
let registrationid = "";

const getLogin = async (username, password) => {
  try {
    const response = await axios.post(
      "https://webportal.jiit.ac.in:6011/StudentPortalAPI/token/generate-token1",
      {
        otppwd: "PWD",
        username: username,
        passwordotpvalue: password,
        Modulename: "STUDENTMODULE",
      }
    );
    const regData = response.data.response.regdata;
    if (!regData) {
      throw new Error("Invalid response from server");
    }
    clientid = regData.clientid;
    instituteid = regData.institutelist[0].value;
    membertype = regData.membertype;
    studentid = regData.memberid;
    token = regData.token;
    return regData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to login");
  }
};

const getSemDetails = async () => {
  const options = {
    method: "POST",
    url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentInforegistrationforattendence",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: {
      clientid: clientid,
      instituteid: instituteid,
      membertype: membertype,
      studentid: studentid,
    },
  };

  try {
    const response = await axios(options);
    // console.log(response);
    stynumber = response.data.response.headerlist[0].stynumber;
    registrationcode = response.data.response.semlist[1].registrationcode;
    registrationid = response.data.response.semlist[1].registrationid;
    // console.log(stynumber + " " + registrationcode + " " + registrationid);
    return response.data.response;
  } catch (error) {
    console.error(error);
  }
};

const getAttendanceDetails = async () => {
  const options = {
    method: "POST",
    url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentattendancedetail",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: {
      clientid: clientid,
      instituteid: instituteid,
      studentid: studentid,
      stynumber: stynumber,
      registrationid: registrationid,
    },
  };

  try {
    const response = await axios(options);
    console.log(response.data.response.studentattendancelist);
    return response.data.response.studentattendancelist;
  } catch (error) {
    console.error(error);
  }
};

const getRegistrationList = async () => {
  const options = {
    method: "POST",
    url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/reqsubfaculty/getregistrationList",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: { instituteid: instituteid, studentid: studentid },
  };

  try {
    const response = await axios(options);
    console.log(response.data.response);
    return response.data.response.registrations;
  } catch (error) {
    console.error(error);
  }
};

const getTeacherName = async (input) => {
  const options = {
    method: "POST",
    url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/reqsubfaculty/getfaculties",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: {
      studentid: studentid,
      instituteid: instituteid,
      registrationid: input,
    },
  };

  try {
    const response = await axios(options);
    console.log(response);
    return response.data.response;
  } catch (error) {
    console.error(error);
  }
};

const getSubjectAttendance = async (subjectidInput) => {
  const options = {
    method: "POST",
    url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentsubjectpersentage",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: {
      clientid: "JAYPEE",
      instituteid: instituteid,
      studentid: studentid,
      subjectid: subjectidInput,
      registrationid: registrationid,
      cmpidkey: [
        { subjectcomponentid: "JISCP19050000001" },
        { subjectcomponentid: "JISCP19050000002" },
      ],
    },
  };

  try {
    const response = await axios(options);
    console.log(response.data.response.studentAttdsummarylist);
    return response.data.response.studentAttdsummarylist;
  } catch (error) {
    console.error(error);
  }
};

export {
  getLogin,
  getSemDetails,
  getAttendanceDetails,
  getRegistrationList,
  getTeacherName,
  getSubjectAttendance,
};
