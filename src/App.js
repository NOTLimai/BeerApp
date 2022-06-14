import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Beer from './Beer';
import React from 'react';
import OneBeer from './OneBeer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Panier from './Panier';

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      beers: [],
      carts: [],
    }
  }

  render () {
    return (
      <div className='container'>
        <Header name="Bear App 🍻" />
        <Search />
        <Results beers={this.state.beers} />
        {/* <Panier  /> */}
        {/* <OneBeer /> */}
        </div>
    );
  }
}

export default App;
