import React, { Component } from 'react';
import Article from './Article';
import {getAllArticles, deleteArticleByID} from '../api';
class Articles extends Component{
  
    componentDidMount(){
        getAllArticles()
        .then((response) =>{
         this.props.setArticles(response.data.articles);
        })
        .catch((error) =>{
            console.log(`API ERROR:`, error);
        })


    };   
  render(){
    let allArticles = <h4>No Articles!!</h4>;
   if(this.props.articles.length > 0 ){
    allArticles = this.props.articles.map((article, index) =>{
        return <Article title={article.title}
                        author = {article.author}
                        content = {article.content}
                        key ={index}
                        deleteArticle={this.deleteArticle}
                        id={article._id}
                        
          />
        
    })
  }

    return(
      <>
          <h3>All Articles</h3>
          {allArticles}
      </>
    )
  }
  
  deleteArticle = (id =>{
    deleteArticleByID(id)
    .then((response) =>{
      console.log(`This Id's value is DELETED ${id}`,response);
      const newArticalesList =  this.props.articles.filter((article) =>{
        return article._id !== id;
      })
  this.props.setArticles(newArticalesList);    


    }).catch((error)=>{
      console.log("error", error);
    })
  })

}
export default Articles;