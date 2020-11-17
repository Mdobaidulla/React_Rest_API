import React, { Component } from 'react';
import Articles from './articles/components/Articles';
import About from './pages/components/About'
import {Route, Link} from 'react-router-dom';
import Team from './pages/components/Team';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      articles: [
       
      ]
    }
  }

  setArticles = (articles) => {
    this.setState(
      {
        articles: articles
      }
    )
  }
  render(){
    return(
      <>
          <h1> Welcome to blogy!!</h1>
         <Link to='/team'>Team</Link> 
         {'  |   '}
        <Link to='/about'> About Us</Link>
          <Route path='/team' component ={Team} />
          <Route path='/about' component = {About} />
          <Articles articles = {this.state.articles}
             setArticles={this.setArticles}/>
      </>
    )
  }
}
export default App;