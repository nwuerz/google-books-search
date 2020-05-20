import axios from 'axios';

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.gb_key;

export default {
    search: (query)=> {
        return axios.get(BASEURL + query + "&key=" + APIKEY);
    }
};