import React from 'react';
import './App.css';
import Car from './Car/Car';

const App = function() {
  this.state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '2010'}
    ]
  }
    const divStyle = {
      textAlign: 'center'
    }
  
    const cars = this.state.cars
    return (
        <div style={divStyle}>
          <h1>Hello world</h1>
          <Car name={'cars[0].name'} year={cars[0].year}/>
          <Car name={'cars[1].name'} year={cars[1].year}/>
          <Car name={'cars[1].name'} year={cars[1].year}/>
        </div>
    )

  

}

export default App;
