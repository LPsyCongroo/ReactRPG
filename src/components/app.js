import React, { Component } from 'react';
import Status from './status';
import Scene from './scene';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {
        name: "ali",
        health: 100,
        idle: "../../Sprites/idle.png"
      },
      enemy: {
        name: "enemy",
        health: 100,
        idle: "../../Sprites/enemy_idle.png"
      }
    }
  }
  render() {
    return (
      <div>
        <div className="stats">
          <Status character={this.state.player} />
          <Status character={this.state.enemy} />
        </div>
        <Scene player={this.state.player}  />
      </div>
    );
  }
}
