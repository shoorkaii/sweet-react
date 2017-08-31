export function setAxiosHeader() {
    let axiosDefaults = require('axios/lib/defaults');
    axiosDefaults.headers.common['user-token'] = 'EA4323C2-42FF-3D68-FF03-FFB0EB110E00';
    axiosDefaults.headers.common['Content-Type'] = 'application/json';
}