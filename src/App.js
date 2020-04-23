import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import data from './data/data';
import Detail from './components/detailed/Detail';
import About from './pages/About';
import Portfolio from './pages/Portfolio';



export class App extends Component{
  state = {
    data: data,
  }
  render() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' render={() => <Portfolio data={this.state.data} />} />
      <Route path='/about' component={About}/>
      <Route path='/project-details' render={() => <Detail data={this.state.data}/>} />
      </Switch>
    </BrowserRouter>
  );
  }
}

export default App;


