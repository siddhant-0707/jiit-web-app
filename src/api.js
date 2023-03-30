import axios from 'axios';

const getLogin = async (username, password) => {
    const response = await axios.post('https://webportal.jiit.ac.in:6011/StudentPortalAPI/token/generate-token1', {
        "otppwd": "PWD",
        "username": username,
        "passwordotpvalue": password,
        "Modulename": "STUDENTMODULE"
    });
    return response.data.response.regdata;
};

export default getLogin;