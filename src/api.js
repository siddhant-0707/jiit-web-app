import axios from 'axios';

let clientid = "";
let instituteid = "";
let membertype = "";
let studentid = "";
let token = "";

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
      
    axios.request(options).then(function (response) {
        return response.data.response;
    }).catch(function (error) {
        console.error(error);
    });
}

export { getLogin, getSemDetails };