import React, { Component } from 'react';

export default class Status extends Component {
    render(){
        const character = this.props.character;

        return (
            <div className={"status " + character.name}>
                <h3>{character.name}</h3>
                <p>Health: {character.health}</p>
            </div>
        )
    }
}