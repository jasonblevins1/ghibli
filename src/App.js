import './App.css';
import React, { Component } from 'react';
import Card from './Card';


class App extends Component {
  state = {
    movies: []
  }
  
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((data) => data.json())
      .then((json) => this.displayData(json))
      .catch((error) => {
        console.log(error);
      });
  }
  
  displayData(movies){
    console.log(movies);
    this.setState({movies});
  }



  render() {
   
    let page =[];
    this.state.movies.forEach(movie => page.push(
      <Card 
      movie = {movie}
      ></Card>
      
    ));
    console.log();
    return (
      <div className="App">
        <header className="App-header">
          {page}
         
        </header>
      </div>
    );
  }

}

export default App;
