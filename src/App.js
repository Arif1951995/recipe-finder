import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form'
import Recipe from './components/Recipe/Recipe'
 
class App extends Component {
  state = {
    input: '',
    query: '',
    data: '',
    loading: ''
  }
  
  changeHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  handleSubmit = e => {
  
    e.preventDefault();
    this.setState({
      query: this.state.input,
      input: '',
      loading: 'Loading...'

    
    }, () => {
     
      const APP_ID = 'a014093c';
    const APP_KEY = '58fb5b7c7547a9aa688206127e3e6a4a';
    let query = this.state.query 

    const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: data

      })
      console.log(this.state.data);

    })
    })
   
    
  


  
  }


 render() {
  return (
    <div className="app">
     <Form
     onSubmit={this.handleSubmit}
     value={this.state.input}
     onChange={this.changeHandler}
     />
     <div className="recipes">
     {this.state.data ?  this.state.data.hits.map(hit => {
       return <Recipe recipe={hit.recipe} />
     }) : this.state.loading}
     </div>
    </div>
  );
 }
}

export default App;
