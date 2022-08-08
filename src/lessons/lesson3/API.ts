import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = 'f7c9d2f2';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
       return  axiosInstance.get(`?apikey=${key}&s=${title}`).then((data)=> data.data.Search).catch(()=> `no movies found`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return  axiosInstance.get(`?apikey=${key}&s=${title}&type=${type}`).then((data)=> data.data.Search).catch(()=> `not found`)
    }
};


export default API;
