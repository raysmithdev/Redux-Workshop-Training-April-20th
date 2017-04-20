import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from '../../actions'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <List />
      </div>
    );
  }
}

export default connect()(App);
