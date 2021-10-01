// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';


class App extends React.Component{
  state = {
    result:"0"
  };

  // Add 'val' to state result:string
  addToResult =  (val:string) => {
    if((val == "+" || val == "-" || val == "*" || val == "/" || val == ".") && (this.state.result.endsWith(".") || this.state.result.endsWith("+") || this.state.result.endsWith("-") || this.state.result.endsWith("*") || this.state.result.endsWith("/"))){
      return;
    }
    if(this.state.result == "0" && val != "."){
      this.setState({result: val});
    }else{
      this.setState({result: this.state.result + val});
    }
    // console.log({result: this.state.result});
  };

  
  calculateResult = () => {
    const temp:number = (eval(this.state.result));
    this.setState({result: this.state.result == "-0" ? "0" : temp.toString()});
  };

  allClearToResult = () => {
    this.setState({result: "0"});
  };

  signBitToResult = () => {
    let temp:number = parseFloat(this.state.result);
    temp *= -1;
    this.setState({result: temp.toString()});
  };

  percentToResult = () => {
    let temp:number = parseFloat(this.state.result);
    temp /= 100;
    this.setState({result: temp.toString()});
  };

  render(){
    return (
      <div className="App">
        <div className="AppWrapper">
          <div className="AppHeader">
            <a href="/">App</a>
          </div>
          <div className="AppNav">
            <ul>
              <li>Calculator</li>
            </ul>
          </div>
          <div className="AppContent">
            <div className="Calculator">
              <div className="result">
                <input readOnly type="text" name="calResult" id="calResult" value={this.state.result}/>
              </div>
              <div className="Buttons">
                <div className="greyBtns">
                  <button className="btn" onClick={() => this.allClearToResult()}>AC</button>
                  <button className="btn" onClick={() => this.signBitToResult()}>+/-</button>
                  <button className="btn" onClick={() => this.percentToResult()}>%</button>
                </div>
                <div className="blackBtns">
                  <button className="btn" onClick={() => this.addToResult('7')}>7</button>
                  <button className="btn" onClick={() => this.addToResult('8')}>8</button>
                  <button className="btn" onClick={() => this.addToResult('9')}>9</button>
                  <button className="btn" onClick={() => this.addToResult('4')}>4</button>
                  <button className="btn" onClick={() => this.addToResult('5')}>5</button>
                  <button className="btn" onClick={() => this.addToResult('6')}>6</button>
                  <button className="btn" onClick={() => this.addToResult('1')}>1</button>
                  <button className="btn" onClick={() => this.addToResult('2')}>2</button>
                  <button className="btn" onClick={() => this.addToResult('3')}>3</button>
                  <button className="btn" onClick={() => this.addToResult('0')}>0</button>
                  <button className="btn" onClick={() => this.addToResult('.')}>.</button>
                </div>
                <div className="orangeBtns">
                  <button className="btn" onClick={() => this.addToResult('/')}>/</button>
                  <button className="btn" onClick={() => this.addToResult('*')}>*</button>
                  <button className="btn" onClick={() => this.addToResult('-')}>-</button>
                  <button className="btn" onClick={() => this.addToResult('+')}>+</button>
                  <button className="btn" onClick={() => this.calculateResult()}>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;