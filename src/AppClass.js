import React, { Component } from "react";
import BoxClass from "./component/BoxClass";
import Rock from "./assets/rock.png";
import Scissor from "./assets/scissor.png";
import Paper from "./assets/paper.png";
import Box from "./component/Box";
import Reset from './assets/reset.png'
import Background from './assets/back.png'
import "./App.css"

const choice = {
    scissor: {
      name: "Scissor",
      img: Scissor,
    },
    rock: {
      name: "Rock",
      img: Rock,
    },
    paper: {
      name: "Paper",
      img: Paper,
    },
  };


export default class AppClass extends Component {
    
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
      userCount: 0,
      computerCount: 0,
    };
    
  }

play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
    this.count(choice[userChoice], computerChoice);
  };

  judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissor" ? "lose" : "win";
    } else if (user.name == "Scissor")
      return computer.name == "Paper" ? "lose" : "win";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "lose" : "win";
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이를 만들어준다.
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };

  count = (user, computer) => {
    if (user.name === computer.name) {
      this.setState({
        userCount: this.state.userCount,
        computerCount: this.state.computerCount,
      }) 
    } else if (user.name == "Rock") {
      return computer.name == "Scissor"
        ? this.setState({computerCount: this.state.computerCount + 1})
        : this.setState  ({userCount: this.state.userCount + 1});
    } else if (user.name == "Scissor") {
      return computer.name == "Paper"
        ? this.setState({computerCount: this.state.computerCount + 1})
        : this.setState ({userCount: this.state.userCount + 1});
    } else if (user.name == "Paper") {
      return computer.name == "Rock"
        ? this.setState({computerCount: this.state.computerCount + 1})
        : this.setState({userCount: this.state.userCount + 1});
    }
  };
  resetCount = () => {
    this.setState ({
        userCount: 0,
        computerCount: 0
    });
  };
  render() {
    return (
      <div className="container">
        <img className="background" src={Background} />
        <div className="main-title">
          <h1>청개구리가위바위보</h1>
          <button className="reset" onClick={()=>this.resetCount()}>
            <img className="reset-icon" src={Reset} />
          </button>
        </div>
        <div className="main">
          <BoxClass
            title="User"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <div className="count">
            {this.state.userCount}:{this.state.computerCount}
          </div>
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="btn-box">
          <button className="btn" onClick={()=>this.play("scissor")}>
            <img className="icon" src={Scissor} />
          </button>
          <button className="btn" onClick={()=>this.play("rock")}>
            <img className="icon" src={Rock} />
          </button>
          <button className="btn" onClick={()=>this.play("paper")}>
            <img className="icon" src={Paper} />
          </button>
        </div>
      </div>
    );
  }
}
