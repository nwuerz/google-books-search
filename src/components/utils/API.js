import axios from 'axios';

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyDcQAcw0ku6JQA32INNMQ5Sy8ieAJ58zHc";

export default {
    search: (query)=> {
        return axios.get(BASEURL + query + "&key=" + APIKEY);
    }
};