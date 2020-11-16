import React, { Component } from 'react';
import Articles from './articles/components/Articles';
class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      articles: [
        {title:'T1',author:'A1', content: 'C1'},
        {title:'T2',author:'A2', content: 'C2'},
        {title:'T3',author:'A3', content: 'C3'},
        {title:'T4',author:'A4', content: 'C4'}
      ]
    }
  }
  render(){
    return(
      <>
          <h1> Welcome to blogy!!</h1>
          <Articles articles = {this.state.articles}/>
      </>
    )
  }
}
export default App;