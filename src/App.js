import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Put values in state for it to update the page
    this.state = {
      // Declare everything you want to use on the page
      remoteData: '',
      text: '',
      obj: {
      },
      list: [
        'Hello this is a list',
        'I am another text',
      ],
    };
  }

  clickHandler() {
    axios.get(this.state.text)
      .then((res) => {
        this.setState({
          remoteData: res.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="input-box">
            <input
              value={this.state.text}
              onChange={(e) => {
                console.log(e);
                // screen changes if you call this
                this.setState({
                  // Step 1 is update the state value
                  text: e.target.value,
                })
              }}
            />
          </div>
          <div style={{ backgroundColor: this.state.color }} className="input-box">
            <h3>Color Box</h3>
            <input
              value={this.state.color}
              onChange={(e) => {
                console.log(e);
                // screen changes if you call this
                this.setState({
                  // Step 1 is update the state value
                  color: e.target.value,
                })
              }}
            />
          </div>
          <div>
            <button onClick={this.clickHandler.bind(this)}>Click Me</button>
          </div>
          <div>{this.state.text}</div>
          <div>{this.state.remoteData}</div>

          <div>
            {this.state.list.map((value) => {
              // stream api in Java
              // surround variables with {}
              return <div>{value}</div>
            })}
          </div>



          <div>
            This is a divider.
            <div>
              I am a box in a box
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
