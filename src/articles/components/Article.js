import React, { Component } from 'react';
class Article extends Component{
  render(){
    return(
      <div className="article">
         <h4>{this.props.title}</h4>
         <sub>{this.props.author}</sub>
         <p>{this.props.content}</p>
      </div>
    )
  }
}
export default Article;