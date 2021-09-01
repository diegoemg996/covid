import axios from 'axios';

//Se crea la base para hacer llamados a la api mediante axios
const apiCovid = axios.create({
    baseURL: 'https://covid-api.mmediagroup.fr/v1',
});


export default apiCovid;