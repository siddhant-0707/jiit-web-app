import axios from 'axios';

let clientid = "";
let instituteid = "";
let membertype = "";
let studentid = "";
let token = "";
let stynumber = "";
let registrationcode = "";
let registrationid = "";

const getLogin = async (username, password) => {
    const response = await axios.post('https://webportal.jiit.ac.in:6011/StudentPortalAPI/token/generate-token1', {
        "otppwd": "PWD",
        "username": username,
        "passwordotpvalue": password,
        "Modulename": "STUDENTMODULE"
    });
    clientid = response.data.response.regdata.clientid;
    instituteid = response.data.response.regdata.institutelist[0].value;
    membertype = response.data.response.regdata.membertype;
    studentid = response.data.response.regdata.memberid;
    token = response.data.response.regdata.token;
    return response.data.response.regdata;
};

const getSemDetails = async () => {
    const options = {
        method: 'POST',
        url: 'https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentInforegistrationforattendence',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        data: {
            clientid: clientid,
            instituteid: instituteid,
            membertype: membertype,
            studentid: studentid
        }
    };

    try {
        const response = await axios(options);
        // console.log(response);
        stynumber = response.data.response.headerlist[0].stynumber;
        registrationcode = response.data.response.semlist[0].registrationcode;
        registrationid = response.data.response.semlist[0].registrationid;
        // console.log(stynumber + " " + registrationcode + " " + registrationid);
        return response.data.response;
    } catch (error) {
        console.error(error);
    }
};

const getAttendanceDetails = async () => {
    const options = {
        method: 'POST',
        url: 'https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentattendancedetail',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        data: {
          clientid: clientid,
          instituteid: instituteid,
          studentid: studentid,
          stynumber: stynumber,
          registrationid: registrationid
        }
      };
      
      try {
        const response = await axios(options);
        console.log(response);
        return response.data.response.studentattendancelist;
      } catch (error) {
        console.error(error);
      }
}

export { getLogin, getSemDetails, getAttendanceDetails };