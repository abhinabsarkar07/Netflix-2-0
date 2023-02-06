import axios from 'axios';

const instance = axios.create({
    baseurl: "https://api.themoviedb.org/3/movie/",
});

export default instance;