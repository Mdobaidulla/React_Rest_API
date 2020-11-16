import React, { Component } from 'react';
import Articles from './articles/components/Articles';
class App extends Component{
  render(){
    return(
      <>
          <h1> Welcome to blogy!!</h1>
          <Articles />
      </>
    )
  }
}
export default App;