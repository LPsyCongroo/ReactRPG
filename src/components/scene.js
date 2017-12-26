import React, { Component } from 'react';

export default class Status extends Component {
    render(){
        return (
            <div className="player-sprite">
                <img src={this.props.player.idle} />
            </div> 
        )
    }
}