import axios from 'axios';

//INDEX, SHOW, CREATE, UPDATE, DESTROY
const getAllArticles = () =>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/api/articles`);
};

//Delete Article by ID
const deleteArticleByID = (id) =>{
    return axios.delete(`${process.env.REACT_APP_BASE_URL}/api/articles/${id}`)
}

export { getAllArticles, deleteArticleByID };