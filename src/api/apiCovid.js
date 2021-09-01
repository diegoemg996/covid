import axios from 'axios';


const apiCovid = axios.create({
    baseURL: 'https://covid-api.mmediagroup.fr/v1',
});


export default apiCovid;