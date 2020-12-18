import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!


class App extends Component {

  state = {
    sushis: [],
    index: 0,
    eatenSushi: [],
    money: 100
  }

  componentDidMount(){
    const API = "http://localhost:3000/sushis"
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
  })
}
// ________renderSushi will render every 4 sushi using slice.
renderSushi= () => {
  return this.state.sushis.slice(this.state.index, this.state.index + 4)
}

// _________moreSushi would fire onClick from "more sushi" and will add another 4 sushi on belt
moreSushi = () => {
  return this.setState({
    index: this.state.index + 4
  })
}

//___________function fire when user click the sushi to eat,
// __________will deduct money based on sushi price and will add that sushiObj to eatenSushi array.
eatSushi = (e, sushi) => {
  if (this.state.money < sushi.price) {
    alert("Need more money!")
  }else {
  this.setState((prevState) => {
    return {
      eatenSushi: [...prevState.eatenSushi, sushi],
      money: prevState.money - sushi.price
      }
    }
  )}
}

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.renderSushi()} moreSushi={this.moreSushi} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;