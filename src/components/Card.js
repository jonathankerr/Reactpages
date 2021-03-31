import React, { Component } from 'react'
import '../App.css';

export default class Card extends Component {
  render() {
    return (
        <div class="card-wrapper">
            <h1>Jonathan Kerr</h1>
            <p>Third Year Bsc Hons Computer Science Student</p>
            <br></br>
            <ul>
                <li>📍 Glasgow</li>
                <li>🎓 The University of Strathclyde</li>
                <li><a href="https://github.com/jonathankerr" target="_blank" rel="noreferrer">💻 Github</a></li>
            </ul>
        </div>
    )
  }
}