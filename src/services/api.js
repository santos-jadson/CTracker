import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    if(country === 'global' || !country) {
        return axios.get(url)
    }

    return axios.get(`${url}/countries/${country}`)
}

export const fetchCountries = async () => {
    return axios.get(`${url}/countries`)
}