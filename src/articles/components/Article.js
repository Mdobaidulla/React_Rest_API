import React, { Component } from 'react';
class Article extends Component{
  render(){
    return(
      <div className="article">
         <h4>{this.props.title}</h4>
         <sub>{this.props.author}</sub>
         <p>{this.props.content}</p>
         <p>{this.props.id}</p>
         <a href="#" onClick={this.deleteArticle} >Delete</a>
      </div>
      
    )
  }
  deleteArticle = (e) =>{
    e.preventDefault();
    this.props.deleteArticle(this.props.id)
  }
}
export default Article;