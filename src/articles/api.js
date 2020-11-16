import axios from 'axios';
const getAllArticles = () =>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/articles`);
};


export { getAllArticles };